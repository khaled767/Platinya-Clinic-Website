import { resolveRoute } from "./router";
import mainLayout from "./layouts/main";
import { setAppContent } from "./utils/helpers";
import { applySeo } from "./utils/seo";
import { initMotion } from "./utils/motion";

function createApp() {
  const currentPage = resolveRoute();

  return mainLayout(currentPage());
}

function renderApp() {
  setAppContent(createApp());
  // Keep <title>, description, canonical and share tags in sync with the route.
  applySeo();
  // Re-arm the scroll reveals for the page that was just painted. Safe no-op in
  // jsdom (the pre-renderer) and for visitors who asked to reduce motion.
  initMotion();
}

export default renderApp;
