import navigation from "../navigation";

export default function header() {
  return `
    <header class="site-header">
      <div class="container header-container">
        <div class="header-logo">
          <a href="/" data-route class="logo-link">
            <img src="/assets/images/logo.png" alt="Platinya Clinic Logo" class="brand-logo-img" />
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
