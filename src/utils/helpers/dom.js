
import { localizeRouteLinks } from "../../i18n";

export function getAppRoot() {
  return document.getElementById("app");
}

export function clearApp() {
  const app = getAppRoot();

  if (app) {
    app.innerHTML = "";
  }
}

// Inject a rendered view and localise its internal links. Components keep
// writing plain hrefs ("/hair"); the i18n controller rewrites them to the
// current language's path ("/ar/hair") so the pre-rendered HTML ships real,
// crawlable links and SPA navigation stays inside the chosen language.
export function setAppContent(content) {
  const app = getAppRoot();

  if (!app) {
    throw new Error("Application root (#app) was not found.");
  }

  app.innerHTML = content;
  localizeRouteLinks(app);
}