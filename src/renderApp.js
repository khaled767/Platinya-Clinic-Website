import { resolveRoute } from "./router";
import mainLayout from "./layouts/main";
import { setAppContent } from "./utils/helpers";
import { applySeo } from "./utils/seo";

function createApp() {
  const currentPage = resolveRoute();

  return mainLayout(currentPage());
}

function renderApp() {
  setAppContent(createApp());
  // Keep <title>, description, canonical and share tags in sync with the route.
  applySeo();
}

export default renderApp;
