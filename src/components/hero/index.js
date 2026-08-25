// Hero Component (High-Fidelity)
import { t } from "../../i18n";

export default function hero() {
  return `
    <section class="hero-section">
      <div class="hero-backdrop-glow"></div>
      <div class="container hero-container">
        
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span class="badge-text">${t("hero.badge")}</span>
          </div>

          <h1 class="hero-title">
            ${t("hero.title1")} <span class="title-highlight">${t("hero.title2")}</span> ${t("hero.title3")}
          </h1>

          <p class="hero-description">
            ${t("hero.desc")}
          </p>

          <div class="hero-actions">
            <a href="/contact" data-route class="btn-hero-primary">
              <span>${t("hero.cta1")}</span>
            </a>
            <a href="/services" data-route class="btn-hero-secondary">
              <span>${t("hero.cta2")}</span>
            </a>
          </div>

          <div class="hero-trust-bar">
            <div class="trust-item">
              <span class="trust-value">100%</span>
              <span class="trust-label">${t("hero.trust1")}</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <span class="trust-value">15+</span>
              <span class="trust-label">${t("hero.trust2")}</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <span class="trust-value">24/7</span>
              <span class="trust-label">${t("hero.trust3")}</span>
            </div>
          </div>
        </div>

        <div class="hero-media">
          <div class="hero-card-luxury">
            <img
              src="./assets/images/ai/hero-APPROVED.webp"
              alt="Luxury medical concierge lounge"
              class="hero-card-img"
              loading="lazy"
            />
            <div class="hero-card-tint"></div>
            <div class="card-glow"></div>
            <div class="concierge-preview-badge">
              <span class="badge-icon">★</span>
              <div class="badge-info">
                <span class="badge-title">${t("hero.badge2")}</span>
                <span class="badge-sub">${t("hero.badge3")}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
