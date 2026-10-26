#!/usr/bin/env node
/**
 * Proactive WhatsApp greeting — behaviour suite (jsdom, against the built bundle).
 *
 * Proves:
 *   1. nothing is visible on arrival: the bubble ships hidden and empty;
 *   2. it greets after 10 seconds (real timers, no hook), never before;
 *   3. a second and third message follow, then it stops;
 *   4. closing with × does NOT end the conversation — the next message returns
 *      after the snooze, and the visitor never sees message one twice;
 *   5. the greeting follows the page language in all seven locales;
 *   6. state survives a page change (the site is a multi-page SPA);
 *   7. every message chimes, the button opens WhatsApp with a pre-typed question,
 *      and the served HTML contains no popup for crawlers;
 *   8. a saved state older than 30 minutes is discarded — the greeting comes
 *      back on a later visit instead of staying silent forever.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 8132;

let checks = 0;
let failures = 0;
function check(ok, label, detail) {
  checks += 1;
  if (!ok) failures += 1;
  console.log(`  ${ok ? "ok  " : "FAIL"} ${label}${detail ? `  -> ${detail}` : ""}`);
}

const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml",
  ".json": "application/json", ".woff2": "font/woff2", ".mp3": "audio/mpeg",
};

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let rel = decodeURIComponent(req.url.split("?")[0]);
      if (rel.endsWith("/")) rel += "index.html";
      let file = path.join(DIST, rel);
      if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        const alt = path.join(DIST, rel, "index.html");
        if (fs.existsSync(alt)) file = alt;
        else { res.statusCode = 404; return res.end("not found"); }
      }
      res.setHeader("Content-Type", TYPES[path.extname(file)] || "application/octet-stream");
      fs.createReadStream(file).pipe(res);
    });
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

async function boot(route, opts = {}) {
  const vc = new VirtualConsole();
  vc.on("jsdomError", () => {});
  const dom = await JSDOM.fromURL(`http://127.0.0.1:${PORT}${route}`, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(window) {
      // jsdom lacks both APIs; the app reads their presence as "a real browser".
      window.IntersectionObserver = class {
        constructor() {}
        observe() {}
        unobserve() {}
        disconnect() {}
      };
      window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });

      window.__osc = 0;
      class FakeCtx {
        constructor() { this.state = "running"; this.currentTime = 0; this.destination = {}; }
        createOscillator() {
          window.__osc += 1;
          return { type: "", frequency: { value: 0 }, connect() {}, start() {}, stop() {} };
        }
        createGain() {
          return {
            gain: { setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} },
            connect() {},
          };
        }
        resume() { return Promise.resolve(); }
      }
      window.AudioContext = FakeCtx;

      if (opts.timing) {
        window.__PLATINYA_WA_TIMING__ = opts.timing;
        window.__PLATINYA_WA_TYPING__ = 15;
        window.__PLATINYA_WA_SNOOZE__ = opts.snooze || 90;
        window.__PLATINYA_WA_FIRST__ = opts.timing[0];
      }
      // Simulate a visitor who already saw an earlier message on another page.
      if (opts.seedState) {
        try {
          window.sessionStorage.setItem("platinya:wa-state", JSON.stringify(opts.seedState));
        } catch (e) {}
      }
    },
  });

  const started = Date.now();
  while (Date.now() - started < 10000) {
    if (dom.window.document.documentElement.hasAttribute("data-app-booted")) break;
    await new Promise((r) => setTimeout(r, 40));
  }
  return dom;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const text = (d) => d.querySelector(".wa-teaser-text").textContent;

(async () => {
  const server = await serve();

  console.log("1) 10 seconds, real timers — the visitor is left alone first");
  {
    const dom = await boot("/ar/");
    const d = dom.window.document;
    const box = d.getElementById("wa-teaser");
    check(!!box, "the bubble exists in the layout");
    check(box.hidden === true, "hidden on arrival");
    await sleep(6200);
    check(box.hidden === true, "still hidden at 6 seconds (it no longer greets early)");
    await sleep(4600); // ~10.8s
    check(box.hidden === false, "it appears just after 10 seconds");
    await sleep(1200);
    check(/أهلاً بك/.test(text(d)), "then greets in Arabic", JSON.stringify(text(d).slice(0, 24)));
    dom.window.close();
  }

  console.log("\n2) The sequence: greet → nudge → last word → silence");
  {
    const dom = await boot("/ar/", { timing: [60, 260, 460] });
    const d = dom.window.document;
    const box = d.getElementById("wa-teaser");
    await sleep(140);
    check(/أهلاً بك/.test(text(d)), "message 1");
    await sleep(260);
    check(/تتصفّح/.test(text(d)), "message 2");
    await sleep(280);
    const third = text(d);
    check(/نرد خلال دقائق/.test(third), "message 3");
    await sleep(320);
    check(text(d) === third, "and then it stops nagging");
    check(dom.window.__osc === 6, "each message plays the chime (2 notes × 3)", `oscillators=${dom.window.__osc}`);
    const href = d.querySelector(".wa-teaser-open").getAttribute("href");
    check(/wa\.me\/905300799487\?text=/.test(href) && /مرحباً/.test(decodeURIComponent(href)),
      "it opens WhatsApp with a pre-typed Arabic question");
    check(d.querySelector(".wa-teaser-close").getAttribute("aria-label") === "إغلاق الرسالة",
      "the close button is labelled in Arabic");
    dom.window.close();
  }

  console.log("\n3) Closing with × postpones — it does not silence");
  {
    const dom = await boot("/ar/", { timing: [60, 4000, 8000], snooze: 120 });
    const d = dom.window.document;
    const box = d.getElementById("wa-teaser");
    await sleep(150);
    check(/أهلاً بك/.test(text(d)), "message 1 arrived");

    d.querySelector(".wa-teaser-close").dispatchEvent(new dom.window.MouseEvent("click", { bubbles: true }));
    await sleep(60);
    check(!box.classList.contains("is-open"), "× hides the bubble");

    await sleep(400); // past the snooze + typing
    check(box.classList.contains("is-open"), "it comes back on its own");
    check(/تتصفّح/.test(text(d)), "with the NEXT message, not a repeat of the first", JSON.stringify(text(d).slice(0, 24)));

    const saved = JSON.parse(dom.window.sessionStorage.getItem("platinya:wa-state") || "{}");
    check(saved.shown === 2, "progress is remembered after a close", `shown=${saved.shown}`);
    dom.window.close();
  }

  console.log("\n4) Every language greets in its own words");
  const locales = [
    ["/", /I'm here if you need anything/],
    ["/tr/", /buradayım/],
    ["/fr/", /Je suis là/],
    ["/es/", /Estoy aquí/],
    ["/it/", /Sono qui/],
    ["/ru/", /Здравствуйте/],
  ];
  for (const [route, pattern] of locales) {
    const dom = await boot(route, { timing: [60, 260, 460] });
    await sleep(150);
    const t = text(dom.window.document);
    check(pattern.test(t), `${route} greets correctly`, JSON.stringify(t.slice(0, 30)));
    const href = decodeURIComponent(dom.window.document.querySelector(".wa-teaser-open").getAttribute("href"));
    check(/wa\.me\/905300799487\?text=.+/.test(href), `${route} pre-fills the chat message`);
    dom.window.close();
  }

  console.log("5) A visitor who already saw message 1 on another page continues, not restarts");
  {
    const dom = await boot("/fr/", {
      timing: [60, 260, 460],
      seedState: { shown: 1, nextAt: Date.now() + 60, updatedAt: Date.now() },
    });
    await sleep(200);
    check(/hésitez encore/.test(text(dom.window.document)), "the French page opens with message 2", JSON.stringify(text(dom.window.document).slice(0, 26)));
    dom.window.close();
  }

  console.log("\n6) A state left from an earlier visit expires, it does not silence the greeting");
  {
    // 31 minutes ago the visitor saw all three messages. Same tab, later visit:
    // they must be greeted again — this is the "messages are broken" report.
    const dom = await boot("/ar/", {
      timing: [60, 260, 460],
      seedState: { shown: 3, done: true, nextAt: null, updatedAt: Date.now() - 31 * 60 * 1000 },
    });
    await sleep(200);
    check(/أهلاً بك/.test(text(dom.window.document)), "an expired state starts the greeting over", JSON.stringify(text(dom.window.document).slice(0, 24)));
    dom.window.close();
  }
  {
    // Five minutes ago, same tab: the visit is still in progress, stay quiet.
    const dom = await boot("/ar/", {
      timing: [60, 260, 460],
      seedState: { shown: 3, done: true, nextAt: null, updatedAt: Date.now() - 5 * 60 * 1000 },
    });
    await sleep(200);
    check(text(dom.window.document) === "", "a recent state is still respected (no nagging)");
    dom.window.close();
  }

  console.log("\n7) The served HTML never contains a popup");
  {
    const html = fs.readFileSync(path.join(DIST, "ar", "index.html"), "utf8");
    check(/id="wa-teaser"[^>]*hidden/.test(html.replace(/\s+/g, " ")), "the bubble ships hidden");
    check(!/أهلاً بك/.test(html), "no greeting text in the static HTML");
  }

  server.close();
  console.log(`\n${checks} checks, ${failures === 0 ? "all teaser checks passed" : failures + " failed"}`);
  process.exit(failures === 0 ? 0 : 1);
})();
