// Dental Page — Aesthetic Dentistry
// Layout (approved): luxury concierge-style hero + alternating horizontal rows,
// each row = image on one side + 3–4 line explainer on the other, gold frame.
import { icons } from "../../components/icons";
import { t } from "../../i18n";

const treatments = [
  { key: "smile",   num: "01", tagKey: "smile",   img: "./assets/images/ai/services/dental/smile.png",    alt: "Hollywood Smile result" },
  { key: "veneer",  num: "02", tagKey: "cosmetic", img: "./assets/images/ai/services/dental/emax.png",     alt: "E-Max veneers on a dental model" },
  { key: "zircon",  num: "03", tagKey: "crowns",   img: "./assets/images/ai/services/dental/zirconium.png", alt: "Zirconia crowns on a tray" },
  { key: "implant", num: "04", tagKey: "implant",  img: "./assets/images/ai/services/dental/implants.png",  alt: "Dental implants" },
  { key: "tibar",   num: "05", tagKey: "arch",     img: "./assets/images/ai/services/dental/titanium.png",  alt: "Titanium bar full-arch framework" },
];

export default function dentalPage() {
  return `
    <div class="page-dental">

      <!-- Hero — concierge-banner / hotel style, full width luxury clinic -->
      <section class="hotel-hero">
        <div class="hotel-hero-scrim" style="background: linear-gradient(to top, rgba(20, 15, 40, 0.85) 0%, rgba(30, 18, 51, 0.55) 55%, rgba(30, 18, 51, 0.3) 100%);"></div>
        <div class="container hotel-hero-content">
          <span class="hotel-hero-icon">${icons.teeth}</span>
          <span class="hotel-hero-label">${t("dental.label")}</span>
          <h1 class="hotel-hero-title">${t("dental.title")}</h1>
          <p class="hotel-hero-sub">${t("dental.sub")}</p>
          <a href="/contact" data-route class="btn-luxury-gold hotel-hero-cta"><span>${t("cta.vip")}</span></a>
        </div>
      </section>

      <!-- Intro -->
      <section class="section-hotel-intro section-dental-intro">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle">${t("dental.introLbl")}</span>
            <h2 class="section-title">${t("dental.introTitle")}</h2>
            <p class="section-description">${t("dental.intro")}</p>
          </div>
        </div>
      </section>

      <!-- Alternating rows: image ⇄ 3–4 line text, inside a gold frame -->
      <section class="section-dental-treatments">
        <div class="container">
          ${treatments.map((s, i) => {
            const flipped = i % 2 === 1;
            return `
              <article class="dental-treatment ${flipped ? "is-flipped" : ""}">
                <figure class="dental-treatment-media">
                  <img src="${s.img}" alt="${s.alt}" loading="lazy" />
                </figure>
                <div class="dental-treatment-body">
                  <div class="dental-card-meta">
                    <span class="dental-card-num">${s.num}</span>
                    <span class="dental-card-tag">${t("dental.tag." + s.tagKey)}</span>
                  </div>
                  <h3 class="dental-treatment-title">${t("dental.s." + s.key)}</h3>
                  <p class="dental-treatment-text">${t("dental.s." + s.key + "d")}</p>
                  <ul class="dental-treatment-list">
                    ${[1,2,3].map((n) => `<li>${t("dental.s." + s.key + ".f" + n)}</li>`).join('')}
                  </ul>
                  <a href="/contact" data-route class="dental-card-link">${t("dental.cta")}<span class="dental-card-arrow"></span></a>
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
