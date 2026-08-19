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

currentLang = readSaved();

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
