// Services Page Module (High-Fidelity)
import { t } from "../../i18n";

const medias = {
  hair: "./assets/images/ai/services/hair-APPROVED.webp",
  dental: "./assets/images/ai/services/dental-APPROVED-nolamp.webp",
  plastic: "./assets/images/ai/services/plastic/plastic-APPROVED.webp",
  bariatric: "./assets/images/ai/services/bariatric/bariatric-APPROVED.webp",
  aesthetics: "./assets/images/ai/services/aesthetics/aesthetics-APPROVED.webp",
};

export default function servicesPage() {
  const services = [
    {
      id: "hair-transplant", num: "01", tag: "Hair Restoration",
      titleKey: "sd.hair.title", descKey: "sd.hair.desc",
      img: medias.hair, alt: "Hair transplantation in progress",
      badgeKey: "sd.life", ctaKey: "sd.hair.cta",
      feats: ["sd.life", "sv.hair.needlefree", "sd.hair.f3"],
    },
    {
      id: "dental", num: "02", tag: "Aesthetic Dentistry",
      titleKey: "sd.dental.title", descKey: "sd.dental.desc",
      img: medias.dental, alt: "Comfortable dental check-up",
      badgeKey: "sd.dental.badge", ctaKey: "sd.dental.cta",
      feats: ["sd.dental.f1", "sd.dental.f2", "sv.dental.f3"],
    },
    {
      id: "plastic-surgery", num: "03", tag: "Cosmetic & Reconstructive",
      titleKey: "sd.plastic.title", descKey: "sd.plastic.desc",
      img: medias.plastic, alt: "Plastic surgery consultation",
      badgeKey: "sd.plastic.badge", ctaKey: "sd.plastic.cta",
      feats: ["sd.plastic.f1", "sd.plastic.f2", "sv.plastic.f3"],
    },
    {
      id: "bariatric", num: "04", tag: "Metabolic Health",
      titleKey: "sd.bariatric.title", descKey: "sd.bariatric.desc",
      img: medias.bariatric, alt: "Healthy lifestyle after bariatric treatment",
      badgeKey: "sd.bariatric.badge", ctaKey: "sd.bariatric.cta",
      feats: ["sd.bariatric.f1", "sd.bariatric.f2", "sv.bariatric.f3"],
    },
    {
      id: "aesthetics", num: "05", tag: "Aesthetic Medicine",
      titleKey: "sd.aesth.title", descKey: "sd.aesth.desc",
      img: medias.aesthetics, alt: "Serene medical-aesthetics facial treatment",
      badgeKey: "sd.aesth.badge", ctaKey: "sd.aesth.cta",
      feats: ["sd.aesth.f1", "sv.aesth.f2", "sv.aesth.f3"],
    },
  ];

  return `
    <div class="page-services">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">${t("sedit.badge")}</span>
          <h1 class="page-title text-inverse">${t("sedit.sub")}</h1>
          <p class="page-description text-muted">${t("sedit.desc")}</p>
        </div>
      </section>

      <section class="section-services-catalog">
        <div class="container">
          ${services.map((s) => `
            <article class="service-detail-card card-luxury" id="${s.id}">
              <div class="detail-grid">
                <div class="detail-info">
                  <span class="detail-tag">${s.num} • ${t("sd.tag." + s.tag.replace(/ /g, ""))}</span>
                  <h2 class="detail-title">${t(s.titleKey)}</h2>
                  <p class="detail-text">${t(s.descKey)}</p>
                  <ul class="detail-features">
                    ${s.feats.map((f) => `<li>✓ ${t(f)}</li>`).join("")}
                  </ul>
                  <a href="/contact" data-route class="btn-luxury-gold"><span>${t(s.ctaKey)}</span></a>
                </div>
                <div class="detail-media">
                  <div class="media-box-luxury">
                    <img src="${s.img}" alt="${s.alt}" class="detail-img" loading="lazy" />
                    <span class="media-badge">${t(s.badgeKey)}</span>
                  </div>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}
