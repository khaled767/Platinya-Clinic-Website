import routes, { notFoundPage } from "./routes";

function getCurrentPath() {
  const { pathname } = window.location;

  return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
}

function resolveRoute() {
  const currentPath = getCurrentPath();

  return routes[currentPath] || notFoundPage;
}

export { getCurrentPath, resolveRoute };