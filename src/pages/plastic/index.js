// Plastic & Aesthetic Surgery Page
// Namespaced plastic- hero + two grouped listings (Facial / Body), each item
// an alternating row wrapped in a gold frame, then a CTA.
import { icons } from "../../components/icons";
import { t } from "../../i18n";

const face = [
  { key: "facelift",   num: "01", img: "facelift.webp" },
  { key: "neck",       num: "02", img: "necklift.webp" },
  { key: "blepharo",   num: "03", img: "blepharo.webp" },
  { key: "brow",       num: "04", img: "browlift.webp" },
  { key: "rhino",      num: "05", img: "rhinoplasty.webp" },
  { key: "forehead",   num: "06", img: "forehead.webp" },
  { key: "buccal",     num: "07", img: "buccal.webp" },
];

const body = [
  { key: "vaser",      num: "01", img: "vaser360.webp" },
  { key: "arms",       num: "02", img: "arms.webp" },
  { key: "thighs",     num: "03", img: "thighs.webp" },
  { key: "tummylift",  num: "04", img: "tummy.webp" },
  { key: "breastimp",  num: "05", img: "breast-implant.webp" },
  { key: "breastlift", num: "06", img: "breast-lift.webp" },
];

const BASE = "./assets/images/ai/services/plastic/";

function rows(list) {
  return list.map((s, i) => {
    const flipped = i % 2 === 1;
    return `
      <article class="plastic-row ${flipped ? "is-flipped" : ""}">
        <figure class="plastic-row-media">
          <img src="${BASE}${s.img}" alt="${t("plastic.g." + s.key)}" loading="lazy" />
        </figure>
        <div class="plastic-row-body">
          <div class="plastic-row-meta">
            <span class="plastic-row-num">${s.num}</span>
            <span class="plastic-row-tag">${t("plastic.g." + s.key + "c")}</span>
          </div>
          <h3 class="plastic-row-title">${t("plastic.g." + s.key)}</h3>
          <ul class="plastic-row-list">
            ${[1, 2, 3].map((n) => `<li>${t("plastic.f." + s.key + n)}</li>`).join("")}
          </ul>
          <a href="/contact" data-route class="plastic-row-link">${t("plastic.plan")}<span class="plastic-row-arrow"></span></a>
        </div>
      </article>
    `;
  }).join("");
}

export default function plasticPage() {
  return `
    <div class="page-plastic">

      <!-- Hero -->
      <section class="plastic-hero">
        <img class="plastic-hero-bg" src="./assets/images/ai/services/plastic/hero.webp" alt="${t("plastic.title")}" />
        <div class="plastic-hero-scrim"></div>
        <div class="container plastic-hero-content">
          <span class="plastic-hero-icon">${icons.stethoscope}</span>
          <span class="plastic-hero-label">${t("plastic.label")}</span>
          <h1 class="plastic-hero-title">${t("plastic.title")}</h1>
          <p class="plastic-hero-sub">${t("plastic.sub")}</p>
          <a href="/contact" data-route class="btn-luxury-gold plastic-hero-cta"><span>${t("cta.vip")}</span></a>
        </div>
      </section>

      <!-- Intro -->
      <section class="plastic-intro">
        <div class="container">
          <div class="section-header text-center">
            <h2 class="section-title">${t("plastic.introT")}</h2>
            <p class="section-description">${t("plastic.introS")}</p>
          </div>
        </div>
      </section>

      <!-- Groups -->
      <section class="plastic-areas">
        <div class="container">

          <div class="plastic-group-head">
            <span class="plastic-group-kicker">01</span>
            <h2 class="plastic-group-title">${t("plastic.faceGroup")}</h2>
          </div>
          ${rows(face)}

          <div class="plastic-group-head plastic-group-head--spaced">
            <span class="plastic-group-kicker">02</span>
            <h2 class="plastic-group-title">${t("plastic.bodyGroup")}</h2>
          </div>
          ${rows(body)}

          <div class="plastic-cta">
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
        </div>
      </section>
    </div>
  `;
}
