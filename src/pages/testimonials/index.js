// Testimonials Page Module (High-Fidelity)

export default function testimonialsPage() {
  const journeys = [
    {
      name: "Marcus Vance",
      country: "London, United Kingdom",
      treatment: "Sapphire FUE Hair Restoration (4,200 Grafts)",
      quote: "From my VIP Mercedes driver waiting at Istanbul Airport to my personal coordinator helping me at every step, Platinya made me feel like royalty. My hair density looks 100% natural."
    },
    {
      name: "Elena Rostova",
      country: "Munich, Germany",
      treatment: "Full Hollywood Smile (24 E-Max Veneers)",
      quote: "The 3D smile design preview showed me exactly what my new teeth would look like before we started. The results in just 6 days are breathtaking."
    },
    {
      name: "Jean-Luc Moreau",
      country: "Paris, France",
      treatment: "Rhinoplasty & Facial Contouring",
      quote: "Absolute professionalism. The advanced surgical facility and 5-star Bosphorus hotel recovery made the entire trip smooth and stress-free."
    }
  ];

  return `
    <div class="page-testimonials">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">Real Transformations</span>
          <h1 class="page-title text-inverse">Patient Journeys & Experiences</h1>
          <p class="page-description text-muted">
            Read verified experiences and stories from international patients who chose Platinya Clinic for their healthcare journey.
          </p>
        </div>
      </section>

      <section class="section-testimonials-catalog">
        <div class="container">
          <div class="testimonials-catalog-grid">
            ${journeys.map(j => `
              <article class="journey-card card-luxury">
                <div class="journey-rating">★★★★★</div>
                <blockquote class="journey-quote">"${j.quote}"</blockquote>
                <div class="journey-author">
                  <h3 class="author-name">${j.name}</h3>
                  <p class="author-location">${j.country}</p>
                  <span class="treatment-badge">${j.treatment}</span>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
