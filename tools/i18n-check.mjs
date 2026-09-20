#!/usr/bin/env node
/**
 * i18n dictionary guard.
 *
 * The site ships one flat dictionary per language (src/i18n/locales/<code>.js)
 * and i18n's t() falls back to ENGLISH whenever a key is missing. That fallback
 * is what makes a missing key dangerous: the page keeps working, but the visitor
 * silently gets an English sentence inside an Arabic (or Turkish, or Russian)
 * page. Nothing else in the build would catch it.
 *
 * This checker enforces, for every language:
 *   · the exact same key set as English (no missing, no extra),
 *   · no key present twice,
 *   · no empty value,
 *   · every value a string (a stray object/array would render as [object Object]).
 *
 * Usage:  node tools/i18n-check.mjs        (exits non-zero on any problem)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "src", "i18n", "locales");
const DEFAULT_LANG = "en";

// Parse `"key": "value",` lines out of a locale file. The dictionaries are flat
// and machine-written, so a line-based read is exact — and it catches a duplicate
// key, which a JSON.parse would silently swallow.
function parseDictionary(lang) {
  const file = path.join(DIR, `${lang}.js`);
  if (!fs.existsSync(file)) {
    throw new Error(`missing dictionary: src/i18n/locales/${lang}.js`);
  }

  const src = fs.readFileSync(file, "utf8");
  const entries = new Map();
  const duplicates = [];
  const empties = [];
  const nonStrings = [];

  const re = /^\s*"((?:[^"\\]|\\.)*)"\s*:\s*(.+?),?\s*$/gm;
  let m;
  while ((m = re.exec(src))) {
    const key = JSON.parse(`"${m[1]}"`);
    const raw = m[2].trim();
    if (entries.has(key)) duplicates.push(key);
    entries.set(key, raw);

    if (raw.startsWith('"')) {
      let value;
      try {
        value = JSON.parse(raw.replace(/,\s*$/, ""));
      } catch (e) {
        nonStrings.push(`${key} (broken string literal)`);
        continue;
      }
      if (String(value).trim() === "") empties.push(key);
    } else {
      nonStrings.push(key);
    }
  }

  return { entries, duplicates, empties, nonStrings };
}

const langs = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith(".js"))
  .map((f) => f.replace(/\.js$/, ""))
  .sort((a, b) => (a === DEFAULT_LANG ? -1 : b === DEFAULT_LANG ? 1 : a.localeCompare(b)));

if (!langs.includes(DEFAULT_LANG)) {
  console.error(`no ${DEFAULT_LANG}.js in src/i18n/locales — cannot compare`);
  process.exit(1);
}

const dicts = {};
for (const lang of langs) dicts[lang] = parseDictionary(lang);

const base = dicts[DEFAULT_LANG].entries;
let problems = 0;

console.log(`i18n dictionaries: ${langs.length} language(s), ${base.size} keys (${DEFAULT_LANG})`);

for (const lang of langs) {
  const { entries, duplicates, empties, nonStrings } = dicts[lang];
  const missing = [...base.keys()].filter((k) => !entries.has(k));
  const extra = [...entries.keys()].filter((k) => !base.has(k));

  const issues = [];
  if (missing.length) issues.push(`${missing.length} missing (e.g. ${missing.slice(0, 3).join(", ")})`);
  if (extra.length) issues.push(`${extra.length} not in ${DEFAULT_LANG} (e.g. ${extra.slice(0, 3).join(", ")})`);
  if (duplicates.length) issues.push(`${duplicates.length} duplicated (${duplicates.slice(0, 3).join(", ")})`);
  if (empties.length) issues.push(`${empties.length} empty (${empties.slice(0, 3).join(", ")})`);
  if (nonStrings.length) issues.push(`${nonStrings.length} non-string (${nonStrings.slice(0, 3).join(", ")})`);

  if (issues.length) {
    problems++;
    console.log(`  FAIL  ${lang.padEnd(3)} keys=${String(entries.size).padStart(4)} -> ${issues.join(" | ")}`);
  } else {
    console.log(`  ok    ${lang.padEnd(3)} keys=${String(entries.size).padStart(4)} (identical key set)`);
  }
}

// Cross-language sanity: a key that is byte-identical to English is usually an
// untranslated leftover. Brand names and acronyms legitimately match, so this is
// reported as a warning for the language owner to eyeball, never a failure.
const ALLOW_IDENTICAL = new Set(["lang", "cta.vip", "seo.home.title", "brand.name"]);
for (const lang of langs) {
  if (lang === DEFAULT_LANG) continue;
  const entries = dicts[lang].entries;
  const same = [];
  for (const [key, rawEn] of base) {
    const raw = entries.get(key);
    if (raw && raw === rawEn && !ALLOW_IDENTICAL.has(key) && /[A-Za-z]{4}/.test(raw)) same.push(key);
  }
  if (same.length) {
    console.log(`  warn  ${lang.padEnd(3)} ${same.length} value(s) identical to English (e.g. ${same.slice(0, 3).join(", ")})`);
  }
}

if (problems) {
  console.error(`\n${problems} dictionary/dictionaries out of sync — every language needs the same keys`);
  process.exit(1);
}
console.log("\nall dictionaries in sync");
