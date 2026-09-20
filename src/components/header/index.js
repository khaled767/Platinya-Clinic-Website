import navigation from "../navigation";
import { icons } from "../icons";
import { LANGS, t, getLang, localizedHref, currentRoutePath } from "../../i18n";

export default function header() {
  const current = getLang();
  // Every option links to THIS page in that language ("/ar/dental/"), so the
  // links are real hrefs a crawler can follow — that is how Google discovers the
  // translated pages.
  const route = currentRoutePath();

  return `
    <header class="site-header">
      <div class="container header-container">
        <div class="header-logo">
          <a href="/" data-route class="logo-link">
            <img src="./assets/images/logo.png" alt="Platinya Clinic Logo" class="brand-logo-img" />
          </a>
        </div>

        <div class="navbar-collapse">
          <nav class="main-nav">
            ${navigation()}
          </nav>

          <div class="navbar-actions">
            <a href="/contact" data-route class="btn-luxury-gold header-contact-cta">
              <span>${t("cta.vip")}</span>
            </a>
          </div>
        </div>

        <div class="header-actions">
          <!-- Language Switcher UI -->
          <div class="lang-switcher">
            <button type="button" class="lang-btn" aria-label="Select Language">
              <span class="lang-icon">${icons.globe}</span>
              <span class="lang-current">${t("lang")}</span>
              <span class="lang-arrow">▾</span>
            </button>
            <div class="lang-dropdown">
              ${LANGS.map((L) => `
                <a href="${localizedHref(route, L.code)}" class="lang-option ${L.code === current ? "active" : ""}" data-lang="${L.code}" hreflang="${L.code}" rel="alternate">
                  <span>${L.label}</span> <span class="flag">${L.flag}</span>
                </a>
              `).join('')}
            </div>
          </div>

          <a href="/contact" data-route class="btn-luxury-gold header-cta-desktop">
            <span>${t("cta.vip")}</span>
          </a>

          <!-- Ministry of Health / Health Türkiye trust badge — after VIP CTA -->
          <img
            src="./assets/images/health-turkiye-logo.webp"
            alt="Health Türkiye — Turkish Ministry of Health"
            class="health-badge"
            loading="lazy"
          />

          <button type="button" class="mobile-toggle" aria-label="Toggle Navigation">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  `;
}
