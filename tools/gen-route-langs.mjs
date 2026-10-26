// src/data/route-langs.json is generated, never hand-edited: it must describe the
// languages a page is actually written in, or the site advertises a /tr/ URL that
// serves English.
//
// The content modules are plain data (no imports), so they can be read and
// evaluated without a bundler — the project's package.json is CommonJS and Node
// will not import them as ESM.
import { writeFileSync, readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const contentDir = join(here, "..", "src", "content");
const i18nDir = join(contentDir, "i18n");
const LANGS = ["en", "ar", "tr", "fr", "es", "it", "ru"];

// A translation only counts when every block the renderer reads is present.
// Checking just `title` published half-written pages during a parallel batch:
// the /it/ URL existed and every section below the hero was undefined.
function isComplete(copy, needSeo = true) {
  const arr = (v, n) => Array.isArray(v) && v.length >= n;
  return Boolean(
    copy &&
    copy.title && copy.eyebrow && copy.lead && copy.cta && copy.heroAlt &&
    arr(copy.stats, 3) &&
    copy.candidate && copy.candidate.heading && arr(copy.candidate.items, 4) &&
    copy.techniques && copy.techniques.heading && arr(copy.techniques.items, 3) &&
    copy.journey && copy.journey.heading && arr(copy.journey.steps, 5) &&
    copy.risks && copy.risks.heading && arr(copy.risks.items, 5) &&
    copy.faq && copy.faq.heading && arr(copy.faq.items, 4) &&
    copy.ctaBand && copy.ctaBand.button &&
    copy.disclaimer && (!needSeo || (copy.seoTitle && copy.seoDesc))
  );
}

function load(file) {
  const src = readFileSync(file, "utf8").replace(/export\s+default\s+/, "module.exports = ");
  const mod = { exports: {} };
  new Function("module", "exports", src)(mod, mod.exports);
  return mod.exports;
}

const pages = readdirSync(contentDir)
  .filter((f) => f.endsWith(".js") && f !== "index.js")
  .map((f) => load(join(contentDir, f)))
  .filter((page) => page && page.slug);

const tables = {};
for (const f of readdirSync(i18nDir).filter((f) => f.endsWith(".js"))) {
  tables[f.replace(/\.js$/, "")] = load(join(i18nDir, f));
}

const map = {};
const problems = [];
for (const page of pages) {
  const langs = LANGS.filter((lang) => {
    const copy = lang === "en" || lang === "ar" ? page[lang] : (tables[lang] || {})[page.slug] || page[lang];
    return isComplete(copy, lang !== "en" && lang !== "ar");
  });
  if (!langs.includes("en")) problems.push(`${page.slug}: missing English copy`);
  if (!langs.length) problems.push(`${page.slug}: not written in any language`);
  map[page.slug] = langs;
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

writeFileSync(join(here, "..", "src", "data", "route-langs.json"), JSON.stringify(map, null, 2) + "\n");
console.log(
  `route-langs.json — ${Object.keys(map).length} routes, ` +
  `${Object.values(map).reduce((n, l) => n + l.length, 0)} route/language pairs`
);
