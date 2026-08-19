import "./styles/main.css";

import renderApp from "./renderApp";
import { initI18n } from "./i18n";
import {
  initRouting,
  initMobileMenu,
  initLanguageSwitcher,
  initHeaderScroll,
} from "./utils/interactions";

initI18n();

renderApp();

initRouting();
initMobileMenu();
initLanguageSwitcher();
initHeaderScroll();
