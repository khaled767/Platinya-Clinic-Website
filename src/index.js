import "./styles/main.css";

import renderApp from "./renderApp";
import { initI18n } from "./i18n";
import {
  initRouting,
  initMobileMenu,
  initLanguageSwitcher,
  initHeaderScroll,
  initLightbox,
  initServicesCarousel,
  initContactForm,
} from "./utils/interactions";
import { getLang, t } from "./i18n";

initI18n();

// Expose the current language's form strings for the client-side validators
const syncFormStrings = () => {
  window.__t_phoneHint = t("contact.phoneOnly") || "";
  window.__t_uploadMax = t("contact.uploadMax") || "";
  window.__t_uploadSize = t("contact.uploadSize") || "";
};
syncFormStrings();

renderApp();

initRouting();
initMobileMenu();
initLanguageSwitcher();
initHeaderScroll();
initLightbox();
initServicesCarousel();
initContactForm();
// keep the strings in sync if the language changes
document.addEventListener("langchange", syncFormStrings);
