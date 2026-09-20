// i18n controller: language state, persistence, RTL handling, and t() lookup.
//
// How a language is selected
// --------------------------
// 1. Path prefix — the real, crawlable URL (the canonical one):
//      /            English (the default, unprefixed)
//      /ar/         Arabic home
//      /ar/dental/  Arabic page for the dental route
//    Each of those is a separate file with its own <html lang>, translated copy
//    and self-referencing canonical, so Google indexes it as its own page.
//    (?lang=xx CANNOT be indexed: GitHub Pages serves static files and ignores
//    the query string, so /dental/?lang=ar returned byte-identical English HTML
//    with a canonical pointing at /dental/ — Search Console could only ever see
//    a duplicate. Hence the migration to real paths.)
// 2. ?lang=xx — kept working for links shared before the migration: the language
//    is honoured and the address bar is rewritten to the path form on load.
// 3. A stored preference (localStorage) is the last resort.
//
// English lives inside the app bundle (the default language, so the first render
// never waits for a download); the other six dictionaries are lazy chunks that
// the pre-renderer injects directly (see tools/prerender.js).
import en from "./locales/en";
import { LANGS } from "./langs";

const STORAGE_KEY = "platinya-lang";
const DEFAULT_LANG = "en";
const RTL_LANGS = ["ar"];
const CODES = LANGS.map((L) => L.code);

// GitHub Pages project sites are served under /<repo>/ (e.g.
// /Platinya-Clinic-Website/ar/hair/); that leading folder is not part of the
// language nor of the route, so it is skipped when reading the URL.
const REPO_SEGMENTS = ["platinya-clinic-website"];

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
  return CODES.includes(String(lang || "").toLowerCase());
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

// ---------------------------------------------------------------------------
// URL <-> language
// ---------------------------------------------------------------------------

function pathSegments() {
  return (window.location.pathname || "/").split("/").filter(Boolean);
}

// The language prefix that precedes the route in the path, if any.
export function langFromPath() {
  const segs = pathSegments();
  for (let i = 0; i < 2 && i < segs.length; i++) {
    const seg = String(segs[i]).toLowerCase();
    if (i === 1 && !REPO_SEGMENTS.includes(String(segs[0]).toLowerCase())) break;
    if (CODES.includes(seg)) return seg;
  }
  return null;
}

// The route currently shown, with any language prefix / repo folder removed.
// "/ar/dental/" -> "/dental", "/" -> "/".
export function currentRoutePath() {
  const segs = pathSegments();
  const out = segs.slice();
  for (let i = 0; i < 2 && out.length; i++) {
    const seg = String(out[0]).toLowerCase();
    if (CODES.includes(seg) || REPO_SEGMENTS.includes(seg)) {
      out.shift();
      continue;
    }
    break;
  }
  const p = "/" + out.join("/");
  return p === "/" ? "/" : p.replace(/\/+$/, "");
}

// "" for English (which stays at the site root), "/ar" for Arabic, ...
export function langPrefix(lang) {
  const code = lang || currentLang;
  return code && code !== DEFAULT_LANG ? "/" + code : "";
}

// The href of a route in a given language: localizedHref("/dental", "ar") -> "/ar/dental"
export function localizedHref(routePath, lang) {
  const clean = !routePath || routePath === "/" ? "/" : routePath;
  return langPrefix(lang) + clean;
}

// Rewrite every internal route link in a freshly rendered view so it points at
// the current language's path. Components keep writing plain hrefs ("/hair") and
// this single hook localises them all — no component needs to know about i18n
// URL structure, and the pre-rendered HTML still ships real, crawlable hrefs.
export function localizeRouteLinks(root) {
  if (!root || typeof root.querySelectorAll !== "function") return;
  const prefix = langPrefix();
  if (!prefix) return;

  root.querySelectorAll("a[data-route]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.charAt(0) !== "/") return;
    if (href === prefix || href.indexOf(prefix + "/") === 0) return;
    a.setAttribute("href", prefix + (href === "/" ? "" : href));
  });
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

// Legacy entry point: ?lang=ar. Still honoured, but the address bar is moved to
// the real path (/ar/...) so the URL people share is the indexable one.
function readUrlLang() {
  try {
    const lang = new URLSearchParams(window.location.search).get("lang");
    if (lang && isSupported(lang)) return lang.toLowerCase();
  } catch (e) {
    /* ignore */
  }
  return null;
}

// Language resolution order: the pre-renderer's injected language, then the path
// prefix, then ?lang=, then the visitor's stored choice.
const prerenderLang = typeof window !== "undefined" ? window.__PLATINYA_PRERENDER_LANG__ : null;
const prerenderTable = typeof window !== "undefined" ? window.__PLATINYA_PRERENDER_TABLE__ : null;

if (prerenderLang && isSupported(prerenderLang) && prerenderTable) {
  tables[prerenderLang] = prerenderTable;
}

const pathLang = typeof window !== "undefined" ? langFromPath() : null;
const urlLang = typeof window !== "undefined" ? readUrlLang() : null;

let currentLang = prerenderLang || pathLang || urlLang || readSaved();

if (urlLang) {
  try {
    localStorage.setItem(STORAGE_KEY, urlLang);
  } catch (e) {
    /* ignore */ 
  }
  // /dental/?lang=ar -> /ar/dental/ (same document, no reload)
  if (urlLang !== pathLang) syncUrlLang(currentLang);
}

// Keep the address bar on the current page's language path, without adding a
// history entry: /ar/dental/ for Arabic, plain /dental/ for the default English.
function syncUrlLang(lang) {
  try {
    const route = currentRoutePath();
    const clean = route === "/" ? "/" : route + "/";
    const url = langPrefix(lang) + clean;
    window.history.replaceState({}, "", url + (window.location.hash || ""));
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
  currentLang = String(lang).toLowerCase();
  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (e) {
    /* ignore */
  }
  syncUrlLang(currentLang);
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

export { LANGS, RTL_LANGS, DEFAULT_LANG };
