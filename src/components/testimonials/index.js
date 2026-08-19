// Testimonials Component (High-Fidelity)
import { t } from "../../i18n";

export default function testimonials() {
  const reviews = [
    { qKey: "ts.q0", author: "Marcus Vance", originKey: "ts.c0", treatKey: "ts.t0", rating: "★★★★★" },
    { qKey: "ts.q1", author: "Elena Rostova", origin: "Germany", treatKey: "ts.t1", rating: "★★★★★" },
    { qKey: "ts.q2", author: "Jean-Luc Moreau", origin: "France", treatKey: "ts.t2", rating: "★★★★★" },
  ];

  return `
    <section class="section-testimonials">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">${t("testi.sub")}</span>
          <h2 class="section-title">${t("testi.title")}</h2>
          <p class="section-description">${t("testi.desc")}</p>
        </div>

        <div class="testimonials-grid">
          ${reviews.map((r) => `
            <article class="testimonial-card-luxury">
              <div class="review-rating">${r.rating}</div>
              <p class="review-quote">"${t(r.qKey)}"</p>
              <div class="review-meta">
                <h4 class="author-name">${r.author}</h4>
                <p class="author-details">${t(r.treatKey)} • ${r.origin ? r.origin : t(r.originKey)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
