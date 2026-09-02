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

// Expose the current language's phone hint for the form validator
const syncPhoneHint = () => { window.__t_phoneHint = t("contact.phoneOnly") || ""; };
syncPhoneHint();

renderApp();

initRouting();
initMobileMenu();
initLanguageSwitcher();
initHeaderScroll();
initLightbox();
initServicesCarousel();
initContactForm();
// keep the hint in sync if the language changes
document.addEventListener("langchange", syncPhoneHint);
