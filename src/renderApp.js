import { resolveRoute } from "./router";
import mainLayout from "./layouts/main";
import { setAppContent } from "./utils/helpers";

function createApp() {
  const currentPage = resolveRoute();

  return mainLayout(currentPage());
}

function renderApp() {
  setAppContent(createApp());
}

export default renderApp;