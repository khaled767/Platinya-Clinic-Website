// Testimonials Component (High-Fidelity)

export default function testimonials() {
  const reviews = [
    {
      quote: "From my VIP transport landing at Istanbul Airport to my Sapphire FUE procedure, Platinya made me feel like an honored guest rather than a patient. The results are life-changing.",
      author: "Marcus Vance",
      origin: "United Kingdom",
      treatment: "Sapphire Hair Restoration",
      rating: "★★★★★"
    },
    {
      quote: "My Hollywood Smile transformation exceeded every expectation. My personal coordinator was with me at every appointment, translating and ensuring absolute comfort.",
      author: "Elena Rostova",
      origin: "Germany",
      treatment: "Full Aesthetic Dentistry",
      rating: "★★★★★"
    },
    {
      quote: "The 5-star hotel recovery and private driver made all the difference after my surgery. Impeccable care and genuine attention.",
      author: "Jean-Luc Moreau",
      origin: "France",
      treatment: "Body Sculpting Procedure",
      rating: "★★★★★"
    }
  ];

  return `
    <section class="section-testimonials">
      <div class="container">
        
        <div class="section-header text-center">
          <span class="section-subtitle">Verified Patient Journeys</span>
          <h2 class="section-title">Refined Experiences & Stories</h2>
          <p class="section-description">
            Real stories from our European patients who trusted Platinya Clinic for their healthcare transformation.
          </p>
        </div>

        <div class="testimonials-grid">
          ${reviews.map(r => `
            <article class="testimonial-card-luxury">
              <div class="review-rating">${r.rating}</div>
              <p class="review-quote">"${r.quote}"</p>
              <div class="review-meta">
                <h4 class="author-name">${r.author}</h4>
                <p class="author-details">${r.treatment} • ${r.origin}</p>
              </div>
            </article>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
