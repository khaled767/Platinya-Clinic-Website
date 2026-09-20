// Per-route SEO: updates <title>, meta description, canonical, hreflang and the
// share tags whenever the visitor navigates to another page.
//
// The site is pre-rendered, so a crawler already receives the correct tags in the
// served HTML (see tools/prerender.js). This module keeps those same tags correct
// after client-side navigation — and it must agree with the pre-renderer exactly,
// or Google would see two different canonicals for one page.
//
// Canonical shape (language is a real path prefix, never a query string):
//   https://platinyaclinic.com/dental/        English (default, unprefixed)
//   https://platinyaclinic.com/ar/dental/     Arabic
import { getCurrentPath } from "../router";
import { t, getLang, LANGS, langPrefix } from "../i18n";

const ORIGIN = "https://platinyaclinic.com";
const SITE_NAME = "Platinya Clinic Agency";

// route path -> key prefix used in the dictionary
const KEY_BY_ROUTE = {
  "/": "seo.home",
  "/services": "seo.services",
  "/about": "seo.about",
  "/hospitals": "seo.hospitals",
  "/testimonials": "seo.testimonials",
  "/contact": "seo.contact",
  "/hair": "seo.hair",
  "/dental": "seo.dental",
  "/plastic": "seo.plastic",
  "/plastic-body": "seo.plasticBody",
  "/bariatric": "seo.bariatric",
  "/aesthetics": "seo.aesthetics",
  "/concierge": "seo.concierge",
  "/hotel": "seo.hotel",
  "/airport": "seo.airport",
  "/transfers": "seo.transfers",
  "/interpreter": "seo.interpreter",
  "/privacy-policy": "seo.privacyPolicy",
  "/terms": "seo.terms",
  "/privacy": "seo.privacy",
};

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const m = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (m) el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// The canonical URL of a route in a language. Used for the canonical link, for
// og:url and for every hreflang alternate, so all three can never drift apart.
function urlFor(path, lang) {
  const clean = path === "/" ? "/" : `${path}/`;
  return `${ORIGIN}${langPrefix(lang)}${clean}`;
}

// One alternate per language plus x-default, exactly like the pre-rendered HTML.
function applyAlternates(path) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());

  const frag = document.createDocumentFragment();
  LANGS.forEach((L) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", L.code);
    link.setAttribute("href", urlFor(path, L.code));
    frag.appendChild(link);
  });

  const fallback = document.createElement("link");
  fallback.setAttribute("rel", "alternate");
  fallback.setAttribute("hreflang", "x-default");
  fallback.setAttribute("href", urlFor(path, "en"));
  frag.appendChild(fallback);

  document.head.appendChild(frag);
}

export function applySeo() {
  const path = getCurrentPath();
  const prefix = KEY_BY_ROUTE[path];
  const lang = getLang();

  // Fall back to the generic home copy for unknown routes (404 page).
  const keyBase = prefix || "seo.home";

  const title = t(`${keyBase}.title`) || SITE_NAME;
  const desc = t(`${keyBase}.desc`) || "";
  const canonical = urlFor(path, lang);

  // <title>
  document.title = title;

  // primary description
  setMeta('meta[name="description"]', "content", desc);
  setMeta('meta[name="title"]', "content", title);

  // canonical (route + language aware, never a #hash or ?lang= URL)
  setLink("canonical", canonical);

  // Open Graph + Twitter — keep the share card in sync with the page
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", desc);
  setMeta('meta[property="og:url"]', "content", canonical);
  setMeta('meta[property="og:locale"]', "content", lang);
  setMeta('meta[name="twitter:title"]', "content", title);
  setMeta('meta[name="twitter:description"]', "content", desc);

  // The whole hreflang cluster describes THIS page in every language.
  applyAlternates(path);

  // <html lang> is handled by i18n; keep dir correct too.
  document.documentElement.setAttribute("lang", lang);
}
