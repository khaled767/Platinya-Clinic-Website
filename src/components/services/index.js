// Services Section Component (High-Fidelity)
import { icons } from "../icons";
import { t } from "../../i18n";

export default function services() {
  const specs = [
    {
      id: "hair", number: "01", key: "hair", tagKey: "popular",
      link: "/hair",
      img: "./assets/images/ai/services/hair-APPROVED.webp",
      imgAlt: "Hair transplantation in progress with drawn hairline",
    },
    {
      id: "dental", number: "02", key: "dental", tagKey: "cosmetic",
      link: "/dental",
      img: "./assets/images/ai/services/dental-APPROVED-nolamp.webp",
      imgAlt: "Comfortable dental check-up with open mouth",
    },
    {
      id: "plastic", number: "03", key: "plastic", tagKey: "surgical",
      link: "/plastic",
      img: "./assets/images/ai/services/plastic/plastic-APPROVED.webp",
      imgAlt: "Plastic surgery consultation reviewing a facial plan",
    },
    {
      id: "bariatric", number: "04", key: "bariatric", tagKey: "vital",
      link: "/bariatric",
      img: "./assets/images/ai/services/bariatric/bariatric-APPROVED.webp",
      imgAlt: "Healthy, energised lifestyle after bariatric treatment",
    },
    {
      id: "aesthetics", number: "05", key: "aesth", tagKey: "nonsurgical",
      link: "/aesthetics",
      img: "./assets/images/ai/services/aesthetics/aesthetics-APPROVED.webp",
      imgAlt: "Serene medical-aesthetics facial treatment",
    },
  ];

  // The bespoke concierge journey — a rich, staged luxury experience (6 stages)
  const journey = [
    { icon: icons.plane, key: "j1", link: "/airport" },
    { icon: icons.user, key: "j2", link: "/concierge" },
    { icon: icons.hotel, key: "j3", link: "/hotel" },
    { icon: icons.mapPin, key: "j4", link: "/transfers" },
    { icon: icons.translate, key: "j5", link: "/interpreter" },
    { icon: icons.shield, key: "j6", link: "/privacy" },
  ];

  return `
    <section class="section-services">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">${t("services.sub")}</span>
          <h2 class="section-title">${t("services.title")}</h2>
          <p class="section-description">${t("services.desc")}</p>
        </div>

        <!-- Services 3D infinite carousel — active card stays centred, images orbit -->
        <div class="services-carousel" id="services-carousel">
          <div class="carousel-stage" id="carousel-stage">
            ${specs.map((s) => `
              <a
                href="${s.link || '/services'}"
                data-route
                class="service-card-luxury carousel-card service-card-clickable"
                aria-label="${t('sv.' + s.key)}"
              >
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
                    <span class="link-luxury">
                      <span>${t("services.explore")}</span>
                      <span class="arrow">→</span>
                    </span>
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>

        <!-- All-Inclusive Concierge Package — the full bespoke journey -->
        <div class="concierge-banner-luxury">
          <div class="concierge-heading">
            <span class="banner-badge">${t("services.banner")}</span>
            <h3 class="banner-title">${t("services.bannerTitle")}</h3>
            <p class="banner-sub">${t("services.bannerSub")}</p>
          </div>

          <div class="concierge-journey">
            ${journey.map((s, idx) => `
              <a
                href="${s.link || '#'}"
                data-route
                class="journey-step"
                ${s.link ? '' : 'aria-disabled="true"'}
              >
                <div class="journey-marker">
                  <span class="journey-icon">${s.icon}</span>
                  <span class="journey-index">${String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h4 class="journey-title">${t("services." + s.key)}</h4>
                <p class="journey-desc">${t("services." + s.key + "d")}</p>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
