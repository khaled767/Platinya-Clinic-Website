// Hotel Page — Luxury 5-Star Accommodation
import { icons } from "../../components/icons";
import { t } from "../../i18n";
import faqSection from "../../components/faq";

// How the stay is arranged, in the order the patient lives it.
const STEPS = [
  { icon: icons.mapPin, key: "s1" },
  { icon: icons.hotel, key: "s2" },
  { icon: icons.room, key: "s3" },
  { icon: icons.phone, key: "s4" },
];

// Hotel photo gallery (clearly-named copies of the client's WhatsApp images)
const gallery = [
  { src: "./assets/images/partner-services/hotel/hotel-1.webp", key: "g1" },
  { src: "./assets/images/partner-services/hotel/hotel-3.webp", key: "g2" },
  { src: "./assets/images/partner-services/hotel/hotel-5.webp", key: "g3" },
  { src: "./assets/images/partner-services/hotel/hotel-7.webp", key: "g4" },
  { src: "./assets/images/partner-services/hotel/hotel-9.webp", key: "g5" },
  { src: "./assets/images/partner-services/hotel/hotel-12.webp", key: "g6" },
];

export default function hotelPage() {
  return `
    <div class="page-hotel">

      <!-- Hero banner: hotel-icon "HOTEL" label on top of the main hotel photo as
           its base background -->
      <section class="hotel-hero">
        <img
          src="./assets/images/partner-services/hotel/hotel-1.webp"
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
            <img src="./assets/images/partner-services/hotel/hotel-2.webp" alt="Luxury suite" loading="lazy" />
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

      <!-- How the stay is arranged, step by step -->
      <section class="section-hotel-amenities bg-dark-obsidian">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-subtitle text-gold">${t("hotel.howLbl")}</span>
            <h2 class="section-title text-inverse">${t("hotel.howTitle")}</h2>
            <p class="section-description text-inverse">${t("hotel.howDesc")}</p>
          </div>
          <div class="steps-grid">
            ${STEPS.map((s, i) => `
              <div class="amenity-card">
                <span class="amenity-icon">${s.icon}</span>
                <span class="journey-index-line">${String(i + 1).padStart(2, "0")}</span>
                <h4 class="amenity-title">${t("hotel." + s.key)}</h4>
                <p class="amenity-desc">${t("hotel." + s.key + "d")}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      ${faqSection("hotel")}

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
