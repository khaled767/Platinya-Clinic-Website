// i18n controller: language state, persistence, RTL handling, and t() lookup.
//
// English lives inside the app bundle: it is the default language and the one the
// pre-rendered HTML is written in, so the first render must never wait for a
// download. The other six languages are separate chunks, fetched by loadLang()
// only when a visitor actually asks for them (?lang=xx, the switcher, or a stored
// preference) — a visitor downloads one dictionary instead of all seven.
import en from "./locales/en";
import { LANGS } from "./langs";

const STORAGE_KEY = "platinya-lang";
const DEFAULT_LANG = "en";
const RTL_LANGS = ["ar"];

// Loaded dictionaries by language code. Started with English only.
const tables = { en };

// One lazy loader per non-default language; webpack emits each as its own file at
// the site root (locale-ar.js, locale-ru.js, ...).
const LOADERS = {
  ar: () => import(/* webpackChunkName: "locale-ar" */ "./locales/ar"),
  fr: () => import(/* webpackChunkName: "locale-fr" */ "./locales/fr"),
  es: () => import(/* webpackChunkName: "locale-es" */ "./locales/es"),
  tr: () => import(/* webpackChunkName: "locale-tr" */ "./locales/tr"),
  it: () => import(/* webpackChunkName: "locale-it" */ "./locales/it"),
  ru: () => import(/* webpackChunkName: "locale-ru" */ "./locales/ru"),
};

function isSupported(lang) {
  return LANGS.some((L) => L.code === lang);
}

export function isLangLoaded(lang) {
  return Boolean(tables[lang]);
}

// Fetch a language's dictionary if needed. Resolves with `true` once it is usable;
// on a network/chunk failure it resolves `false` so the caller can fall back to
// English instead of leaving the page blank.
export function loadLang(lang) {
  if (!isSupported(lang)) return Promise.resolve(false);
  if (tables[lang]) return Promise.resolve(true);

  const loader = LOADERS[lang];
  if (!loader) return Promise.resolve(false);

  return loader()
    .then((mod) => {
      tables[lang] = mod && mod.default ? mod.default : mod;
      return true;
    })
    .catch(() => false);
}

function readSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && isSupported(saved)) return saved;
  } catch (e) {
    /* ignore */
  }
  return DEFAULT_LANG;
}

// Language can also arrive as a URL parameter (?lang=ar) so that each language
// has its own shareable, crawlable address. This is what the hreflang tags in
// the pre-rendered pages point at, so it must work for search engines.
function readUrlLang() {
  try {
    const lang = new URLSearchParams(window.location.search).get("lang");
    if (lang && isSupported(lang)) return lang;
  } catch (e) {
    /* ignore */
  }
  return null;
}

// URL wins over the stored preference (an explicit link is an explicit choice).
const urlLang = readUrlLang();
let currentLang = urlLang || readSaved();

if (urlLang) {
  try {
    localStorage.setItem(STORAGE_KEY, urlLang);
  } catch (e) {
    /* ignore */
  }
}

// Keep the address bar in step with the chosen language, without adding history
// entries: /dental/?lang=ar for Arabic, plain /dental/ for the default English.
function syncUrlLang(lang) {
  try {
    const url = new URL(window.location.href);
    if (lang === DEFAULT_LANG) url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  } catch (e) {
    /* ignore */
  }
}

// Apply the current language's <html lang> + dir attributes (call once on boot).
export function initI18n() {
  applyDocLang();
}

function applyDocLang() {
  const isRTL = RTL_LANGS.includes(currentLang);
  document.documentElement.setAttribute("lang", currentLang);
  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  document.documentElement.classList.toggle("is-rtl", isRTL);
}

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (!isSupported(lang)) return;
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* ignore */
  }
  syncUrlLang(lang);
  applyDocLang();
}

// Translate a key for the current language, falling back to English. The English
// table is always present, so a key is never rendered as an empty string.
export function t(key) {
  const table = tables[currentLang] || tables[DEFAULT_LANG];
  return table[key] !== undefined
    ? table[key]
    : (tables[DEFAULT_LANG][key] !== undefined ? tables[DEFAULT_LANG][key] : key);
}

// Translate a key in a specific language (used by components that render all langs).
export function tIn(lang, key) {
  const table = tables[lang] || tables[DEFAULT_LANG];
  return table[key] !== undefined ? table[key] : key;
}

export { LANGS };
