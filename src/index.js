import "./styles/main.css";

import renderApp from "./renderApp";
import { initI18n, getLang, loadLang, t } from "./i18n";
import { initDwellTracking } from "./utils/tracking";
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

  // Time-based engagement (page_engaged_3min) — one timer for the whole session,
  // it resets itself on client-side route changes.
  initDwellTracking();

  renderApp();

  initRouting();
  initMobileMenu();
  initLanguageSwitcher();
  initHeaderScroll();
  initLightbox();
  initServicesCarousel();
  initContactForm();

  // Marks that the JavaScript has really taken over the pre-rendered document.
  // Tests must wait for THIS, not for markup: the pre-rendered HTML already
  // contains the full page, so "is there content in #app?" is true before the
  // bundle has run and would make a test assert the served HTML instead of the
  // rendered DOM — exactly the blind spot that hid the canonical bug.
  document.documentElement.setAttribute("data-app-booted", "1");
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


