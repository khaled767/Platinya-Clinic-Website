// About Section Component (High-Fidelity)

export default function about() {
  return `
    <section class="section-about">
      <div class="container about-container">
        <div class="about-content">
          <span class="section-subtitle">European Standard Medical Facilitation</span>
          <h2 class="about-title">Redefining International Healthcare Hospitality</h2>
          <p class="about-description">
            Platinya Clinic is not a hospital; we are an elite medical tourism concierge. Based in Istanbul, our team of over 15 healthcare and hospitality professionals manages every aspect of your surgical journey with discretion, precision, and warmth.
          </p>
          <div class="about-highlights">
            <div class="highlight-item">
              <span class="highlight-icon">✓</span>
              <div>
                <h4 class="highlight-title">Exclusive Surgeon Network</h4>
                <p class="highlight-text">We partner solely with accredited specialists and top-tier JCI hospitals.</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">✓</span>
              <div>
                <h4 class="highlight-title">1:1 Dedicated Coordinator</h4>
                <p class="highlight-text">A personal European coordinator accompanies you from pre-op to recovery.</p>
              </div>
            </div>
          </div>
          <a href="/about" data-route class="btn-about-luxury">
            <span>Discover Our Story</span>
          </a>
        </div>

        <div class="about-media">
          <div class="about-media-card card-luxury">
            <div class="media-stat-box">
              <span class="stat-number">15+</span>
              <span class="stat-label">Healthcare Specialists On-Site</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
