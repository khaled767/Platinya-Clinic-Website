import routes, { notFoundPage } from "./routes";

// Routing strategy
// ----------------
// The site ships as a pre-rendered SPA: every route exists as a real HTML file
// (e.g. /hair/index.html), so crawlers get complete content and visitors get
// clean URLs like https://platinyaclinic.com/hair/.
//
// Legacy hash URLs (#/hair) keep working so links shared before pre-rendering
// was introduced still resolve.

export function getCurrentPath() {
  // 1) Legacy hash form: #/hair
  const hash = window.location.hash || "";
  if (hash.length > 1) {
    const p = hash.slice(1).split("?")[0];
    return p === "/" || p === "" ? "/" : p.replace(/\/+$/, "");
  }

  // 2) Real path form: /hair/  (what the pre-rendered pages use)
  let path = window.location.pathname || "/";

  // GitHub Pages project sites are served under /<repo>/ — drop that prefix
  // when the first segment is not itself a route.
  const parts = path.split("/").filter(Boolean);
  if (parts.length && !routes["/" + parts[0]]) {
    // first segment is the repo name (e.g. Platinya-Clinic-Website)
    path = "/" + parts.slice(1).join("/");
  }

  path = "/" + path.replace(/^\/+/, "").replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

function resolveRoute() {
  const currentPath = getCurrentPath();
  return routes[currentPath] || notFoundPage;
}

export { resolveRoute };
