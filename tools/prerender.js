#!/usr/bin/env node
/**
 * Pre-render the SPA into static HTML.
 *
 * For every route we load the built bundles inside jsdom, let the app render,
 * then write the resulting markup into its own folder:
 *
 *   dist/index.html          (/)
 *   dist/hair/index.html     (/hair)
 *   dist/dental/index.html   (/dental)   ...
 *
 * Crawlers then receive fully-rendered HTML with the correct <title>, meta
 * description and canonical URL for each page — no JavaScript needed.
 * Real visitors still load the same bundle, so navigation stays instant.
 *
 * Usage: node tools/prerender.js     (run AFTER `npm run build`)
 */
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const DIST = path.resolve(__dirname, "..", "dist");

// Every route that should exist as a real, indexable page.
// Keep in sync with src/router/routes.js and src/static/sitemap.xml
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

// Collect every bundle in the order index.html loads them
// (the small runtime first, then the main bundle).
function bundleScripts() {
  const html = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
  const names = [];
  const re = /<script[^>]+src="\.\/(bundle\.[^"]+\.js)"/g;
  let m;
  while ((m = re.exec(html))) names.push(m[1]);
  return names.filter((n) => fs.existsSync(path.join(DIST, n)));
}

// ---------------------------------------------------------------------------
// SEO baking — pull the per-route copy out of the built bundle.
// The translations live in the bundle as a JSON object; we simply locate the
// seo.<page>.title / .desc pairs and inject them into the static HTML.
// ---------------------------------------------------------------------------

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

let SEO_CACHE = null;

// Read the English SEO title/description for each route from the source
// dictionary (src/i18n/locales/en.js) — reliable and unambiguous, unlike
// scraping the minified bundle where all languages sit side by side.
function readSeo(route) {
  if (!SEO_CACHE) {
    SEO_CACHE = {};
    // One language per file: the English dictionary is the whole file.
    const file = path.resolve(__dirname, "..", "src", "i18n", "locales", "en.js");
    const enBlock = fs.readFileSync(file, "utf8");

    const grab = (key) => {
      const re = new RegExp('"' + key.replace(/\./g, "\\.") + '":\\s*"((?:[^"\\\\]|\\\\.)*)"');
      const m = enBlock.match(re);
      if (!m) return "";
      try {
        return JSON.parse('"' + m[1] + '"');
      } catch (e) {
        return m[1];
      }
    };

    for (const [rt, page] of Object.entries(SEO_KEY_BY_ROUTE)) {
      SEO_CACHE[rt] = {
        title: grab("seo." + page + ".title"),
        desc: grab("seo." + page + ".desc"),
      };
    }
  }
  return SEO_CACHE[route] || { title: "", desc: "" };
}

// Escape a string for safe inclusion in an HTML attribute.
function attr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

// Replace <title>, description, canonical and OG/Twitter tags in-place.
function applyStaticSeo(html, route, seo) {
  const url = "https://platinyaclinic.com" + (route === "/" ? "/" : route + "/");
  let out = html;

  // Pre-rendered pages live in sub-folders (/hair/index.html), but every asset
  // path in the app is relative (./assets/...). Without a <base> tag the browser
  // would look for /hair/assets/... and fail to load CSS, images and JS.
  // Anchoring to "/" makes all relative URLs resolve from the site root, exactly
  // as they do on the home page.
  if (route !== "/" && !/<base\s/i.test(out)) {
    out = out.replace(/<head([^>]*)>/i, `<head$1>\n    <base href="/" />`);
  }

  if (seo.title) {
    out = out.replace(/<title>.*?<\/title>/s, `<title>${attr(seo.title)}</title>`);
    out = out.replace(
      /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="title" content="${attr(seo.title)}" />`
    );
    out = out.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${attr(seo.title)}" />`
    );
    out = out.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${attr(seo.title)}" />`
    );
  }

  if (seo.desc) {
    out = out.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${attr(seo.desc)}" />`
    );
    out = out.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${attr(seo.desc)}" />`
    );
    out = out.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${attr(seo.desc)}" />`
    );
  }

  // Point the canonical + og:url at this page's real URL.
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );

  // Rewrite the hreflang cluster so it references THIS page in every language
  // instead of the home page. A sub-page whose alternates all point at "/"
  // tells Google it is a duplicate of the home page, which suppresses its
  // indexing (this was causing "Alternate page with proper canonical tag"
  // exclusions in Search Console).
  const LANGS = ["en", "ar", "tr", "fr", "es", "it", "ru"];
  const alternates = LANGS.map(
    (l) =>
      `    <link rel="alternate" hreflang="${l}" href="${
        l === "en" ? url : `${url}?lang=${l}`
      }" />`
  );
  alternates.push(`    <link rel="alternate" hreflang="x-default" href="${url}" />`);

  out = out.replace(
    /(?:\s*<link rel="alternate" hreflang="[^"]+" href="[^"]*"\s*\/?>\s*)+/,
    "\n" + alternates.join("\n") + "\n"
  );

  return out;
}

async function renderRoute(route, names, template) {
  const hashPath = route === "/" ? "/" : route;

  // jsdom implements no matchMedia (the site's carousel asks for it). Give it a
  // no-op so the pre-render exercises the same code path a real browser does
  // instead of silently skipping a module.
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
    url: `https://platinyaclinic.com${route === "/" ? "/" : route + "/"}`,
    runScripts: "dangerously",
    pretendToBeVisual: true,
    virtualConsole,
  });

  // Let routing + render settle.
  await new Promise((r) => setTimeout(r, 400));

  const doc = dom.window.document;
  const app = doc.getElementById("app");
  const markup = app ? app.innerHTML.trim() : "";
  const title = doc.title || "";

  dom.window.close();

  if (!markup) return { ok: false, reason: "empty #app" };
  return { ok: true, title, markup };
}

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error("dist/ not found — run `npm run build` first.");
    process.exit(1);
  }

  const names = bundleScripts();
  if (!names.length) {
    console.error("no bundle.*.js referenced by dist/index.html");
    process.exit(1);
  }
  console.log(`pre-rendering with: ${names.join(", ")}\n`);

  const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
  let done = 0;
  let failed = 0;

  for (const route of ROUTES) {
    const res = await renderRoute(route, names, template);

    if (!res.ok) {
      console.log(`  FAIL  ${route.padEnd(16)} (${res.reason})`);
      failed++;
      continue;
    }

    const out = template.replace(
      /<div id="app">\s*<\/div>/,
      `<div id="app">${res.markup}</div>`
    );

    // Bake the per-page SEO into the static HTML so crawlers get the right
    // title/description/canonical even without running any JavaScript.
    const seo = readSeo(route);
    const withSeo = applyStaticSeo(out, route, seo);

    const target =
      route === "/"
        ? path.join(DIST, "index.html")
        : path.join(DIST, route.replace(/^\//, ""), "index.html");

    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, withSeo, "utf8");

    console.log(`  ok    ${route.padEnd(16)} -> ${path.relative(DIST, target)}  (${res.markup.length} chars)`);
    done++;
  }

  console.log(`\npre-rendered ${done} route(s), ${failed} failed.`);

  // GitHub Pages serves 404.html for unknown URLs. Copy the home page there so
  // deep links still boot the SPA instead of showing a bare error page.
  try {
    fs.copyFileSync(path.join(DIST, "index.html"), path.join(DIST, "404.html"));
    console.log("wrote 404.html (SPA fallback)");
  } catch (e) {
    console.log("could not write 404.html:", e.message);
  }

  if (failed) process.exitCode = 1;
}

main().catch((e) => {
  console.error("prerender failed:", e);
  process.exit(1);
});
