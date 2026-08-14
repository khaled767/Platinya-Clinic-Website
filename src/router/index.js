import routes, { notFoundPage } from "./routes";

// Hash-based routing so the SPA works under a GitHub Pages subpath
// (the # part is never sent to the server, so deep links never 404).
function getCurrentPath() {
  const raw = window.location.hash || "#/";
  const path = raw.length > 1 ? raw.slice(1) : "/";
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

function resolveRoute() {
  const currentPath = getCurrentPath();
  return routes[currentPath] || notFoundPage;
}

export { getCurrentPath, resolveRoute };
