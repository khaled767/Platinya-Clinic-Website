// Shared builder for the two Plastic & Reconstructive pages:
//   /plastic       → Facial Plastic & Reconstructive Surgery
//   /plastic-body  → Body Plastic & Reconstructive Surgery
// Both use the same alternated-row layout in a gold frame as the other
// service pages (hair / dental), namespaced under .plastic-*.
import { icons } from "../../components/icons";
import { t } from "../../i18n";

const BASE = "./assets/images/ai/services/plastic/";

// Facial procedures (8) — order set by the client:
//   1 Facelift · 2 Neck lift · 3 Eyelids · 4 Brow lift · 5 Rhinoplasty
//   6 Facial fat injection · 7 Forehead lift · 8 Buccal fat removal
// key matches pf.g.<key> / pf.g.<key>c / pf.f.<key>{1..3}
const FACE = [
  { key: "facelift", num: "01", img: "facelift.webp" },
  { key: "neck",     num: "02", img: "necklift.webp" },
  { key: "blepharo", num: "03", img: "blepharo.webp" },
  { key: "brow",     num: "04", img: "browlift.webp" },
  { key: "rhino",    num: "05", img: "rhinoplasty.webp" },
  { key: "fat",      num: "06", img: "fat-injection.webp" },
  { key: "forehead", num: "07", img: "forehead.webp" },
  { key: "buccal",   num: "08", img: "buccal.webp" },
];

// Body procedures (6) — key matches pb.g.<key> / pb.g.<key>c / pb.f.<key>{1..3}
const BODY = [
  { key: "vaser",      num: "01", img: "vaser360.webp" },
  { key: "arms",       num: "02", img: "arms.webp" },
  { key: "thighs",     num: "03", img: "thighs.webp" },
  { key: "tummylift",  num: "04", img: "tummy.webp" },
  { key: "bbl",        num: "05", img: "bbl.webp" },
  { key: "breastimp",  num: "06", img: "breast-implant.webp" },
  { key: "breastlift", num: "07", img: "breast-lift.webp" },
];

function row(list, i, prefix) {
  const s = list[i];
  const flipped = i % 2 === 1;
  return `
    <article class="plastic-row ${flipped ? "is-flipped" : ""}">
      <figure class="plastic-row-media">
        <img src="${BASE}${s.img}" alt="${t(prefix + ".g." + s.key)}" loading="lazy" />
      </figure>
      <div class="plastic-row-body">
        <div class="plastic-row-meta">
          <span class="plastic-row-num">${s.num}</span>
          <span class="plastic-row-tag">${t(prefix + ".g." + s.key + "c")}</span>
        </div>
        <h3 class="plastic-row-title">${t(prefix + ".g." + s.key)}</h3>
        <ul class="plastic-row-list">
          ${[1, 2, 3].map((n) => `<li>${t(prefix + ".f." + s.key + n)}</li>`).join("")}
        </ul>
        <a href="/contact" data-route class="plastic-row-link">${t(prefix + ".plan")}<span class="plastic-row-arrow"></span></a>
      </div>
    </article>
  `;
}

export function plasticGroupPage({ prefix, heroImg, icon }) {
  const list = prefix === "pf" ? FACE : BODY;
  const total = list.length + 1;
  return `
    <div class="page-plastic">
      <section class="plastic-hero">
        <img class="plastic-hero-bg" src="${BASE}${heroImg}" alt="${t(prefix + ".title")}" />
        <div class="plastic-hero-scrim"></div>
        <div class="container plastic-hero-content">
          <span class="plastic-hero-icon">${icon}</span>
          <span class="plastic-hero-label">${t(prefix + ".label")}</span>
          <h1 class="plastic-hero-title">${t(prefix + ".title")}</h1>
          <p class="plastic-hero-sub">${t(prefix + ".sub")}</p>
          <a href="/contact" data-route class="btn-luxury-gold plastic-hero-cta"><span>${t("cta.vip")}</span></a>
        </div>
      </section>

      <section class="plastic-intro">
        <div class="container">
          <div class="section-header text-center">
            <h2 class="section-title">${t(prefix + ".introT")}</h2>
            <p class="section-description">${t(prefix + ".introS")}</p>
          </div>
        </div>
      </section>

      <section class="plastic-areas">
        <div class="container">
          ${list.map((_, i) => row(list, i, prefix)).join("")}

          <div class="plastic-cta">
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export { FACE, BODY };
