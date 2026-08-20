// Testimonials Page Module (High-Fidelity)
import { t } from "../../i18n";

export default function testimonialsPage() {
  const journeys = [
    {
      name: "Marcus Vance",
      countryKey: "tj.c1",
      treatmentKey: "tj.t1",
      quoteKey: "ts.q0", // reuse hero-journey quote (VIP arrival)
    },
    {
      name: "Elena Rostova",
      countryKey: "tj.c2",
      treatmentKey: "tj.t2",
      quoteKey: "tj.q1",
    },
    {
      name: "Jean-Luc Moreau",
      countryKey: "tj.c3",
      treatmentKey: "tj.t3",
      quoteKey: "tj.q2",
    },
  ];

  return `
    <div class="page-testimonials">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">${t("tj.badge")}</span>
          <h1 class="page-title text-inverse">${t("tj.title")}</h1>
          <p class="page-description text-muted">${t("testi.desc")}</p>
        </div>
      </section>

      <section class="section-testimonials-catalog">
        <div class="container">
          <div class="testimonials-catalog-grid">
            ${journeys.map((j) => `
              <article class="journey-card card-luxury">
                <div class="journey-rating">★★★★★</div>
                <blockquote class="journey-quote">"${t(j.quoteKey)}"</blockquote>
                <div class="journey-author">
                  <h3 class="author-name">${j.name}</h3>
                  <p class="author-location">${t(j.countryKey)}</p>
                  <span class="treatment-badge">${t(j.treatmentKey)}</span>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}
