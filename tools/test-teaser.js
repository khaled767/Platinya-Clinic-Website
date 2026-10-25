#!/usr/bin/env node
/**
 * Proactive WhatsApp greeting test.
 *
 * Proves, against the built bundle in jsdom:
 *   1. nothing is visible on arrival — the bubble ships hidden and empty;
 *   2. the first message appears in the language of the page (Arabic on /ar/,
 *      Russian on /ru/) once the visitor has stayed a while;
 *   3. a second and a third message follow as they stay longer, and then it stops;
 *   4. each message plays the chime (Web Audio, stubbed here);
 *   5. closing it ends it for the session, and the button still opens WhatsApp
 *      with a ready-typed question.
 *
 * jsdom has no AudioContext and no IntersectionObserver, so both are stubbed in
 * beforeParse — the same trick the motion suite uses.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 8131;

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

async function boot(route, timings) {
  const vc = new VirtualConsole();
  vc.on("jsdomError", () => {});
  const dom = await JSDOM.fromURL(`http://127.0.0.1:${PORT}${route}`, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(window) {
      // jsdom lacks these two APIs; the app reads their presence as "a browser".
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

      // Compress the 10s / 32s / 62s timeline into milliseconds.
      window.__PLATINYA_WA_TIMING__ = timings;
      window.__PLATINYA_WA_TYPING__ = 15;
    },
  });

  const started = Date.now();
  while (Date.now() - started < 10000) {
    if (dom.window.document.documentElement.hasAttribute("data-app-booted")) break;
    await new Promise((r) => setTimeout(r, 50));
  }
  return dom;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const server = await serve();
  const base = `http://127.0.0.1:${PORT}`;

  console.log("1) Arabic page — greeting, then two follow-ups");
  {
    const dom = await boot("/ar/", [60, 260, 460]);
    const d = dom.window.document;
    const box = d.getElementById("wa-teaser");

    check(!!box, "the bubble exists in the layout");
    check(box && box.hidden === true, "it is hidden on arrival");
    check(d.querySelector(".wa-teaser-text").textContent === "", "and carries no text in the served HTML");

    await sleep(140);
    check(box.hidden === false && box.classList.contains("is-open"), "it opens after the visitor stays");
    const first = d.querySelector(".wa-teaser-text").textContent;
    check(/أهلاً بك/.test(first), "first message is the Arabic greeting", JSON.stringify(first));

    await sleep(260);
    const second = d.querySelector(".wa-teaser-text").textContent;
    check(/تتصفّح/.test(second), "a second message follows", JSON.stringify(second));

    await sleep(280);
    const third = d.querySelector(".wa-teaser-text").textContent;
    check(/نرد خلال دقائق/.test(third), "and a third", JSON.stringify(third));

    await sleep(300);
    check(d.querySelector(".wa-teaser-text").textContent === third, "and then it stops (no nagging)");

    // two oscillators per chime, three messages
    check(dom.window.__osc === 6, "every message plays the chime", `oscillators=${dom.window.__osc}`);

    const link = d.querySelector(".wa-teaser-open");
    const href = link ? link.getAttribute("href") : "";
    check(/wa\.me\/905300799487\?text=/.test(href), "the bubble opens WhatsApp", href.slice(0, 46));
    check(/مرحباً/.test(decodeURIComponent(href)), "with a ready-typed question in Arabic");

    const closeBtn = d.querySelector(".wa-teaser-close");
    check(!!closeBtn && closeBtn.getAttribute("aria-label") === "إغلاق الرسالة", "the close button is labelled in Arabic");
    closeBtn.dispatchEvent(new dom.window.MouseEvent("click", { bubbles: true }));
    await sleep(30);
    check(box.hidden === true, "closing hides it");
    check(dom.window.sessionStorage.getItem("platinya:wa-teaser") === "closed", "and remembers the dismissal");
    dom.window.close();
  }

  console.log("\n2) Russian page — the same greeting, in Russian");
  {
    const dom = await boot("/ru/", [60, 260, 460]);
    const d = dom.window.document;
    await sleep(140);
    const text = d.querySelector(".wa-teaser-text").textContent;
    check(/Здравствуйте/.test(text), "the greeting follows the page language", JSON.stringify(text));
    const href = d.querySelector(".wa-teaser-open").getAttribute("href");
    check(/Здравствуйте/.test(decodeURIComponent(href)), "and so does the pre-typed WhatsApp message");
    dom.window.close();
  }

  console.log("\n3) The served HTML never contains an open popup");
  {
    const html = fs.readFileSync(path.join(DIST, "ar", "index.html"), "utf8");
    check(/id="wa-teaser"[^>]*hidden/.test(html.replace(/\s+/g, " ")), "the bubble ships hidden");
    check(!/أهلاً بك/.test(html), "no greeting text in the static HTML (nothing for crawlers to index)");
  }

  server.close();
  console.log(`\n${checks} checks, ${failures === 0 ? "all teaser checks passed" : failures + " failed"}`);
  process.exit(failures === 0 ? 0 : 1);
})();
