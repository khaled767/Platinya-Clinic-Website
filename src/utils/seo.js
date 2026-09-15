// Per-route SEO: updates <title>, meta description, canonical and og tags
// whenever the visitor navigates to another page (hash-based SPA routing).
//
// Google renders JS, so these dynamic values are what the crawler indexes.
// Keys live in the translations dictionary (seo.<route>.*) so every page
// ships a title + description in all 7 supported languages.

import { t, getLang } from "../i18n";

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

function currentPath() {
  const hash = window.location.hash || "";
  const raw = hash.replace(/^#/, "");
  const path = raw.split("?")[0] || "/";
  return path === "" ? "/" : path;
}

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

// Build a canonical URL that reflects the language the visitor is reading.
function canonicalFor(path, lang) {
  const suffix = lang && lang !== "en" ? `?lang=${lang}` : "";
  return `${ORIGIN}/#${path}${suffix}`;
}

export function applySeo() {
  const path = currentPath();
  const prefix = KEY_BY_ROUTE[path];
  const lang = getLang();

  // Fall back to the generic home copy for unknown routes (404 page).
  const keyBase = prefix || "seo.home";

  const title = t(`${keyBase}.title`) || SITE_NAME;
  const desc = t(`${keyBase}.desc`) || "";

  // <title>
  document.title = title;

  // primary description
  setMeta('meta[name="description"]', "content", desc);
  setMeta('meta[name="title"]', "content", title);

  // canonical (language aware)
  setLink("canonical", canonicalFor(path, lang));

  // Open Graph + Twitter — keep the share card in sync with the page
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", desc);
  setMeta('meta[property="og:url"]', "content", `${ORIGIN}/#${path}`);
  setMeta('meta[name="twitter:title"]', "content", title);
  setMeta('meta[name="twitter:description"]', "content", desc);

  // <html lang> is handled by i18n; keep dir correct too.
  document.documentElement.setAttribute("lang", lang);
}
