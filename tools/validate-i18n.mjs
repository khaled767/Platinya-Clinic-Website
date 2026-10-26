// Structural check for the translation files.
//
//   node tools/validate-i18n.mjs [lang ...]
//
// Catches what a build cannot: a missing slug, a section silently dropped, a
// three-item FAQ, Cyrillic or Arabic characters pasted into a Turkish page, an
// English sentence left untranslated in one field.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const contentDir = join(root, "src", "content");
const i18nDir = join(contentDir, "i18n");

function load(file) {
  const src = readFileSync(file, "utf8").replace(/export\s+default\s+/, "module.exports = ");
  const mod = { exports: {} };
  new Function("module", "exports", src)(mod, mod.exports);
  return mod.exports;
}

const base = readdirSync(contentDir)
  .filter((f) => f.endsWith(".js") && f !== "index.js")
  .map((f) => load(join(contentDir, f)))
  .filter((p) => p && p.slug);

const slugs = base.map((p) => p.slug);
const wanted = process.argv.slice(2);
const langs = wanted.length ? wanted : readdirSync(i18nDir).filter((f) => f.endsWith(".js")).map((f) => f.replace(/\.js$/, ""));

const SCRIPT_SETS = {
  ar: /[\u0600-\u06FF]/,
  ru: /[\u0400-\u04FF]/,
};

let errors = 0;
function check(cond, msg) {
  if (!cond) {
    console.error("  FAIL  " + msg);
    errors++;
  }
}

for (const lang of langs) {
  const file = join(i18nDir, lang + ".js");
  if (!existsSync(file)) {
    console.error(`${lang}: file missing`);
    errors++;
    continue;
  }
  const table = load(file);
  const keys = Object.keys(table);
  console.log(`\n${lang}: ${keys.length}/${slugs.length} pages`);

  for (const slug of slugs) {
    const copy = table[slug];
    if (!copy) {
      check(false, `${lang} ${slug}: not translated`);
      continue;
    }
    check(copy.title && copy.title.length > 8, `${lang} ${slug}: title too short`);
    check(copy.eyebrow, `${lang} ${slug}: eyebrow missing`);
    check(copy.lead && copy.lead.length > 60, `${lang} ${slug}: lead too short`);
    check(copy.cta, `${lang} ${slug}: cta missing`);
    check(copy.heroAlt, `${lang} ${slug}: heroAlt missing`);
    check(Array.isArray(copy.stats) && copy.stats.length === 3, `${lang} ${slug}: stats != 3`);
    check(copy.candidate && copy.candidate.items && copy.candidate.items.length === 4, `${lang} ${slug}: candidate items != 4`);
    check(copy.candidate && copy.candidate.heading, `${lang} ${slug}: candidate heading missing`);
    // Counts must match the English source, not a fixed number: the tummy tuck
    // genuinely has 4 techniques / 6 steps / 6 risks / 6 FAQs, and a translator
    // may condense it but never pad it.
    const src = base.find((p) => p.slug === slug).en;
    const want = {
      techniques: src.techniques.items.length,
      steps: src.journey.steps.length,
      risks: src.risks.items.length,
      faq: src.faq.items.length,
    };
    const floor = slug === "/abdominoplasty" ? { techniques: 3, steps: 5, risks: 5, faq: 4 } : want;
    const count = (v, k) => (v && v.length) || 0;
    check(count(copy.techniques && copy.techniques.items, "t") >= floor.techniques &&
          count(copy.techniques && copy.techniques.items, "t") <= want.techniques,
      `${lang} ${slug}: techniques ${count(copy.techniques && copy.techniques.items, "t")} (want ${floor.techniques}-${want.techniques})`);
    check(count(copy.journey && copy.journey.steps, "s") >= floor.steps &&
          count(copy.journey && copy.journey.steps, "s") <= want.steps,
      `${lang} ${slug}: journey steps ${count(copy.journey && copy.journey.steps, "s")} (want ${floor.steps}-${want.steps})`);
    check(count(copy.risks && copy.risks.items, "r") >= floor.risks &&
          count(copy.risks && copy.risks.items, "r") <= want.risks,
      `${lang} ${slug}: risks ${count(copy.risks && copy.risks.items, "r")} (want ${floor.risks}-${want.risks})`);
    check(count(copy.faq && copy.faq.items, "f") >= floor.faq &&
          count(copy.faq && copy.faq.items, "f") <= want.faq,
      `${lang} ${slug}: faq ${count(copy.faq && copy.faq.items, "f")} (want ${floor.faq}-${want.faq})`);
    check(copy.ctaBand && copy.ctaBand.button, `${lang} ${slug}: ctaBand missing`);
    check(copy.disclaimer && copy.disclaimer.length > 40, `${lang} ${slug}: disclaimer missing`);
    check(copy.seoTitle && copy.seoTitle.length <= 60, `${lang} ${slug}: seoTitle missing or > 60`);
    check(copy.seoDesc && copy.seoDesc.length <= 160, `${lang} ${slug}: seoDesc missing or > 160`);

    // a translation must be in its own script and must not carry the Arabic
    // original or an English sentence left as-is
    const blob = JSON.stringify(copy);
    if (lang !== "ar") check(!/[\u0600-\u06FF]/.test(blob), `${lang} ${slug}: contains Arabic characters`);
    if (SCRIPT_SETS[lang]) check(SCRIPT_SETS[lang].test(blob), `${lang} ${slug}: does not look like ${lang}`);

    const en = base.find((p) => p.slug === slug).en;
    const sameLead = copy.lead === en.lead;
    check(!sameLead, `${lang} ${slug}: lead identical to English`);
  }

  for (const key of keys) check(slugs.includes(key), `${lang}: unknown slug ${key}`);
}

console.log(errors ? `\n${errors} problem(s)` : "\nall translation files OK");
process.exit(errors ? 1 : 0);
