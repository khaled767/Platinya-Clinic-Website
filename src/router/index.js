import routes, { notFoundPage } from "./routes";
import { LANGS } from "../i18n";

const LANG_CODES = LANGS.map((L) => L.code);

// Routing strategy
// ----------------
// The site ships as a pre-rendered SPA: every route exists as a real HTML file
// (e.g. /hair/index.html), so crawlers get complete content and visitors get
// clean URLs like https://platinyaclinic.com/hair/.
//
// Languages are real path prefixes (/ar/dental/, /ru/hair/) — each one is its own
// pre-rendered file, because a query parameter cannot produce a distinct page on
// a static host. English stays at the root, unprefixed.
//
// Legacy hash URLs (#/hair) keep working so links shared before pre-rendering
// was introduced still resolve.

const REPO_SEGMENT = "platinya-clinic-website";

export function getCurrentPath() {
  // 1) Legacy hash form: #/hair
  const hash = window.location.hash || "";
  if (hash.length > 1) {
    const p = hash.slice(1).split("?")[0];
    const clean = stripPrefixes(p.split("/").filter(Boolean)).join("/");
    return clean === "" ? "/" : "/" + clean;
  }

  // 2) Real path form: /hair/, /ar/dental/  (what the pre-rendered pages use)
  const segments = (window.location.pathname || "/").split("/").filter(Boolean);
  const path = "/" + stripPrefixes(segments).join("/");
  return path === "/" ? "/" : path.replace(/\/+$/, "");
}

// Remove the language prefix and the GitHub Pages repo folder from a path.
//
// A segment is dropped only when it really is one of those two things — a random
// first segment ("/zzz-not-real/") must survive so the router can answer with the
// not-found page instead of silently serving the home page (a soft 404).
function stripPrefixes(segments) {
  const out = segments.slice();

  for (let i = 0; i < 2 && out.length; i++) {
    const first = String(out[0]).toLowerCase();

    if (first === REPO_SEGMENT || isLanguageSegment(first)) {
      out.shift();
      continue;
    }

    // A repo folder we do not know by name: "/<repo>/hair/" — recognisable
    // because the next segment is a real route or a language.
    const next = out[1] === undefined ? null : String(out[1]).toLowerCase();
    if (next && (routes["/" + next] || isLanguageSegment(next))) {
      out.shift();
      continue;
    }

    break;
  }

  return out;
}

function isLanguageSegment(segment) {
  return LANG_CODES.includes(segment);
}

function resolveRoute() {
  const currentPath = getCurrentPath();
  return routes[currentPath] || notFoundPage;
}

export { resolveRoute };
