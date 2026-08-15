// Hero Component (High-Fidelity)

export default function hero() {
  return `
    <section class="hero-section">
      <div class="hero-backdrop-glow"></div>
      <div class="container hero-container">
        
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span class="badge-text">Premier International Healthcare Concierge</span>
          </div>

          <h1 class="hero-title">
            A Curated <span class="title-highlight">Luxury Healthcare</span> Experience
          </h1>

          <p class="hero-description">
            Partnering with Turkey’s top accredited surgical institutions to deliver bespoke medical journeys. Complete with 5-star accommodations, private VIP transport, and dedicated European coordinators.
          </p>

          <div class="hero-actions">
            <a href="/contact" data-route class="btn-hero-primary">
              <span>Request Private Assessment</span>
            </a>
            <a href="/services" data-route class="btn-hero-secondary">
              <span>Explore Specialties</span>
            </a>
          </div>

          <div class="hero-trust-bar">
            <div class="trust-item">
              <span class="trust-value">100%</span>
              <span class="trust-label">Tailored VIP Logistics</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <span class="trust-value">JCI</span>
              <span class="trust-label">Accredited Facilities</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <span class="trust-value">24/7</span>
              <span class="trust-label">Personal Coordinator</span>
            </div>
          </div>
        </div>

        <div class="hero-media">
          <div class="hero-card-luxury">
            <div class="card-glow"></div>
            <div class="concierge-preview-badge">
              <span class="badge-icon">★</span>
              <div class="badge-info">
                <span class="badge-title">European Patient Relations</span>
                <span class="badge-sub">Full Multilingual Concierge Support</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
