#!/usr/bin/env node
/**
 * Pre-render the SPA into static HTML — one real file per route PER LANGUAGE.
 *
 *   dist/index.html             /            (English, unprefixed)
 *   dist/hair/index.html        /hair
 *   dist/ar/index.html          /ar
 *   dist/ar/hair/index.html     /ar/hair
 *   dist/ru/dental/index.html   /ru/dental   ... and so on for 7 languages
 *
 * Why path prefixes instead of ?lang=xx
 * ------------------------------------
 * GitHub Pages is a static host: it ignores the query string, so /dental/?lang=ar
 * returned byte-identical English HTML whose canonical pointed at /dental/. Google
 * could therefore only ever see a duplicate, never an Arabic page — Search Console
 * reported those URLs as "Alternate page with proper canonical tag" and refused to
 * index them. A real path (/ar/dental/) is a real file with its own <html lang>,
 * translated copy, self-referencing canonical and hreflang cluster.
 *
 * Crawlers get fully-rendered translated HTML with no JavaScript needed; real
 * visitors still load the same bundle, so navigation stays instant.
 *
 * Also writes dist/sitemap.xml (every URL + hreflang alternates + lastmod) and
 * dist/404.html (the not-found page, marked noindex).
 *
 * Usage:  node tools/prerender.js            (run AFTER `npm run build`)
 *         PRERENDER_LANGS=en,ar node tools/prerender.js   (quick local run)
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { JSDOM, VirtualConsole } = require("jsdom");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const ORIGIN = "https://platinyaclinic.com";

// Must match src/i18n/langs.js (order included: it is the hreflang order).
const LANGS = ["en", "ar", "fr", "es", "tr", "it", "ru"];
const DEFAULT_LANG = "en";
const RTL_LANGS = ["ar"];
const OG_LOCALE = {
  en: "en_US", ar: "ar_AR", fr: "fr_FR", es: "es_ES",
  tr: "tr_TR", it: "it_IT", ru: "ru_RU",
};

// Every route that should exist as a real, indexable page.
// Keep in sync with src/router/routes.js
const ROUTES = [
  "/",
  "/services",
  "/about",
  "/hospitals",
  "/testimonials",
  "/contact",
  "/hair",
  "/dental",
  "/plastic",
  "/plastic-body",
  "/bariatric",
  "/aesthetics",
  "/concierge",
  "/hotel",
  "/airport",
  "/transfers",
  "/interpreter",
  "/privacy-policy",
  "/terms",
  "/privacy",
];

// [changefreq, priority] per route for the sitemap.
const ROUTE_META = {
  "/": ["weekly", "1.0"],
  "/services": ["monthly", "0.9"],
  "/contact": ["monthly", "0.9"],
  "/hair": ["monthly", "1.0"],
  "/dental": ["monthly", "1.0"],
  "/plastic": ["monthly", "1.0"],
  "/plastic-body": ["monthly", "1.0"],
  "/bariatric": ["monthly", "1.0"],
  "/aesthetics": ["monthly", "1.0"],
  "/about": ["monthly", "0.7"],
  "/hospitals": ["monthly", "0.7"],
  "/testimonials": ["weekly", "0.7"],
  "/concierge": ["monthly", "0.6"],
  "/hotel": ["monthly", "0.6"],
  "/airport": ["monthly", "0.6"],
  "/transfers": ["monthly", "0.6"],
  "/interpreter": ["monthly", "0.6"],
  "/privacy-policy": ["yearly", "0.3"],
  "/terms": ["yearly", "0.3"],
  "/privacy": ["yearly", "0.3"],
};

// route path -> key prefix used in the dictionaries (seo.<page>.title/.desc)
const SEO_KEY_BY_ROUTE = {
  "/": "home",
  "/services": "services",
  "/about": "about",
  "/hospitals": "hospitals",
  "/testimonials": "testimonials",
  "/contact": "contact",
  "/hair": "hair",
  "/dental": "dental",
  "/plastic": "plastic",
  "/plastic-body": "plasticBody",
  "/bariatric": "bariatric",
  "/aesthetics": "aesthetics",
  "/concierge": "concierge",
  "/hotel": "hotel",
  "/airport": "airport",
  "/transfers": "transfers",
  "/interpreter": "interpreter",
  "/privacy-policy": "privacyPolicy",
  "/terms": "terms",
  "/privacy": "privacy",
};

// ---------------------------------------------------------------------------
// Dictionaries
// ---------------------------------------------------------------------------

const TABLE_CACHE = {};

// Read a language dictionary straight from source (src/i18n/locales/<code>.js).
// The files are `const xx = { ... }; export default xx;` — evaluating the literal
// here is what lets the pre-renderer produce translated HTML without a network
// fetch for the lazy chunks.
function readTable(lang) {
  if (TABLE_CACHE[lang]) return TABLE_CACHE[lang];

  const file = path.join(ROOT, "src", "i18n", "locales", `${lang}.js`);
  const src = fs.readFileSync(file, "utf8");
  const body = src.match(/=\s*(\{[\s\S]*\})\s*;\s*(?:\n\s*)?export default/);

  if (!body) {
    throw new Error(`could not parse the dictionary object in ${file}`);
  }

  // eslint-disable-next-line no-new-func
  TABLE_CACHE[lang] = new Function(`return (${body[1]});`)();
  return TABLE_CACHE[lang];
}

// ---------------------------------------------------------------------------
// Where a page lives
// ---------------------------------------------------------------------------

function langPrefix(lang) {
  return lang === DEFAULT_LANG ? "" : `/${lang}`;
}

function urlFor(route, lang) {
  const clean = route === "/" ? "/" : `${route}/`;
  return `${ORIGIN}${langPrefix(lang)}${clean}`;
}

function fileFor(route, lang) {
  const clean = route === "/" ? "" : route.replace(/^\//, "");
  return path.join(DIST, langPrefix(lang).replace(/^\//, ""), clean, "index.html");
}

// ---------------------------------------------------------------------------
// Markup helpers
// ---------------------------------------------------------------------------

function attr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

// Collect every bundle in the order index.html loads them (small runtime first).
function bundleScripts(template) {
  const names = [];
  const re = /<script[^>]+src="\.\/(bundle\.[^"]+\.js)"/g;
  let m;
  while ((m = re.exec(template))) names.push(m[1]);
  return names.filter((n) => fs.existsSync(path.join(DIST, n)));
}

// Bake everything a crawler reads WITHOUT running JavaScript: language, dir,
// title, description, canonical, share tags and the hreflang cluster.
function applyStaticSeo(html, route, lang, table) {
  const seoPage = SEO_KEY_BY_ROUTE[route] || "home";
  const title = table[`seo.${seoPage}.title`] || "";
  const desc = table[`seo.${seoPage}.desc`] || "";
  const url = urlFor(route, lang);
  let out = html;

  // <html lang dir> — the single most important signal for the translated pages.
  out = out.replace(
    /<html[^>]*>/i,
    `<html lang="${lang}" dir="${RTL_LANGS.includes(lang) ? "rtl" : "ltr"}">`
  );

  // Pre-rendered pages live in sub-folders (/hair/index.html, /ar/hair/index.html),
  // but every asset path in the app is relative (./assets/...). Without a <base>
  // tag the browser would look for /ar/hair/assets/... and fail to load CSS,
  // images and JS. Anchoring to "/" makes all relative URLs resolve from the root.
  if (route !== "/" && !/<base\s/i.test(out)) {
    out = out.replace(/<head([^>]*)>/i, `<head$1>\n    <base href="/" />`);
  }

  if (title) {
    out = out.replace(/<title>.*?<\/title>/s, `<title>${attr(title)}</title>`);
    out = out.replace(
      /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="title" content="${attr(title)}" />`
    );
    out = out.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${attr(title)}" />`
    );
    out = out.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${attr(title)}" />`
    );
  }

  if (desc) {
    out = out.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${attr(desc)}" />`
    );
    out = out.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${attr(desc)}" />`
    );
    out = out.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${attr(desc)}" />`
    );
  }

  // Canonical + og:url point at THIS page's language-specific URL.
  out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );
  out = out.replace(
    /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${OG_LOCALE[lang] || lang}" />`
  );

  // hreflang cluster: this page, in every language, as real paths.
  const alternates = LANGS.map(
    (l) => `    <link rel="alternate" hreflang="${l}" href="${urlFor(route, l)}" />`
  );
  alternates.push(`    <link rel="alternate" hreflang="x-default" href="${urlFor(route, DEFAULT_LANG)}" />`);

  out = out.replace(
    /(?:\s*<link rel="alternate" hreflang="[^"]+" href="[^"]*"\s*\/?>\s*)+/,
    "\n" + alternates.join("\n") + "\n"
  );

  return out;
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

// jsdom implements no matchMedia (the site's carousel asks for it). Give it a
// no-op so the pre-render exercises the same code path a real browser does.
const SHIM = `<script>
  window.matchMedia = window.matchMedia || function (query) {
    return {
      matches: false, media: String(query), onchange: null,
      addListener: function () {}, removeListener: function () {},
      addEventListener: function () {}, removeEventListener: function () {},
      dispatchEvent: function () { return false; }
    };
  };
</script>`;

async function renderRoute(route, lang, table, names, template) {
  // Inline every bundle in order so jsdom needs no network access at all.
  const scripts = names
    .map((n) => `<script>${fs.readFileSync(path.join(DIST, n), "utf8")}</script>`)
    .join("\n");

  const html = template
    .replace(/<script[^>]+src="\.\/bundle\.[^"]+\.js"[^>]*><\/script>/g, "")
    .replace("</body>", `${SHIM}\n${scripts}\n</body>`);

  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", () => {}); // ignore incidental errors

  const dom = new JSDOM(html, {
    url: urlFor(route, lang),
    runScripts: "dangerously",
    pretendToBeVisual: true,
    virtualConsole,
    // Hand the dictionary to the app before any bundle runs: this is what makes
    // the render come out in the target language without fetching a lazy chunk.
    beforeParse(window) {
      window.__PLATINYA_PRERENDER_LANG__ = lang;
      window.__PLATINYA_PRERENDER_TABLE__ = table;
    },
  });

  // Let routing + render settle.
  await new Promise((r) => setTimeout(r, 400));

  const doc = dom.window.document;
  const app = doc.getElementById("app");
  const markup = app ? app.innerHTML.trim() : "";

  dom.window.close();

  if (!markup) return { ok: false, reason: "empty #app" };
  return { ok: true, markup };
}

// The not-found page, used as the GitHub Pages 404 fallback. It must NOT be
// indexable: without the noindex tag a 404 body that looks like a real page can
// be filed by Google as a soft 404.
async function write404(names, template) {
  const res = await renderRoute("/404.html", DEFAULT_LANG, readTable(DEFAULT_LANG), names, template);
  if (!res.ok) {
    console.log(`  FAIL  404.html (${res.reason})`);
    return false;
  }

  let out = template.replace(/<div id="app">\s*<\/div>/, `<div id="app">${res.markup}</div>`);
  out = out.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="noindex, follow" />`
  );
  out = out.replace(/<title>.*?<\/title>/s, "<title>Page Not Found | Platinya Clinic</title>");
  out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${ORIGIN}/" />`);

  fs.writeFileSync(path.join(DIST, "404.html"), out, "utf8");
  console.log("  ok    404.html          (not found page, noindex)");
  return true;
}

// ---------------------------------------------------------------------------
// Sitemap
// ---------------------------------------------------------------------------

// The date a crawler should compare: the last commit that touched the site
// source. Using the build date instead would claim a change on every run, and
// Google ignores a lastmod that is not consistent with the real content.
function lastmod() {
  try {
    const d = execFileSync("git", ["log", "-1", "--format=%cs", "--", "src"], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  } catch (e) {
    /* no git (e.g. a tarball build) — fall through */
  }
  return new Date().toISOString().slice(0, 10);
}

function buildSitemap(langs) {
  const stamp = lastmod();
  const blocks = [];

  for (const lang of langs) {
    for (const route of ROUTES) {
      const [changefreq, priority] = ROUTE_META[route] || ["monthly", "0.5"];
      const alternates = LANGS.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlFor(route, l)}"/>`
      );
      alternates.push(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(route, DEFAULT_LANG)}"/>`
      );

      blocks.push(
        [
          "  <url>",
          `    <loc>${urlFor(route, lang)}</loc>`,
          `    <lastmod>${stamp}</lastmod>`,
          `    <changefreq>${changefreq}</changefreq>`,
          `    <priority>${priority}</priority>`,
          ...alternates,
          "  </url>",
        ].join("\n")
      );
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    "",
    blocks.join("\n\n"),
    "",
    "</urlset>",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml, "utf8");
  console.log(`\nwrote sitemap.xml — ${blocks.length} URLs (lastmod ${stamp})`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error("dist/ not found — run `npm run build` first.");
    process.exit(1);
  }

  const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
  const names = bundleScripts(template);
  if (!names.length) {
    console.error("no bundle.*.js referenced by dist/index.html");
    process.exit(1);
  }
  console.log(`pre-rendering with: ${names.join(", ")}`);

  const wanted = (process.env.PRERENDER_LANGS || "").split(",").map((s) => s.trim()).filter(Boolean);
  const langs = wanted.length ? LANGS.filter((l) => wanted.includes(l)) : LANGS;
  if (!langs.length) {
    console.error(`PRERENDER_LANGS=${process.env.PRERENDER_LANGS} matches no supported language`);
    process.exit(1);
  }
  console.log(`languages: ${langs.join(", ")}\n`);

  let done = 0;
  let failed = 0;

  for (const lang of langs) {
    const table = readTable(lang);

    for (const route of ROUTES) {
      const res = await renderRoute(route, lang, table, names, template);

      if (!res.ok) {
        console.log(`  FAIL  ${lang} ${route.padEnd(16)} (${res.reason})`);
        failed++;
        continue;
      }

      const out = template.replace(/<div id="app">\s*<\/div>/, `<div id="app">${res.markup}</div>`);
      const withSeo = applyStaticSeo(out, route, lang, table);

      const target = fileFor(route, lang);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, withSeo, "utf8");

      done++;
      const label = `${lang} ${route}`;
      if (lang === DEFAULT_LANG) {
        console.log(`  ok    ${label.padEnd(20)} -> ${path.relative(DIST, target)}  (${res.markup.length} chars)`);
      }
    }

    if (lang !== DEFAULT_LANG) {
      console.log(`  ok    ${lang}: ${ROUTES.length} routes -> ${langPrefix(lang).replace(/^\//, "")}/…`);
    }
  }

  console.log(`\npre-rendered ${done} page(s) across ${langs.length} language(s), ${failed} failed.`);

  if (!(await write404(names, template))) failed++;

  buildSitemap(langs);

  if (failed) process.exitCode = 1;
}

main().catch((e) => {
  console.error("prerender failed:", e);
  process.exit(1);
});
