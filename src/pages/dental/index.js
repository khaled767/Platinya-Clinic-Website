// Dental Page — cosmetic & implant dentistry (single-page hero + alternating luxury rows)
import { icons } from "../../components/icons";
import { t } from "../../i18n";

// Gold index number + tag per specialty (luxury approved style, 27 Aug)
const specialties = [
  { key: "smile",   num: "01", img: "./assets/images/ai/services/dental/smile.png",    tagKey: "smile",   alt: "Hollywood smile result" },
  { key: "veneer",  num: "02", img: "./assets/images/ai/services/dental/emax.png",      tagKey: "cosmetic", alt: "Emax veneers on a dental model" },
  { key: "zircon",  num: "03", img: "./assets/images/ai/services/dental/zirconium.png", tagKey: "crowns",   alt: "Zirconium crowns on a tray" },
  { key: "implant", num: "04", img: "./assets/images/ai/services/dental/implants.png",  tagKey: "implant",  alt: "Dental implants" },
  { key: "tibar",   num: "05", img: "./assets/images/ai/services/dental/titanium.png",  tagKey: "arch",     alt: "Titanium bar framework" },
];

export default function dentalPage() {
  return `
    <div class="page-dental">

      <!-- Hero: full-width luxury clinic banner (approved hotel-style template) -->
      <section class="hotel-hero">
        <div class="hotel-hero-scrim" style="background: linear-gradient(to top, rgba(20, 15, 40, 0.85) 0%, rgba(30, 18, 51, 0.5) 55%, rgba(30, 18, 51, 0.25) 100%);"></div>
        <div class="container hotel-hero-content">
          <span class="hotel-hero-icon">${icons.teeth}</span>
          <span class="hotel-hero-label">${t("dental.label")}</span>
          <h1 class="hotel-hero-title">${t("dental.title")}</h1>
          <p class="hotel-hero-sub">${t("dental.sub")}</p>
        </div>
      </section>

      <!-- Intro -->
      <section class="section-hotel-intro">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle">${t("dental.introLbl")}</span>
            <h2 class="section-title">${t("dental.introTitle")}</h2>
            <p class="section-description">${t("dental.intro")}</p>
          </div>
        </div>
      </section>

      <!-- Alternating luxury rows: image on one side + 4–5 line explanation on the other -->
      <section class="section-dental-specialists">
        <div class="container">
          ${specialties.map((s, i) => {
            const flip = i % 2 === 1; // alternate sides for a non-monotonous reading flow
            return `
              <article class="dental-row ${flip ? "is-flipped" : ""}">
                <figure class="dental-row-media">
                  <img src="${s.img}" alt="${s.alt}" loading="lazy" />
                </figure>
                <div class="dental-row-body">
                  <div class="dental-card-meta">
                    <span class="dental-card-num">${s.num}</span>
                    <span class="dental-card-tag">${t("dental.tag." + s.tagKey)}</span>
                  </div>
                  <h3 class="dental-card-title">${t("dental.s." + s.key)}</h3>
                  <p class="dental-card-desc">${t("dental.s." + s.key + "d")}</p>
                  <a href="/contact" data-route class="dental-card-link">
                    ${t("cta.vip")}<span class="dental-card-arrow"></span>
                  </a>
                </div>
              </article>
            `;
          }).join('')}

          <div class="dental-cta">
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
        </div>
      </section>
    </div>
  `;
}
