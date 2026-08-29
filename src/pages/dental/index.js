// Dental Page — cosmetic & implant dentistry specialties
import { icons } from "../../components/icons";
import { t } from "../../i18n";

const specialties = [
  { key: "smile",  img: "./assets/images/partner-services/dental/dental-smile.webp",  alt: "Hollywood smile result" },
  { key: "veneer", img: "./assets/images/partner-services/dental/dental-veneer.webp", alt: "Emax veneers on a dental model" },
  { key: "zircon", img: "./assets/images/partner-services/dental/dental-zirconium.webp", alt: "Zirconium crowns on a tray" },
  { key: "implant", img: "./assets/images/partner-services/dental/dental-implant.webp", alt: "Dental implants" },
  { key: "tibar",  img: "./assets/images/partner-services/dental/dental-tibar.webp",  alt: "Titanium bar framework" },
];

export default function dentalPage() {
  return `
    <div class="page-dental">

      <!-- Hero: teeth icon + DENTAL label over a bright clinical banner -->
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

      <!-- Specialities grid (light background = site base, seamless navigation) -->
      <section class="section-dental-specialists">
        <div class="container">
          <div class="dental-grid">
            ${specialties.map((s) => `
              <article class="dental-card">
                <figure class="dental-card-media">
                  <img src="${s.img}" alt="${s.alt}" loading="lazy" />
                </figure>
                <div class="dental-card-body">
                  <h3 class="dental-card-title">${t("dental.s." + s.key)}</h3>
                  <p class="dental-card-desc">${t("dental.s." + s.key + "d")}</p>
                </div>
              </article>
            `).join('')}
          </div>

          <div class="dental-cta">
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
        </div>
      </section>
    </div>
  `;
}
