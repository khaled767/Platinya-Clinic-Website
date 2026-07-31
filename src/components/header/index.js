import navigation from "../navigation";
import { icons } from "../icons";

export default function header() {
  return `
    <header class="site-header">
      <div class="container header-container">
        <div class="header-logo">
          <a href="/" data-route class="logo-link">
            <div class="logo-img-wrapper">
              <img src="/assets/images/logo.png" alt="Platinya Clinic Logo" class="brand-logo-img" />
            </div>
            <div class="logo-text">
              <span class="logo-title">PLATINYA</span>
              <span class="logo-subtitle">HEALTHCARE CONCIERGE</span>
            </div>
          </a>
        </div>

        <div class="header-navigation">
          ${navigation()}
        </div>

        <div class="header-actions">
          <!-- Language Switcher UI -->
          <div class="lang-switcher">
            <button type="button" class="lang-btn" aria-label="Select Language">
              <span class="lang-icon">${icons.globe}</span>
              <span class="lang-current">EN</span>
              <span class="lang-arrow">▾</span>
            </button>
            <div class="lang-dropdown">
              <a href="#" class="lang-option active"><span>English</span> <span class="flag">🇬🇧</span></a>
              <a href="#" class="lang-option"><span>العربية</span> <span class="flag">🇸🇦</span></a>
              <a href="#" class="lang-option"><span>Français</span> <span class="flag">🇫🇷</span></a>
              <a href="#" class="lang-option"><span>Español</span> <span class="flag">🇪🇸</span></a>
            </div>
          </div>

          <a href="/contact" data-route class="btn-luxury-gold">
            <span>VIP Consultation</span>
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
