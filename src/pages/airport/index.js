// Airport VIP Reception page
import { icons } from "../../components/icons";
import { t } from "../../i18n";

export default function airportPage() {
  return `
    <div class="page-hotel">

      <!-- Hero: VIP airport icon + "AIRPORT" label over the main reception photo -->
      <section class="hotel-hero">
        <img
          src="./assets/images/partner-services/airport/airport-hero.webp"
          alt="VIP airport reception"
          class="hotel-hero-bg"
        />
        <div class="hotel-hero-scrim"></div>
        <div class="container hotel-hero-content">
          <span class="hotel-hero-icon">${icons.plane}</span>
          <span class="hotel-hero-label">${t("airport.label")}</span>
          <h1 class="hotel-hero-title">${t("airport.title")}</h1>
          <p class="hotel-hero-sub">${t("airport.sub")}</p>
        </div>
      </section>

      <!-- Intro -->
      <section class="section-hotel-intro">
        <div class="container hotel-intro-grid">
          <div class="hotel-intro-text">
            <span class="section-subtitle">${t("airport.introLbl")}</span>
            <h2 class="section-title">${t("airport.introTitle")}</h2>
            <p class="section-description">${t("airport.intro")}</p>
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
          <div class="hotel-intro-img">
            <img src="./assets/images/partner-services/airport/airport-car.webp" alt="Private chauffeur" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- What's included -->
      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("airport.inclLbl")}</span>
            <h2 class="section-title text-inverse">${t("airport.inclTitle")}</h2>
          </div>
          <div class="hotel-amenities-grid">
            ${["1","2","3","4","5","6"].map((a) => `
              <div class="amenity-card">
                <span class="amenity-icon">${icons.check}</span>
                <h4 class="amenity-title">${t("airport.a" + a)}</h4>
                <p class="amenity-desc">${t("airport.a" + a + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
