import { resolveRoute } from "./router";
import mainLayout from "./layouts/main";
import { setAppContent } from "./utils/helpers";
import { applySeo } from "./utils/seo";
import { initMotion } from "./utils/motion";
import { initMotionPlus, resetScroll } from "./utils/motion-plus";

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
  // Phase 2: smooth scroll, counters, hero parallax, swipeable carousel.
  initMotionPlus();
  // A new route always starts at the top, even while Lenis owns the scrolling.
  resetScroll();
}

export default renderApp;
