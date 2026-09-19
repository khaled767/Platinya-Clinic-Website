import "./styles/main.css";

import renderApp from "./renderApp";
import { initI18n, getLang, loadLang, t } from "./i18n";
import {
  initRouting,
  initMobileMenu,
  initLanguageSwitcher,
  initHeaderScroll,
  initLightbox,
  initServicesCarousel,
  initContactForm,
} from "./utils/interactions";

// Expose the current language's form strings for the client-side validators
const syncFormStrings = () => {
  window.__t_phoneHint = t("contact.phoneOnly") || "";
  window.__t_uploadMax = t("contact.uploadMax") || "";
  window.__t_uploadSize = t("contact.uploadSize") || "";
};

// keep the strings in sync if the language changes
document.addEventListener("langchange", syncFormStrings);

// Boot. English is already in the bundle, so this resolves immediately for the
// default language; a visitor arriving on ?lang=ar (or with a stored preference)
// waits here for that language's chunk, so the very first render is already in
// their language and in the right direction.
function boot() {
  initI18n();
  syncFormStrings();

  renderApp();

  initRouting();
  initMobileMenu();
  initLanguageSwitcher();
  initHeaderScroll();
  initLightbox();
  initServicesCarousel();
  initContactForm();
}

loadLang(getLang())
  .then(() => {
    try {
      boot();
    } catch (err) {
      // One failing UI module must not leave the page half-initialised, and the
      // pre-rendered markup is already on screen — report it, keep serving.
      console.error("Platinya: initialisation failed —", err);
    }
  })
  .catch((err) => {
    console.error("Platinya: boot failed —", err);
  });


