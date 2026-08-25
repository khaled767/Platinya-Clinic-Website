// Hotel Page — Luxury 5-Star Accommodation
import { icons } from "../../components/icons";
import { t } from "../../i18n";

// Hotel photo gallery (clearly-named copies of the client's WhatsApp images)
const gallery = [
  { src: "./assets/images/partner-services/hotel/hotel-1.jpg", key: "g1" },
  { src: "./assets/images/partner-services/hotel/hotel-3.jpg", key: "g2" },
  { src: "./assets/images/partner-services/hotel/hotel-5.jpg", key: "g3" },
  { src: "./assets/images/partner-services/hotel/hotel-7.jpg", key: "g4" },
  { src: "./assets/images/partner-services/hotel/hotel-9.jpg", key: "g5" },
  { src: "./assets/images/partner-services/hotel/hotel-12.jpg", key: "g6" },
];

export default function hotelPage() {
  return `
    <div class="page-hotel">

      <!-- Hero banner: hotel-icon "HOTEL" label on top of the main hotel photo as
           its base background -->
      <section class="hotel-hero">
        <img
          src="./assets/images/partner-services/hotel/hotel-1.jpg"
          alt="Luxury hotel exterior"
          class="hotel-hero-bg"
        />
        <div class="hotel-hero-scrim"></div>
        <div class="container hotel-hero-content">
          <span class="hotel-hero-icon">${icons.hotel}</span>
          <span class="hotel-hero-label">HOTEL</span>
          <h1 class="hotel-hero-title">${t("hotel.title")}</h1>
          <p class="hotel-hero-sub">${t("hotel.sub")}</p>
        </div>
      </section>

      <!-- Intro -->
      <section class="section-hotel-intro">
        <div class="container hotel-intro-grid">
          <div class="hotel-intro-text">
            <span class="section-subtitle">${t("hotel.introLbl")}</span>
            <h2 class="section-title">${t("hotel.introTitle")}</h2>
            <p class="section-description">${t("hotel.intro")}</p>
            <a href="/contact" data-route class="btn-luxury-gold"><span>${t("cta.vip")}</span></a>
          </div>
          <div class="hotel-intro-img">
            <img src="./assets/images/partner-services/hotel/hotel-2.jpg" alt="Luxury suite" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- Amenities -->
      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("hotel.amenLbl")}</span>
            <h2 class="section-title text-inverse">${t("hotel.amenTitle")}</h2>
          </div>
          <div class="hotel-amenities-grid">
            ${["wifi", "pool", "spa", "room", "food", "view"].map((a) => `
              <div class="amenity-card">
                <span class="amenity-icon">${icons[a] || icons.hotel}</span>
                <h4 class="amenity-title">${t("hotel.a." + a)}</h4>
                <p class="amenity-desc">${t("hotel.a." + a + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section class="section-hotel-gallery">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle">${t("hotel.galLbl")}</span>
            <h2 class="section-title">${t("hotel.galTitle")}</h2>
          </div>
          <div class="hotel-gallery-grid">
            ${gallery.map((g) => `
              <figure class="hotel-photo">
                <img src="${g.src}" alt="${t("hotel.galTitle")}" loading="lazy" />
              </figure>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
