import "./styles/main.css";

import renderApp from "./renderApp";
import {
  initRouting,
  initMobileMenu,
  initLanguageSwitcher,
  initHeaderScroll,
} from "./utils/interactions";

renderApp();

initRouting();
initMobileMenu();
initLanguageSwitcher();
initHeaderScroll();
