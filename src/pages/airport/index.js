// Airport VIP Reception page
import { icons } from "../../components/icons";
import { t } from "../../i18n";
import faqSection from "../../components/faq";

// The arrival sequence, in the order the patient lives it.
const STEPS = [
  { icon: icons.email, key: "s1" },
  { icon: icons.user, key: "s2" },
  { icon: icons.phone, key: "s3" },
  { icon: icons.hotel, key: "s4" },
];

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

      <!-- How the arrival actually runs, step by step -->
      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("airport.howLbl")}</span>
            <h2 class="section-title text-inverse">${t("airport.howTitle")}</h2>
            <p class="section-description text-inverse">${t("airport.howDesc")}</p>
          </div>
          <div class="steps-grid">
            ${STEPS.map((s, i) => `
              <div class="amenity-card">
                <span class="amenity-icon">${s.icon}</span>
                <span class="journey-index-line">${String(i + 1).padStart(2, "0")}</span>
                <h4 class="amenity-title">${t("airport." + s.key)}</h4>
                <p class="amenity-desc">${t("airport." + s.key + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      ${faqSection("airport")}

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

      <!-- Closing CTA -->
      <section class="section-hotel-intro">
        <div class="container text-center">
          <p class="section-description">${t("airport.sub")}</p>
          <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
        </div>
      </section>
    </div>
  `;
}
