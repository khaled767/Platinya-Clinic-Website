#!/usr/bin/env node
/**
 * Functional test for the pre-rendered site, in a real DOM (jsdom).
 *
 * What it protects (in the order the checks appear below):
 *
 *   1. after the JavaScript has run, every English route keeps its OWN canonical
 *      URL and <title> (a hash URL or the home page's canonical here is what made
 *      Search Console refuse to index the sub-pages);
 *   2. every language is a REAL page: /ar/dental/ is served with <html lang="ar">
 *      dir="rtl", translated copy and a self-referencing canonical without any
 *      JavaScript — a query parameter (?lang=ar) served byte-identical English
 *      HTML on GitHub Pages, so those URLs could never be indexed;
 *   3. the legacy ?lang=ar links still work and move the address bar to /ar/…;
 *   4. the stylesheet is in <head> (no flash of unstyled content);
 *   5. the language switcher pulls the lazy dictionary chunk;
 *   6. sitemap.xml lists every language URL with hreflang alternates + lastmod,
 *      and 404.html is marked noindex.
 *
 * Usage:
 *   node tools/test-site.js              # against ./dist (run after build:full)
 *   node tools/test-site.js --live       # against https://platinyaclinic.com
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

const LANGS = ["en", "ar", "fr", "es", "tr", "it", "ru"];
const RTL_LANGS = ["ar"];

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

// Pre-rendered markup exists before the bundle runs, so "content in #app" is not a
// boot signal — wait for the flag the app sets once its JavaScript has taken over.
const booted = (d) => d.documentElement.hasAttribute("data-app-booted");

let BASE = "";

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

// The bytes a crawler receives — no JavaScript, no DOM. This is the only thing
// Google sees before rendering, so the translated pages must be complete here.
async function rawHtml(url) {
  if (LIVE) {
    const res = await fetch(url);
    return res.text();
  }
  const rel = url.slice(BASE.length).split("?")[0];
  const file = path.join(DIST, rel === "/" ? "index.html" : path.join(rel, "index.html"));
  return fs.readFileSync(file, "utf8");
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

const hasScript = (text, re) => re.test(text);

// The <title> a dictionary ships for a route (source of truth = the locale file).
function dictTitle(lang, page) {
  const file = path.resolve(__dirname, "..", "src", "i18n", "locales", `${lang}.js`);
  const src = fs.readFileSync(file, "utf8");
  const m = src.match(new RegExp(`"seo\\.${page}\\.title":\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  if (!m) return "";
  try {
    return JSON.parse(`"${m[1]}"`);
  } catch (e) {
    return m[1];
  }
}

const unescapeHtml = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'");

(async () => {
  const server = LIVE ? null : await serve();
  BASE = LIVE ? SITE : `http://127.0.0.1:${PORT}`;
  console.log(LIVE ? "testing the LIVE site" : "testing ./dist in a local server");

  if (!LIVE) {
    const chunks = fs.readdirSync(DIST).filter((f) => /^locale-[a-z]{2}\..*\.js$/.test(f));
    console.log("language chunks:", chunks.map((c) => c + " " + (fs.statSync(path.join(DIST, c)).size / 1024).toFixed(0) + "KB").join(", "));
    check("six lazy chunks exist (ar,fr,es,tr,it,ru)", chunks.length === 6, chunks.length + " found");
    check("no chunk for English (inside the main bundle)", !chunks.some((c) => /locale-en/.test(c)));
  }

  // ---- 1. English route set: canonical + title must survive the JS boot ----
  let canonicalOk = 0, titleOk = 0;
  const problems = [];
  for (const route of ROUTES) {
    const expectedCanonical = SITE + route;
    const html = await rawHtml(BASE + route);
    const t = html.match(/<title>([\s\S]*?)<\/title>/i);
    const expectedTitle = t ? unescapeHtml(t[1]).trim() : "";
    const dom = await load(BASE + route, booted);
    const doc = dom.window.document;
    const gotCanonical = canonicalOf(doc);
    const gotTitle = titleOf(doc);
    if (gotCanonical === expectedCanonical) canonicalOk++;
    else problems.push(`${route} canonical ${gotCanonical} != ${expectedCanonical}`);
    if (gotTitle === expectedTitle) titleOk++;
    else problems.push(`${route} title "${gotTitle.slice(0, 50)}" != "${String(expectedTitle).slice(0, 50)}"`);
    dom.window.close();
  }
  check(`all ${ROUTES.length} English routes keep their own canonical after JS`, canonicalOk === ROUTES.length, `${canonicalOk}/${ROUTES.length}` + (problems.length ? " | " + problems.slice(0, 3).join(" ; ") : ""));
  check(`all ${ROUTES.length} English routes keep their pre-rendered title after JS`, titleOk === ROUTES.length, `${titleOk}/${ROUTES.length}`);

  // ---- 2. Every language is a real, pre-rendered page (no JavaScript) ----
  console.log("\n  -- pre-rendered language pages (served HTML, no JS) --");
  const enTitle = dictTitle("en", "dental");
  for (const lang of LANGS) {
    const prefix = lang === "en" ? "" : `/${lang}`;
    const url = `${BASE}${prefix}/dental/`;
    const html = await rawHtml(url);
    const expectedTitle = dictTitle(lang, "dental");
    const expectedCanonical = `${SITE}${prefix}/dental/`;

    const htmlTag = (html.match(/<html[^>]*>/i) || [""])[0];
    const canonical = (html.match(/rel="canonical" href="([^"]+)"/) || [])[1] || "(none)";
    const title = unescapeHtml(((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "")).trim();
    const dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
    const translated = lang === "en" || title !== enTitle;

    let ok = new RegExp(`lang="${lang}"`, "i").test(htmlTag) &&
      new RegExp(`dir="${dir}"`, "i").test(htmlTag) &&
      canonical === expectedCanonical &&
      title === expectedTitle &&
      translated &&
      html.includes(`<base href="/"`);

    // Arabic and Russian must carry their own script in the served bytes.
    if (lang === "ar") ok = ok && hasScript(html, /[\u0600-\u06FF]{6,}/);
    if (lang === "ru") ok = ok && hasScript(html, /[\u0400-\u04FF]{6,}/);

    // A localised page must also link to its own language, not only to English.
    if (lang !== "en") ok = ok && html.includes(`href="${prefix}"`) && !/href="\/dental"[^>]*data-route/.test(html);

    check(`${lang.padEnd(2)} /dental/ is a real ${lang} page`, ok,
      `lang/dir=${lang}/${dir} canonical=${canonical} title="${title.slice(0, 34)}"`);

    // hreflang cluster: all 7 languages + x-default, as paths.
    const alts = (html.match(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g) || []);
    const altLangs = alts.map((a) => (a.match(/hreflang="([^"]+)"/) || [])[1]);
    const missing = [...LANGS, "x-default"].filter((l) => !altLangs.includes(l));
    check(`${lang.padEnd(2)} /dental/ has a complete hreflang cluster`, missing.length === 0,
      missing.length ? "missing " + missing.join(",") : `${alts.length} alternates`);
  }
  console.log("");

  // ---- 2b. The same pages, WITH JavaScript: the language must survive boot ----
  // The pre-rendered Arabic must not be replaced by English when the bundle runs
  // (the lazy chunk is resolved through <base href="/">), and internal navigation
  // must stay inside the language prefix.
  for (const lang of ["ar", "ru"]) {
    const prefix = `/${lang}`;
    const dom = await load(`${BASE}${prefix}/dental/`, booted);
    const doc = dom.window.document;
    const text = (doc.getElementById("app") || {}).textContent || "";
    const scriptRe = lang === "ar" ? /[\u0600-\u06FF]{4,}/ : /[\u0400-\u04FF]{4,}/;
    check(`${lang} /dental/ stays ${lang} after the JS boot`, doc.documentElement.lang === lang && scriptRe.test(text), `lang=${doc.documentElement.lang}`);
    check(`${lang} /dental/ keeps its own canonical after the JS boot`, canonicalOf(doc) === `${SITE}${prefix}/dental/`, canonicalOf(doc));

    const contact = doc.querySelector(`a[data-route][href="${prefix}/contact"]`);
    check(`${lang} internal links stay inside ${prefix}/`, Boolean(contact), contact ? contact.getAttribute("href") : "none");

    if (lang === "ar" && contact) {
      contact.dispatchEvent(new dom.window.MouseEvent("click", { bubbles: true }));
      const started = Date.now();
      while (Date.now() - started < 5000 && dom.window.location.pathname !== "/ar/contact/") await new Promise((r) => setTimeout(r, 100));
      const nd = dom.window.document;
      check("SPA navigation inside Arabic lands on /ar/contact/", dom.window.location.pathname === "/ar/contact/", dom.window.location.pathname);
      check("Arabic stays Arabic after navigation", nd.documentElement.lang === "ar" && /[\u0600-\u06FF]{4,}/.test((nd.getElementById("app") || {}).textContent || ""), `lang=${nd.documentElement.lang}`);
      check("canonical follows the route in Arabic", canonicalOf(nd) === SITE + "/ar/contact/", canonicalOf(nd));
    }

    dom.window.close();
  }
  console.log("");

  // ---- 3. Legacy ?lang=ar still works and lands on the path URL ----
  const ar = await load(BASE + "/dental/?lang=ar", (d) => d.documentElement.lang === "ar" && /[\u0600-\u06FF]/.test(d.body.textContent || ""));
  const adoc = ar.window.document;
  check("legacy ?lang=ar -> <html lang=\"ar\">", adoc.documentElement.lang === "ar", "lang=" + adoc.documentElement.lang);
  check("legacy ?lang=ar -> dir=rtl", adoc.documentElement.getAttribute("dir") === "rtl", "dir=" + adoc.documentElement.getAttribute("dir"));
  check("Arabic rendered on the first paint", /[\u0600-\u06FF]{4,}/.test((adoc.getElementById("app") || {}).textContent || ""));
  check("legacy ?lang=ar moves the address bar to /ar/dental/", ar.window.location.pathname === "/ar/dental/", ar.window.location.pathname);
  check("canonical is /ar/dental/ (not ?lang=ar)", canonicalOf(adoc) === SITE + "/ar/dental/", canonicalOf(adoc));
  ar.window.close();

  // ---- 4. English page: stylesheet in <head>, no lazy chunk needed ----
  const en = await load(BASE + "/hair/", booted);
  check("stylesheet linked in <head> (no unstyled flash)", /<link[^>]*href="\.\/styles\.[^"]+\.css"/.test(en.window.document.head.innerHTML));

  // ---- 5. Switcher pulls the Russian chunk and moves to /ru/hair/ ----
  const opt = en.window.document.querySelector('.lang-option[data-lang="ru"]');
  check("language switcher offers Russian", Boolean(opt));
  if (opt) {
    check("switcher link points at the path URL", opt.getAttribute("href") === "/ru/hair", opt.getAttribute("href"));
    opt.dispatchEvent(new en.window.MouseEvent("click", { bubbles: true }));
    const doc = en.window.document;
    const started = Date.now();
    while (Date.now() - started < 8000 && doc.documentElement.lang !== "ru") await new Promise((r) => setTimeout(r, 100));
    check("switching to Russian applies its chunk", doc.documentElement.lang === "ru", "lang=" + doc.documentElement.lang);
    check("Russian text rendered after the switch", /[\u0400-\u04FF]{4,}/.test((doc.getElementById("app") || {}).textContent || ""));
    check("switching updates the URL to /ru/hair/", en.window.location.pathname === "/ru/hair/", en.window.location.pathname);
    check("canonical follows the language path", canonicalOf(doc) === SITE + "/ru/hair/", canonicalOf(doc));
    en.window.close();
  }

  // ---- 6. sitemap + 404 ----
  const sitemap = LIVE
    ? await (await fetch(SITE + "/sitemap.xml")).text()
    : fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf8");
  const locs = sitemap.match(/<loc>[^<]+<\/loc>/g) || [];
  const hreflangs = sitemap.match(/hreflang=/g) || [];
  const lastmods = sitemap.match(/<lastmod>/g) || [];
  check("sitemap lists every language URL", locs.length === ROUTES.length * LANGS.length, `${locs.length} URLs (expected ${ROUTES.length * LANGS.length})`);
  check("sitemap carries hreflang alternates", hreflangs.length === locs.length * (LANGS.length + 1), `${hreflangs.length} alternates`);
  check("sitemap carries lastmod", lastmods.length === locs.length, `${lastmods.length} lastmod values`);
  check("sitemap contains /ar/dental/", sitemap.includes("<loc>" + SITE + "/ar/dental/</loc>"));
  check("sitemap contains no ?lang= URL", !sitemap.includes("?lang="));

  const notFound = LIVE ? await (await fetch(SITE + "/404.html")).text() : fs.readFileSync(path.join(DIST, "404.html"), "utf8");
  check("404.html is noindex", /name="robots"\s+content="noindex/.test(notFound));

  if (server) server.close();
  const failed = results.filter((r) => !r).length;
  console.log(`\n${results.length - failed}/${results.length} checks passed`);
  process.exit(failed ? 1 : 0);
})();
