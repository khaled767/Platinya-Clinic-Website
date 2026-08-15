// About Page Module (High-Fidelity)

export default function aboutPage() {
  return `
    <div class="page-about">
      <!-- Internal Page Banner -->
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">Our Philosophy & Authority</span>
          <h1 class="page-title text-inverse">The Platinya Heritage</h1>
          <p class="page-description text-muted">
            We are a premier international healthcare concierge headquartered in Istanbul, bridging European standards of hospitality with world-renowned surgical excellence.
          </p>
        </div>
      </section>

      <!-- Story & Values -->
      <section class="section-about-story">
        <div class="container">
          <div class="about-story-grid">
            <div class="story-content">
              <span class="section-subtitle">A Luxury Healthcare Experience</span>
              <h2 class="section-title">More Than Medical Facilitation</h2>
              <p class="section-description">
                Platinya Clinic was established to eliminate the stress, uncertainty, and transactional nature often associated with medical tourism. We believe that receiving world-class medical treatment should feel like a bespoke 5-star journey.
              </p>
              <p class="section-description" style="margin-top: 1rem;">
                Our team of over 15 on-ground healthcare coordinators, personal interpreters, and VIP logistics managers works exclusively with JCI-accredited surgical hospitals in Turkey to ensure every patient receives personalized care.
              </p>
            </div>
            <div class="story-stats-card card-luxury">
              <div class="stat-row">
                <span class="stat-num">15+</span>
                <span class="stat-text">On-Site Healthcare Professionals</span>
              </div>
              <div class="stat-row">
                <span class="stat-num">100%</span>
                <span class="stat-text">Tailored VIP Logistics</span>
              </div>
              <div class="stat-row">
                <span class="stat-num">JCI</span>
                <span class="stat-text">Accredited Surgical Facilities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
