// Dental Page — Aesthetic Dentistry / Dental Veneers (Hollywood Smile)
// Layout: fashion-forward hero (hotel-style) + luxury service cards for the sub-specialties.
// NOTE: Images currently point to the existing approved dental asset until the
// sub-specialty images are generated (user declined auto-generation).
import { icons } from "../../components/icons";
import { t } from "../../i18n";

// Approved existing dental image used as placeholders until per-sub images are generated.
const PLACEHOLDER_IMG = "./assets/images/ai/services/dental-APPROVED-nolamp.webp";

// The five dental sub-specialties, each rendered as a luxury service card.
const subs = [
  {
    id: "hollywood",
    number: "01",
    tagKey: "smile",
    key: "sub1",
    img: PLACEHOLDER_IMG,
    imgAlt: "Hollywood smile veneers close-up",
  },
  {
    id: "emax",
    number: "02",
    tagKey: "cosmetic",
    key: "sub2",
    img: PLACEHOLDER_IMG,
    imgAlt: "Thin translucent E-max veneers being placed",
  },
  {
    id: "zirconium",
    number: "03",
    tagKey: "crowns",
    key: "sub3",
    img: PLACEHOLDER_IMG,
    imgAlt: "Polished zirconium dental crowns",
  },
  {
    id: "implants",
    number: "04",
    tagKey: "implant",
    key: "sub4",
    img: PLACEHOLDER_IMG,
    imgAlt: "Modern dental implant procedure in progress",
  },
  {
    id: "titanium",
    number: "05",
    tagKey: "arch",
    key: "sub5",
    img: PLACEHOLDER_IMG,
    imgAlt: "Full-arch fixed bridge on a titanium bar",
  },
];

export default function dentalPage() {
  return `
    <div class="page-dental">

      <!-- Hero banner (hotel-style) -->
      <section class="dental-hero">
        <img
          src="./assets/images/ai/services/dental-APPROVED-nolamp.webp"
          alt="Aesthetic dentistry clinic"
          class="dental-hero-bg"
        />
        <div class="dental-hero-scrim"></div>
        <div class="container dental-hero-content">
          <span class="dental-hero-icon">${icons.stethoscope}</span>
          <span class="dental-hero-label">DENTAL</span>
          <h1 class="dental-hero-title">${t("dental.title")}</h1>
          <p class="dental-hero-sub">${t("dental.sub")}</p>
        </div>
      </section>

      <!-- Intro -->
      <section class="section-dental-intro">
        <div class="container dental-intro-grid">
          <div class="dental-intro-text">
            <span class="section-subtitle">${t("dental.introLbl")}</span>
            <h2 class="section-title">${t("dental.introTitle")}</h2>
            <p class="section-description">${t("dental.intro")}</p>
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
          <div class="dental-intro-img">
            <img src="./assets/images/ai/services/dental-APPROVED-nolamp.webp" alt="Hollywood smile model" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- Sub-specialties: luxury service cards -->
      <section class="section-dental-subs">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle">${t("dental.subsLbl")}</span>
            <h2 class="section-title">${t("dental.subsTitle")}</h2>
          </div>
          <div class="services-grid">
            ${subs.map((s) => `
              <article class="service-card-luxury">
                <div class="service-card-media">
                  <img src="${s.img}" alt="${s.imgAlt}" class="service-card-img" loading="lazy" />
                </div>
                <div class="service-card-body">
                  <div class="card-header-meta">
                    <span class="service-number">${s.number}</span>
                    <span class="service-tag">${t("dental.tag." + s.tagKey)}</span>
                  </div>
                  <h3 class="service-title">${t("dental." + s.key + "Title")}</h3>
                  <p class="service-description">${t("dental." + s.key + "Desc")}</p>
                  <div class="card-footer-action">
                    <a href="/contact" data-route class="link-luxury">
                      <span>${t("services.explore")}</span>
                      <span class="arrow">→</span>
                    </a>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section-dental-cta bg-dark-obsidian">
        <div class="container text-center dental-cta-content">
          <h2 class="section-title text-inverse">${t("dental.ctaTitle")}</h2>
          <p class="dental-cta-sub">${t("dental.ctaSub")}</p>
          <a href="/contact" data-route class="btn-luxury-gold"><span>${t("dental.ctaBtn")}</span></a>
        </div>
      </section>
    </div>
  `;
}

