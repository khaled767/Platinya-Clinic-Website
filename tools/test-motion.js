#!/usr/bin/env node
/**
 * Motion-layer test — proves the animation is a BONUS, never a requirement.
 *
 * Four scenarios, all on the real built bundle in jsdom:
 *
 *   1. no IntersectionObserver (jsdom's default, and any very old browser):
 *      nothing is hidden, no reveal attributes are written — the page is whole;
 *   2. a real IntersectionObserver (stubbed, firing immediately): the reveal
 *      attributes, the stagger delays and the reading-progress bar all appear;
 *   3. prefers-reduced-motion: reduce → the motion layer stays completely off;
 *   4. the Arabic page loads the Arabic family and the html[lang="ar"] rules
 *      that give it a real typeface instead of the device default.
 *
 * Usage:  node tools/test-motion.js        (run after `npm run build:full`)
 * Exits non-zero on the first failed expectation.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 8127;
let failures = 0;

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".xml": "application/xml", ".woff2": "font/woff2",
  ".txt": "text/plain",
};

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const p = decodeURIComponent(req.url.split("?")[0]);
      let file = path.join(DIST, p);
      try {
        if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
        if (!fs.existsSync(file)) { res.statusCode = 404; return res.end("not found"); }
        res.setHeader("Content-Type", MIME[path.extname(file)] || "application/octet-stream");
        res.end(fs.readFileSync(file));
      } catch (e) {
        res.statusCode = 500;
        res.end(String(e));
      }
    });
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

function check(ok, label, detail) {
  if (ok) {
    console.log(`  ok   ${label}${detail ? "  -> " + detail : ""}`);
  } else {
    failures++;
    console.log(`  FAIL ${label}${detail ? "  -> " + detail : ""}`);
  }
}

async function boot(url, { withIO, reduced }) {
  const vc = new VirtualConsole();
  vc.on("jsdomError", () => {});
  const dom = await JSDOM.fromURL(url, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(window) {
      if (withIO) {
        // Simulates a real observer: only the elements already on screen (the
        // first few in document order) fire; the rest wait for a scroll.
        window.IntersectionObserver = class {
          constructor(cb) { this.cb = cb; this.above = 5; }
          observe(el) {
            if (this.above-- <= 0) return;
            setTimeout(() => this.cb([{ target: el, isIntersecting: true }], this), 0);
          }
          unobserve() {}
          disconnect() {}
        };
      }
      if (reduced) {
        window.matchMedia = (q) => ({
          matches: /prefers-reduced-motion: reduce/.test(q),
          media: q,
          addEventListener() {}, removeEventListener() {},
          addListener() {}, removeListener() {}, onchange: null,
        });
      }
    },
  });

  await new Promise((r) => {
    const t0 = Date.now();
    const tick = () => {
      if (dom.window.document.documentElement.getAttribute("data-app-booted") === "1") return r();
      if (Date.now() - t0 > 8000) return r();
      setTimeout(tick, 40);
    };
    tick();
  });
  await new Promise((r) => setTimeout(r, 120));
  return dom;
}

(async () => {
  const server = await serve();
  const base = `http://127.0.0.1:${PORT}`;

  console.log("1) no IntersectionObserver — content must stay visible");
  {
    const dom = await boot(base + "/", { withIO: false, reduced: false });
    const d = dom.window.document;
    check(!d.documentElement.classList.contains("motion-ready"),
      "motion layer stays dormant without IntersectionObserver");
    check(d.querySelectorAll("[data-reveal]").length === 0,
      "no reveal attributes injected into the crawler-visible DOM",
      d.querySelectorAll("[data-reveal]").length + " elements");
    check(Boolean(d.querySelector(".hero-title")?.textContent.trim()),
      "hero title is rendered and not hidden");
    check(!d.querySelector(".scroll-progress"), "no progress bar injected");
    dom.window.close();
  }

  console.log("\n2) with IntersectionObserver — the motion layer arms itself");
  {
    const dom = await boot(base + "/", { withIO: true, reduced: false });
    const d = dom.window.document;
    check(d.documentElement.classList.contains("motion-ready"), "html.motion-ready added");
    const hero = d.querySelector(".hero-title");
    check(hero?.getAttribute("data-reveal") === "", "hero title carries data-reveal");
    check(hero?.classList.contains("is-visible"), "hero title revealed");
    const delay = hero?.style.getPropertyValue("--reveal-delay");
    check(Boolean(delay) && delay !== "0ms", "hero cascade is staggered", delay);
    check(Boolean(d.querySelector(".hero-media[data-reveal='image']")),
      "hero image uses the image variant (no drift, gentle scale)");
    const revealed = d.querySelectorAll("[data-reveal].is-visible").length;
    const total = d.querySelectorAll("[data-reveal]").length;
    check(revealed > 0 && total > revealed, "some revealed, the rest wait for scroll",
      `${revealed}/${total}`);
    check(Boolean(d.querySelector(".scroll-progress .scroll-progress__fill")),
      "reading-progress bar injected");
    dom.window.close();
  }

  console.log("\n3) prefers-reduced-motion: reduce — nothing animates, nothing hides");
  {
    const dom = await boot(base + "/", { withIO: true, reduced: true });
    const d = dom.window.document;
    check(!d.documentElement.classList.contains("motion-ready"),
      "motion layer stays off for reduced-motion visitors");
    check(d.querySelectorAll("[data-reveal]").length === 0,
      "no elements are given reveal attributes at all");
    dom.window.close();
  }

  console.log("\n4) Arabic page — real Arabic family, not the device default");
  {
    const dom = await boot(base + "/ar/", { withIO: true, reduced: false });
    const d = dom.window.document;
    check(d.documentElement.getAttribute("lang") === "ar", "html lang=ar");
    check(d.documentElement.getAttribute("dir") === "rtl", "html dir=rtl");
    const href = Array.from(d.querySelectorAll('link[rel="stylesheet"]'))
      .map((l) => l.getAttribute("href") || "").join(" ");
    check(/IBM\+Plex\+Sans\+Arabic/.test(href), "Arabic family requested from Google Fonts");
    const css = fs.readdirSync(DIST).filter((f) => f.endsWith(".css"))
      .map((f) => fs.readFileSync(path.join(DIST, f), "utf8")).join("\n");
    check(/html\[lang="ar"\]/.test(css), "html[lang=ar] rules shipped in the stylesheet");
    check(/letter-spacing:\s*normal\s*!important/.test(css),
      "Arabic letter-spacing neutralised (cursive joins stay intact)");
    dom.window.close();
  }


  console.log("\n5) phase 2 — count-up, swipe, parallax");
  {
    const dom = await boot(base + "/", { withIO: true, reduced: false });
    const w = dom.window;
    const d = w.document;

    // count-up: starts at the real number and lands back on it, digit by digit
    const tv = d.querySelector(".trust-value");
    const before = tv ? tv.textContent.trim() : "";
    await new Promise((r) => setTimeout(r, 1600));
    const after = tv ? tv.textContent.trim() : "";
    // The animation may already be running when the DOM is inspected, so the
    // contract is: it starts from a partial count and lands exactly on 100%.
    const started = parseInt(before, 10);
    check(!Number.isNaN(started) && started <= 100 && after === "100%",
      "count-up settles on 100%", `${before} -> ${after}`);
    check(Boolean(tv) && !tv.classList.contains("is-counting"), "count-up cleans up its state class");

    // swipe: a left drag must advance the carousel. The carousel itself only
    // paints its active card once the interaction layer runs, so the test spies
    // on the control the drag is supposed to press.
    const stage = d.querySelector("#carousel-stage");
    const nextBtn = d.querySelector("#carousel-next");
    let forward = 0;
    let backward = 0;
    if (nextBtn) nextBtn.addEventListener("click", () => forward++);
    if (d.querySelector("#carousel-prev")) d.querySelector("#carousel-prev").addEventListener("click", () => backward++);

    const ev = (type, x, y) => {
      const e = new w.Event(type, { bubbles: true });
      Object.defineProperty(e, "clientX", { value: x });
      Object.defineProperty(e, "clientY", { value: y });
      Object.defineProperty(e, "pointerType", { value: "touch" });
      Object.defineProperty(e, "button", { value: 0 });
      return e;
    };
    stage.dispatchEvent(ev("pointerdown", 300, 100));
    stage.dispatchEvent(ev("pointermove", 200, 100));
    stage.dispatchEvent(ev("pointerup", 200, 100));
    check(forward === 1 && backward === 0, "swiping left advances the carousel", `forward=${forward} backward=${backward}`);
    check(!stage.classList.contains("is-dragging"), "drag state is cleaned up on release");

    // a vertical drag belongs to the page, not the carousel
    stage.dispatchEvent(ev("pointerdown", 300, 100));
    stage.dispatchEvent(ev("pointermove", 290, 220));
    stage.dispatchEvent(ev("pointerup", 290, 220));
    check(forward === 1, "a vertical drag does not change the slide", `forward=${forward}`);

    // a tiny nudge is not a swipe
    stage.dispatchEvent(ev("pointerdown", 300, 100));
    stage.dispatchEvent(ev("pointerup", 285, 100));
    check(forward === 1, "a 15px nudge is ignored", `forward=${forward}`);

    // parallax: scrolling nudges the hero photo
    Object.defineProperty(w, "scrollY", { value: 400, configurable: true });
    w.dispatchEvent(new w.Event("scroll"));
    await new Promise((r) => setTimeout(r, 120));
    const t = d.querySelector(".hero-card-img")?.style.transform || "";
    check(/translate3d\(\s*0(?:px)?,\s*-?[\d.]+px/.test(t), "hero photo drifts with the scroll", t || "(none)");

    // Lenis must never load inside a pre-render / no-scroll environment
    check(!d.documentElement.classList.contains("has-smooth-scroll"),
      "smooth-scroll library stays out of the static document");
    dom.window.close();
  }


  console.log("\n6) phase 3 — the gold rule is decoration, not a precondition");
  {
    const css = fs.readdirSync(DIST).filter((f) => f.endsWith(".css"))
      .map((f) => fs.readFileSync(path.join(DIST, f), "utf8")).join("\n")
      // collapse newlines/indentation but keep the single spaces that separate
      // descendant selectors
      .replace(/\s+/g, " ");
    check(css.includes(".section-header .section-title::after"),
      "the rule is defined for section titles");
    check(/\.section-header \.section-title::after\s*\{[^}]*transform:\s*scaleX\(1\)/.test(css),
      "it is drawn by default — no JS, no empty gap");
    check(/\.section-header\[data-reveal\] \.section-title::after\s*\{\s*transform:\s*scaleX\(0\)/.test(css),
      "the motion layer collapses it only after claiming the header");
    check(/\.section-header\.is-visible \.section-title::after[^{]*\{\s*transform:\s*scaleX\(1\)/.test(css),
      "and draws it out once the header is on screen");
    check(css.includes(".section-header .section-subtitle::before"),
      "the eyebrow dash uses the same treatment");
  }

  server.close();
  console.log(`\n${failures === 0 ? "all motion checks passed" : failures + " check(s) failed"}`);
  process.exit(failures === 0 ? 0 : 1);
})();
