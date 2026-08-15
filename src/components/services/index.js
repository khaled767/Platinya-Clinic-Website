// Services Section Component (High-Fidelity)
import { icons } from "../icons";

export default function services() {
  const medicalSpecialties = [
    {
      id: "hair",
      number: "01",
      title: "Hair Transplantation",
      description: "Painless Sapphire FUE & DHI techniques delivering high-density, natural hair restoration with lifetime guarantee support.",
      tag: "Most Popular"
    },
    {
      id: "dental",
      number: "02",
      title: "Aesthetic Dentistry",
      description: "Precision-crafted Hollywood Smile transformations, E-max veneers, and Swiss dental implants with digital smile design.",
      tag: "Cosmetic"
    },
    {
      id: "plastic",
      number: "03",
      title: "Plastic & Reconstructive",
      description: "Bespoke facial and body sculpting procedures performed by board-certified plastic surgeons in accredited facilities.",
      tag: "Surgical"
    },
    {
      id: "bariatric",
      number: "04",
      title: "Bariatric & Metabolic",
      description: "Advanced laparoscopic gastric sleeve and bypass procedures guided by multidisciplinary medical teams and nutritionists.",
      tag: "Health & Vitality"
    },
    {
      id: "aesthetics",
      number: "05",
      title: "Medical Aesthetics",
      description: "Non-invasive anti-aging treatments, laser dermatology, and skin rejuvenation with minimal to zero downtime.",
      tag: "Non-Surgical"
    }
  ];

  return `
    <section class="section-services">
      <div class="container">
        
        <div class="section-header text-center">
          <span class="section-subtitle">Surgical & Aesthetic Portfolio</span>
          <h2 class="section-title">Accredited Medical Specialties</h2>
          <p class="section-description">
            Every medical procedure is conducted in JCI-accredited hospitals by internationally trained medical specialists, supported by full concierge logistics.
          </p>
        </div>

        <div class="services-grid">
          ${medicalSpecialties.map(spec => `
            <article class="service-card-luxury">
              <div class="card-header-meta">
                <span class="service-number">${spec.number}</span>
                <span class="service-tag">${spec.tag}</span>
              </div>
              <h3 class="service-title">${spec.title}</h3>
              <p class="service-description">${spec.description}</p>
              <div class="card-footer-action">
                <a href="/services" data-route class="link-luxury">
                  <span>Explore Treatment</span>
                  <span class="arrow">→</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Concierge Package Banner -->
        <div class="concierge-banner-luxury">
          <div class="banner-content">
            <span class="banner-badge">All-Inclusive Concierge Package</span>
            <h3 class="banner-title">What Every Medical Journey Includes</h3>
            <p class="banner-sub">We handle every detail so you can focus entirely on your transformation and recovery.</p>
          </div>
          <div class="concierge-features-grid">
            <div class="feature-chip">
              <span class="chip-icon">${icons.plane}</span>
              <span class="chip-text">VIP Airport Transfers</span>
            </div>
            <div class="feature-chip">
              <span class="chip-icon">${icons.hotel}</span>
              <span class="chip-text">5-Star Hotel Accommodations</span>
            </div>
            <div class="feature-chip">
              <span class="chip-icon">${icons.user}</span>
              <span class="chip-text">Personal Patient Coordinator</span>
            </div>
            <div class="feature-chip">
              <span class="chip-icon">${icons.translate}</span>
              <span class="chip-text">Multi-Lingual Interpreter</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
