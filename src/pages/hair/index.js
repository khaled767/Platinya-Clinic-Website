// Hair Transplant & Restoration Page
// Namespaced hair- hero (clinic photo we approved as the hero) + alternating
// treatment-area rows in gold frames + a dedicated Techniques section (DHI / FUE).
import { icons } from "../../components/icons";
import { t } from "../../i18n";

const areas = [
  { key: "scalp",  num: "01", img: "./assets/images/ai/services/hair/hairline-approved.webp", alt: "Hairline restoration map" },
  { key: "beard",  num: "02", img: "./assets/images/ai/services/hair/beard-approved.webp",     alt: "Beard transplant map" },
  { key: "must",   num: "03", img: "./assets/images/ai/services/hair/mustache-approved.webp",   alt: "Mustache transplant map" },
  { key: "brows",  num: "04", img: "./assets/images/ai/services/hair/brows-approved.webp",      alt: "Eyebrow transplant map" },
  { key: "lashes", num: "05", img: "./assets/images/ai/services/hair/lashes-approved.webp",     alt: "Eyelash transplant map" },
];

const techniques = [
  { key: "dhi", tag: "Suitable for women too" },
  { key: "fue", tag: "Sapphire precision" },
];

export default function hairPage() {
  return `
    <div class="page-hair">

      <!-- Hair hero (namespaced) -->
      <section class="hair-hero">
        <img
          class="hair-hero-bg"
          src="./assets/images/ai/services/hair/hero.webp"
          alt="Luxury hair-restoration clinic"
        />
        <div class="hair-hero-scrim"></div>
        <div class="container hair-hero-content">
          <span class="hair-hero-icon">${icons.hair}</span>
          <span class="hair-hero-label">${t("hair.label")}</span>
          <h1 class="hair-hero-title">${t("hair.title")}</h1>
          <p class="hair-hero-sub">${t("hair.sub")}</p>
          <a href="/contact" data-route class="btn-luxury-gold hair-hero-cta"><span>${t("cta.vip")}</span></a>
        </div>
      </section>

      <!-- Intro -->
      <section class="hair-intro">
        <div class="container">
          <div class="section-header text-center">
            <h2 class="section-title">${t("hair.introT")}</h2>
            <p class="section-description">${t("hair.introS")}</p>
          </div>
        </div>
      </section>

      <!-- Alternate area rows -->
      <section class="hair-areas">
        <div class="container">
          ${areas.map((s, i) => {
            const flipped = i % 2 === 1;
            return `
              <article class="hair-row ${flipped ? "is-flipped" : ""}">
                <figure class="hair-row-media">
                  <img src="${s.img}" alt="${s.alt}" loading="lazy" />
                </figure>
                <div class="hair-row-body">
                  <div class="hair-row-meta">
                    <span class="hair-row-num">${s.num}</span>
                    <span class="hair-row-tag">${t("hair.g." + s.key + "c")}</span>
                  </div>
                  <h3 class="hair-row-title">${t("hair.g." + s.key)}</h3>
                  <ul class="hair-row-list">
                    ${[1, 2, 3].map((n) => `<li>${t("hair.f." + s.key + n)}</li>`).join("")}
                  </ul>
                  <a href="/contact" data-route class="hair-row-link">${t("hair.plan")}<span class="hair-row-arrow"></span></a>
                </div>
              </article>
            `;
          }).join("")}

          <!-- Techniques -->
          <div class="hair-tech">
            <div class="section-header text-center hair-tech-head">
              <h2 class="section-title">${t("hair.techTitle")}</h2>
              <p class="section-description">${t("hair.techSub")}</p>
            </div>

            <figure class="hair-tech-visual">
              <img src="./assets/images/ai/services/hair/techniques-compare.webp" alt="${t("hair.techTitle")}" loading="lazy" />
            </figure>

            <div class="hair-tech-grid">
              ${techniques.map((x) => `
                <article class="hair-tech-card">
                  <div class="hair-tech-body">
                    <h3 class="hair-tech-name">${t("hair." + x.key + ".n")}</h3>
                    <p class="hair-tech-desc">${t("hair." + x.key + ".d")}</p>
                    <span class="hair-tech-why">${icons.check} ${t("hair." + x.key + ".w")}</span>
                  </div>
                </article>
              `).join("")}
            </div>
          </div>

          <div class="hair-cta">
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
        </div>
      </section>
    </div>
  `;
}
