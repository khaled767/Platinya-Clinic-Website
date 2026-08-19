// Partner Facilities Section (collaborating hospitals & clinics)
import { t } from "../../i18n";

export default function partnerFacilities() {
  const partners = [
    {
      logo: "./assets/images/partner-clinics/bm-logo.png",
      logoAlt: "Partner clinic logo",
      img: "./assets/images/partner-clinics/bm-treatment-web.jpg",
      imgAlt: "Advanced dental treatment suite",
      module: "Dental Excellence",
      capKey: "pf.f1.d",
    },
    {
      logo: "./assets/images/partner-clinics/efc-logo.png",
      logoAlt: "Partner clinic logo",
      img: "./assets/images/partner-clinics/efc-building-web.jpg",
      imgAlt: "Modern surgical medical centre building",
      module: "Surgical & Medical Centre",
      capKey: "pf.f2.d",
    },
    {
      logo: "./assets/images/partner-clinics/hlc-logo.png",
      logoAlt: "Partner clinic logo",
      img: "./assets/images/partner-clinics/hlc-waiting-web.jpg",
      imgAlt: "Modern dental clinic waiting lounge",
      module: "Oral & Aesthetic Care",
      capKey: "pf.f3.d",
    },
  ];

  return `
    <section class="section-partner-facilities">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle text-gold">${t("partner.sub")}</span>
          <h2 class="section-title text-inverse">${t("partner.title")}</h2>
          <p class="section-description text-muted">${t("partner.desc")}</p>
        </div>

        <div class="partner-grid">
          ${partners.map((p) => `
            <article class="partner-card">
              <div class="partner-media">
                <img src="${p.img}" alt="${p.imgAlt}" class="partner-img" loading="lazy" />
              </div>
              <div class="partner-body">
                <div class="partner-logo-wrap">
                  <img src="${p.logo}" alt="${p.logoAlt}" class="partner-logo" loading="lazy" />
                </div>
                <span class="partner-module">${t("pf.module." + partners.indexOf(p) + 1)}</span>
                <p class="partner-caption">${t(p.capKey)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
