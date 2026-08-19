// Services Section Component (High-Fidelity)
import { icons } from "../icons";
import { t } from "../../i18n";

export default function services() {
  const specs = [
    { id: "hair", number: "01", key: "hair", tagKey: "popular", tag: "" },
    { id: "dental", number: "02", key: "dental", tagKey: "cosmetic" },
    { id: "plastic", number: "03", key: "plastic", tagKey: "surgical" },
    { id: "bariatric", number: "04", key: "bariatric", tagKey: "vital" },
    { id: "aesthetics", number: "05", key: "aesth", tagKey: "nonsurgical" },
  ];

  return `
    <section class="section-services">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">${t("services.sub")}</span>
          <h2 class="section-title">${t("services.title")}</h2>
          <p class="section-description">${t("services.desc")}</p>
        </div>

        <div class="services-grid">
          ${specs.map((s) => `
            <article class="service-card-luxury">
              <div class="card-header-meta">
                <span class="service-number">${s.number}</span>
                <span class="service-tag">${t("sv.tag." + s.tagKey)}</span>
              </div>
              <h3 class="service-title">${t("sv." + s.key)}</h3>
              <p class="service-description">${t("sv." + s.key + ".d")}</p>
              <div class="card-footer-action">
                <a href="/services" data-route class="link-luxury">
                  <span>${t("services.explore")}</span>
                  <span class="arrow">→</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Concierge Package Banner -->
        <div class="concierge-banner-luxury">
          <div class="banner-content">
            <span class="banner-badge">${t("services.banner")}</span>
            <h3 class="banner-title">${t("services.bannerTitle")}</h3>
            <p class="banner-sub">${t("services.bannerSub")}</p>
          </div>
          <div class="concierge-features-grid">
            <div class="feature-chip">
              <span class="chip-icon">${icons.plane}</span>
              <span class="chip-text">${t("services.f1")}</span>
            </div>
            <div class="feature-chip">
              <span class="chip-icon">${icons.hotel}</span>
              <span class="chip-text">${t("services.f2")}</span>
            </div>
            <div class="feature-chip">
              <span class="chip-icon">${icons.user}</span>
              <span class="chip-text">${t("services.f3")}</span>
            </div>
            <div class="feature-chip">
              <span class="chip-icon">${icons.translate}</span>
              <span class="chip-text">${t("services.f4")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
