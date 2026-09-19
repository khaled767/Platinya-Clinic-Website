#!/usr/bin/env node
/**
 * Functional test for the pre-rendered site, in a real DOM (jsdom).
 *
 * It checks the two things that decide whether Google can index the pages, plus
 * the lazy language chunks:
 *
 *   1. after the JavaScript has run, every route keeps its OWN canonical URL
 *      (a hash URL or the home page's canonical here is what made Search Console
 *      report the sub-pages as duplicates and refuse to index them);
 *   2. after the JavaScript has run, every route keeps the <title> the
 *      pre-rendered HTML shipped, instead of falling back to the home page copy;
 *   3. the six non-English dictionaries arrive as separate chunks and are applied
 *      before the first render (?lang=ar) and when the switcher is used;
 *   4. the stylesheet is linked in <head> (no flash of unstyled content).
 *
 * Usage:
 *   node tools/test-langs.js              # against ./dist (run after build:full)
 *   node tools/test-langs.js --live       # against https://platinyaclinic.com
 *
 * Exits non-zero when any expectation fails.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 8123;
const LIVE = process.argv.includes("--live");
const SITE = "https://platinyaclinic.com";

const ROUTES = [
  "/", "/services/", "/about/", "/hospitals/", "/testimonials/", "/contact/",
  "/hair/", "/dental/", "/plastic/", "/plastic-body/", "/bariatric/",
  "/aesthetics/", "/concierge/", "/hotel/", "/airport/", "/transfers/",
  "/interpreter/", "/privacy-policy/", "/terms/", "/privacy/",
];

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".xml": "application/xml",
  ".txt": "text/plain", ".ico": "image/x-icon", ".woff2": "font/woff2",
};

function serve() {
  const server = http.createServer((req, res) => {
    const p = decodeURIComponent(req.url.split("?")[0]);
    let file = path.join(DIST, p);
    try {
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      if (!fs.existsSync(file)) {
        res.writeHead(404, { "content-type": "text/html" });
        res.end(fs.readFileSync(path.join(DIST, "404.html")));
        return;
      }
      res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" });
      res.end(fs.readFileSync(file));
    } catch (e) {
      res.writeHead(500); res.end("err");
    }
  });
  return new Promise((resolve) => server.listen(PORT, "127.0.0.1", () => resolve(server)));
}

// jsdom implements no matchMedia (the carousel asks for it) — a no-op keeps the
// boot path identical to a browser's instead of failing mid-initialisation.
function shim(window) {
  window.matchMedia = window.matchMedia || function (query) {
    return {
      matches: false, media: String(query), onchange: null,
      addListener() {}, removeListener() {}, addEventListener() {},
      removeEventListener() {}, dispatchEvent() { return false; },
    };
  };
}

async function load(url, ready, timeoutMs = 15000) {
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", () => {});
  const dom = await JSDOM.fromURL(url, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse: shim,
  });
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    await new Promise((r) => setTimeout(r, 100));
    if (ready(dom.window.document)) return dom;
  }
  return dom;
}

const results = [];
function check(name, ok, detail) {
  results.push(Boolean(ok));
  console.log(`${ok ? "  ok  " : " FAIL "} ${name}${detail ? "  -> " + detail : ""}`);
}

const canonicalOf = (doc) => {
  const el = doc.querySelector('link[rel="canonical"]');
  return el ? el.getAttribute("href") : "(none)";
};
const titleOf = (doc) => doc.title;

(async () => {
  const server = LIVE ? null : await serve();
  const base = LIVE ? SITE : `http://127.0.0.1:${PORT}`;
  console.log(LIVE ? "testing the LIVE site" : "testing ./dist in a local server");

  if (!LIVE) {
    const chunks = fs.readdirSync(DIST).filter((f) => /^locale-[a-z]{2}\..*\.js$/.test(f));
    console.log("language chunks:", chunks.map((c) => c + " " + (fs.statSync(path.join(DIST, c)).size / 1024).toFixed(0) + "KB").join(", "));
    check("six lazy chunks exist (ar,fr,es,tr,it,ru)", chunks.length === 6, chunks.length + " found");
    check("no chunk for English (inside the main bundle)", !chunks.some((c) => /locale-en/.test(c)));
  }

  // ---- the whole route set: canonical + title must survive the JS boot ----
  let canonicalOk = 0, titleOk = 0;
  const problems = [];
  for (const route of ROUTES) {
    const expectedCanonical = SITE + route;
    const expectedTitle = await staticTitle(base, route);
    const dom = await load(base + route, (d) => (d.getElementById("app") || {}).childElementCount > 0);
    const doc = dom.window.document;
    const gotCanonical = canonicalOf(doc);
    const gotTitle = titleOf(doc);
    if (gotCanonical === expectedCanonical) canonicalOk++;
    else problems.push(`${route} canonical ${gotCanonical} != ${expectedCanonical}`);
    if (gotTitle === expectedTitle) titleOk++;
    else problems.push(`${route} title "${gotTitle.slice(0, 50)}" != "${String(expectedTitle).slice(0, 50)}"`);
    dom.window.close();
  }
  check(`all ${ROUTES.length} routes keep their own canonical after JS`, canonicalOk === ROUTES.length, `${canonicalOk}/${ROUTES.length}` + (problems.length ? " | " + problems.slice(0, 3).join(" ; ") : ""));
  check(`all ${ROUTES.length} routes keep their pre-rendered title after JS`, titleOk === ROUTES.length, `${titleOk}/${ROUTES.length}`);

  // ---- Arabic: chunk fetched at boot, RTL, canonical carries ?lang=ar ----
  const ar = await load(base + "/dental/?lang=ar", (d) => d.documentElement.lang === "ar" && /[\u0600-\u06FF]/.test(d.body.textContent || ""));
  const adoc = ar.window.document;
  check("?lang=ar -> <html lang=\"ar\">", adoc.documentElement.lang === "ar", "lang=" + adoc.documentElement.lang);
  check("?lang=ar -> dir=rtl", adoc.documentElement.getAttribute("dir") === "rtl", "dir=" + adoc.documentElement.getAttribute("dir"));
  check("Arabic rendered on the first paint", /[\u0600-\u06FF]{4,}/.test((adoc.getElementById("app") || {}).textContent || ""));
  check("canonical is /dental/?lang=ar", canonicalOf(adoc) === SITE + "/dental/?lang=ar", canonicalOf(adoc));
  ar.window.close();

  // ---- English page: stylesheet in <head>, no lazy chunk needed ----
  const en = await load(base + "/hair/", (d) => (d.getElementById("app") || {}).childElementCount > 0);
  check("stylesheet linked in <head> (no unstyled flash)", /<link[^>]*href="\.\/styles\.[^"]+\.css"/.test(en.window.document.head.innerHTML));

  // ---- switcher pulls the Russian chunk on demand ----
  const opt = en.window.document.querySelector('.lang-option[data-lang="ru"]');
  check("language switcher offers Russian", Boolean(opt));
  if (opt) {
    opt.dispatchEvent(new en.window.MouseEvent("click", { bubbles: true }));
    const doc = en.window.document;
    const started = Date.now();
    while (Date.now() - started < 8000 && doc.documentElement.lang !== "ru") await new Promise((r) => setTimeout(r, 100));
    check("switching to Russian applies its chunk", doc.documentElement.lang === "ru", "lang=" + doc.documentElement.lang);
    check("Russian text rendered after the switch", /[\u0400-\u04FF]{4,}/.test((doc.getElementById("app") || {}).textContent || ""));
    en.window.close();
  }

  if (server) server.close();
  const failed = results.filter((r) => !r).length;
  console.log(`\n${results.length - failed}/${results.length} checks passed`);
  process.exit(failed ? 1 : 0);
})();

// The <title> the pre-rendered HTML ships for a route (what a crawler reads).
async function staticTitle(base, route) {
  if (LIVE) {
    const res = await fetch(SITE + route);
    const html = await res.text();
    const m = html.match(/<title>([\s\S]*?)<\/title>/i);
    return m ? decode(m[1]) : "";
  }
  const file = path.join(DIST, route === "/" ? "index.html" : path.join(route, "index.html"));
  const m = fs.readFileSync(file, "utf8").match(/<title>([\s\S]*?)<\/title>/i);
  return m ? decode(m[1]) : "";
}

function decode(s) {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
}
