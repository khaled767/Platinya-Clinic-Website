import "./styles/main.css";

import renderApp from "./renderApp";
import { initI18n } from "./i18n";
import {
  initRouting,
  initMobileMenu,
  initLanguageSwitcher,
  initHeaderScroll,
  initLightbox,
} from "./utils/interactions";

initI18n();

renderApp();

initRouting();
initMobileMenu();
initLanguageSwitcher();
initHeaderScroll();
initLightbox();
