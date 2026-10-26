// SEO titles/descriptions per route per language.
//
// English and Arabic are hand-written in src/data/treatment-seo.json and stay as
// they are. Every other language is taken from the translation files themselves
// (seoTitle / seoDesc), so a translated page can never inherit an English title,
// and a missing translation cannot silently produce a blank <title>.
import { writeFileSync, readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const contentDir = join(root, "src", "content");
const i18nDir = join(contentDir, "i18n");
const seoPath = join(root, "src", "data", "treatment-seo.json");

const LANGS = ["tr", "fr", "es", "it", "ru"];
const TITLE_MAX = 60;
const DESC_MAX = 160;

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

const seo = existsSync(seoPath) ? JSON.parse(readFileSync(seoPath, "utf8")) : {};
const problems = [];
let added = 0;

for (const f of readdirSync(i18nDir).filter((f) => f.endsWith(".js"))) {
  const lang = f.replace(/\.js$/, "");
  if (!LANGS.includes(lang)) continue;
  const table = load(join(i18nDir, f));

  for (const [slug, copy] of Object.entries(table)) {
    if (!isComplete(copy)) continue; // half-written page: leave the entry alone
    const title = String(copy.seoTitle || "").trim();
    const desc = String(copy.seoDesc || "").trim();
    if (!title || !desc) {
      problems.push(`${lang} ${slug}: seoTitle/seoDesc missing`);
      continue;
    }
    if (title.length > TITLE_MAX) problems.push(`${lang} ${slug}: title ${title.length} chars`);
    if (desc.length > DESC_MAX) problems.push(`${lang} ${slug}: description ${desc.length} chars`);

    seo[slug] = seo[slug] || {};
    seo[slug][lang] = { title, desc };
    added++;
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

writeFileSync(seoPath, JSON.stringify(seo, null, 2) + "\n");
console.log(`treatment-seo.json — ${Object.keys(seo).length} routes, ${added} translated entries`);
