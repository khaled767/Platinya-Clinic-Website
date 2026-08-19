// About Section Component (High-Fidelity)
import { t } from "../../i18n";

export default function about() {
  return `
    <section class="section-about">
      <div class="container about-container">
        <div class="about-content">
          <span class="section-subtitle">${t("about.subtitle")}</span>
          <h2 class="about-title">${t("about.title")}</h2>
          <div class="about-highlights">
            <div class="highlight-item">
              <span class="highlight-icon">✓</span>
              <div>
                <h4 class="highlight-title">${t("about.f1")}</h4>
                <p class="highlight-text">${t("about.f1d")}</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">✓</span>
              <div>
                <h4 class="highlight-title">${t("about.f2")}</h4>
                <p class="highlight-text">${t("about.f2d")}</p>
              </div>
            </div>
          </div>
          <a href="/about" data-route class="btn-about-luxury">
            <span>${t("about.btn")}</span>
          </a>
        </div>

        <div class="about-media">
          <div class="about-media-card card-luxury">
            <div class="media-stat-box">
              <span class="stat-number">15+</span>
              <span class="stat-label">${t("about.stat")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
