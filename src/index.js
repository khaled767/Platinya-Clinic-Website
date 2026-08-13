import "./styles/main.css";

import renderApp from "./renderApp";
import {
  initMobileMenu,
  initLanguageSwitcher,
  initHeaderScroll,
} from "./utils/interactions";

renderApp();

initMobileMenu();
initLanguageSwitcher();
initHeaderScroll();
