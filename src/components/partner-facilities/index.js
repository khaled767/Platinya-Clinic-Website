// Partner Facilities (contracted hospitals & clinics)
// Displays each partner's logo + a facility photo for credibility.
// Written descriptions describe the facility type (not used to hide — logos are shown).

export default function partnerFacilities() {
  const partners = [
    {
      logo: "./assets/images/partner-clinics/bm-logo.png",
      logoAlt: "Partner clinic logo",
      img: "./assets/images/partner-clinics/bm-treatment-web.jpg",
      imgAlt: "Advanced dental treatment suite",
      module: "Dental Excellence",
      caption: "A leading specialist in advanced aesthetic and implant dentistry.",
    },
    {
      logo: "./assets/images/partner-clinics/efc-logo.png",
      logoAlt: "Partner clinic logo",
      img: "./assets/images/partner-clinics/efc-building-web.jpg",
      imgAlt: "Modern surgical medical centre building",
      module: "Surgical & Medical Centre",
      caption: "A contemporary multi-specialty surgical centre with full hospital-grade care.",
    },
    {
      logo: "./assets/images/partner-clinics/hlc-logo.png",
      logoAlt: "Partner clinic logo",
      img: "./assets/images/partner-clinics/hlc-waiting-web.jpg",
      imgAlt: "Modern dental clinic waiting lounge",
      module: "Oral & Aesthetic Care",
      caption: "A modern oral-health clinic renowned for patient comfort and precision.",
    },
  ];

  return `
    <section class="section-partner-facilities">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle text-gold">The Facilities Behind The Journey</span>
          <h2 class="section-title text-inverse">Our Partner Hospitals & Clinics</h2>
          <p class="section-description text-muted">
            We partner exclusively with leading private hospitals and specialist clinics in Istanbul. Each collaboration is selected for clinical excellence, modern facilities, discretion, and patient comfort.
          </p>
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
                <span class="partner-module">${p.module}</span>
                <p class="partner-caption">${p.caption}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
