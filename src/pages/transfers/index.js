// Private VIP Transfers page
import { icons } from "../../components/icons";
import { t } from "../../i18n";

export default function transfersPage() {
  return `
    <div class="page-hotel">

      <section class="hotel-hero">
        <img
          src="./assets/images/partner-services/transfers/transfers-hero.webp"
          alt="Private VIP chauffeur"
          class="hotel-hero-bg"
        />
        <div class="hotel-hero-scrim"></div>
        <div class="container hotel-hero-content">
          <span class="hotel-hero-icon">${icons.mapPin}</span>
          <span class="hotel-hero-label">${t("transfers.label")}</span>
          <h1 class="hotel-hero-title">${t("transfers.title")}</h1>
          <p class="hotel-hero-sub">${t("transfers.sub")}</p>
        </div>
      </section>

      <section class="section-hotel-intro">
        <div class="container hotel-intro-grid">
          <div class="hotel-intro-text">
            <span class="section-subtitle">${t("transfers.introLbl")}</span>
            <h2 class="section-title">${t("transfers.introTitle")}</h2>
            <p class="section-description">${t("transfers.intro")}</p>
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
          <div class="hotel-intro-img">
            <img src="./assets/images/partner-services/transfers/transfers-route.webp" alt="Luxury transfer route over the Bosphorus" loading="lazy" />
          </div>
        </div>
      </section>

      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("transfers.servLbl")}</span>
            <h2 class="section-title text-inverse">${t("transfers.servTitle")}</h2>
          </div>
          <div class="hotel-amenities-grid">
            ${["1","2","3","4","5","6"].map((a) => `
              <div class="amenity-card">
                <span class="amenity-icon">${icons.check}</span>
                <h4 class="amenity-title">${t("transfers.a" + a)}</h4>
                <p class="amenity-desc">${t("transfers.a" + a + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
