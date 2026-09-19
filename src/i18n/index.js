// i18n controller: language state, persistence, RTL handling, and t() lookup.
import translations, { LANGS } from "./translations";

const STORAGE_KEY = "platinya-lang";
const DEFAULT_LANG = "en";
const RTL_LANGS = ["ar"];

let currentLang = DEFAULT_LANG;

function readSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
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
    if (lang && translations[lang]) return lang;
  } catch (e) {
    /* ignore */
  }
  return null;
}

// URL wins over the stored preference (an explicit link is an explicit choice).
const urlLang = readUrlLang();
currentLang = urlLang || readSaved();

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
  if (!translations[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* ignore */
  }
  syncUrlLang(lang);
  applyDocLang();
}

// Translate a key for the current language, falling back to English.
export function t(key) {
  const table = translations[currentLang] || translations[DEFAULT_LANG];
  return table[key] !== undefined
    ? table[key]
    : (translations[DEFAULT_LANG][key] !== undefined ? translations[DEFAULT_LANG][key] : key);
}

// Translate a key in a specific language (used by components that render all langs).
export function tIn(lang, key) {
  const table = translations[lang] || translations[DEFAULT_LANG];
  return table[key] !== undefined ? table[key] : key;
}

export { LANGS };
