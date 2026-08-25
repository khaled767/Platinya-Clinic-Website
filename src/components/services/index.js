// Services Section Component (High-Fidelity)
import { icons } from "../icons";
import { t } from "../../i18n";

export default function services() {
  const specs = [
    {
      id: "hair", number: "01", key: "hair", tagKey: "popular",
      img: "./assets/images/ai/services/hair-APPROVED.webp",
      imgAlt: "Hair transplantation in progress with drawn hairline",
    },
    {
      id: "dental", number: "02", key: "dental", tagKey: "cosmetic",
      img: "./assets/images/ai/services/dental-APPROVED-nolamp.webp",
      imgAlt: "Comfortable dental check-up with open mouth",
    },
    {
      id: "plastic", number: "03", key: "plastic", tagKey: "surgical",
      img: "./assets/images/ai/services/plastic/plastic-APPROVED.webp",
      imgAlt: "Plastic surgery consultation reviewing a facial plan",
    },
    {
      id: "bariatric", number: "04", key: "bariatric", tagKey: "vital",
      img: "./assets/images/ai/services/bariatric/bariatric-APPROVED.webp",
      imgAlt: "Healthy, energised lifestyle after bariatric treatment",
    },
    {
      id: "aesthetics", number: "05", key: "aesth", tagKey: "nonsurgical",
      img: "./assets/images/ai/services/aesthetics/aesthetics-APPROVED.webp",
      imgAlt: "Serene medical-aesthetics facial treatment",
    },
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
              <div class="service-card-media">
                <img src="${s.img}" alt="${s.imgAlt}" class="service-card-img" loading="lazy" />
              </div>
              <div class="service-card-body">
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
