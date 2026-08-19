import navigation from "../navigation";
import { icons } from "../icons";
import { LANGS, t, getLang } from "../../i18n";

export default function header() {
  const current = getLang();

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
                <a href="#" class="lang-option ${L.code === current ? "active" : ""}" data-lang="${L.code}">
                  <span>${L.label}</span> <span class="flag">${L.flag}</span>
                </a>
              `).join('')}
            </div>
          </div>

          <a href="/contact" data-route class="btn-luxury-gold header-cta-desktop">
            <span>${t("cta.vip")}</span>
          </a>

          <button type="button" class="mobile-toggle" aria-label="Toggle Navigation">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  `;
}
