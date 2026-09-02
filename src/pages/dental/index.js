// Dental Page — Aesthetic Dentistry
// Namespaced dental hero (not hotel) + alternating rows framed in gold each
// holding an image on one side and a 3-point explainer on the other.
import { icons } from "../../components/icons";
import { t } from "../../i18n";

const treatments = [
  { key: "smile",   num: "01", tagKey: "smile",   img: "./assets/images/ai/services/dental/smile.webp",    alt: "Hollywood Smile result" },
  { key: "veneer",  num: "02", tagKey: "cosmetic", img: "./assets/images/ai/services/dental/emax.webp",     alt: "E-Max veneers on a dental model" },
  { key: "zircon",  num: "03", tagKey: "crowns",   img: "./assets/images/ai/services/dental/zirconium.webp", alt: "Zirconia crowns on a tray" },
  { key: "implant", num: "04", tagKey: "implant",  img: "./assets/images/ai/services/dental/implants.webp",  alt: "Dental implants" },
  { key: "tibar",   num: "05", tagKey: "arch",     img: "./assets/images/ai/services/dental/titanium.webp",  alt: "Titanium bar full-arch framework" },
];

export default function dentalPage() {
  return `
    <div class="page-dental">

      <!-- Dental hero (namespace specific to Aesthetic Dentistry) -->
      <section class="dental-hero">
        <img
          class="dental-hero-bg"
          src="./assets/images/ai/services/dental/hero.webp"
          alt="Modern Aesthetic Dentistry treatment room"
        />
        <div class="dental-hero-scrim"></div>
        <div class="container dental-hero-content">
          <span class="dental-hero-icon">${icons.teeth}</span>
          <span class="dental-hero-label">${t("dental.label")}</span>
          <h1 class="dental-hero-title">${t("dental.title")}</h1>
          <p class="dental-hero-sub">${t("dental.sub")}</p>
          <a href="/contact" data-route class="btn-luxury-gold dental-hero-cta"><span>${t("cta.vip")}</span></a>
        </div>
      </section>

      <!-- Intro -->
      <section class="dental-intro">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle">${t("dental.introLbl")}</span>
            <h2 class="section-title">${t("dental.introTitle")}</h2>
            <p class="section-description">${t("dental.intro")}</p>
          </div>
        </div>
      </section>

      <!-- Alternating treatment rows -->
      <section class="dental-treatments">
        <div class="container">
          ${treatments.map((s, i) => {
            const flipped = i % 2 === 1;
            return `
              <article class="dental-row ${flipped ? "is-flipped" : ""}">
                <figure class="dental-row-media">
                  <img src="${s.img}" alt="${s.alt}" loading="lazy" />
                </figure>
                <div class="dental-row-body">
                  <div class="dental-row-meta">
                    <span class="dental-row-num">${s.num}</span>
                    <span class="dental-row-tag">${t("dental.tag." + s.tagKey)}</span>
                  </div>
                  <h3 class="dental-row-title">${t("dental.s." + s.key)}</h3>
                  <ul class="dental-row-list">
                    ${[1,2,3].map((n) => `<li>${t("dental.s." + s.key + ".f" + n)}</li>`).join('')}
                  </ul>
                  <a href="/contact" data-route class="dental-row-link">${t("dental.cta")}<span class="dental-row-arrow"></span></a>
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
