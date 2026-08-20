// Services Page Module (High-Fidelity)

const medias = {
  hair: "./assets/images/ai/services/hair-APPROVED.png",
  dental: "./assets/images/ai/services/dental-APPROVED-nolamp.png",
  plastic: "./assets/images/ai/services/plastic/plastic-APPROVED.jpg",
  bariatric: "./assets/images/ai/services/bariatric/bariatric-APPROVED.png",
  aesthetics: "./assets/images/ai/services/aesthetics/aesthetics-APPROVED.png",
};

export default function servicesPage() {
  return `
    <div class="page-services">
      <!-- Internal Page Banner -->
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">World-Class Specialties</span>
          <h1 class="page-title text-inverse">Surgical & Aesthetic Excellence</h1>
          <p class="page-description text-muted">
            Explore our comprehensive range of advanced medical procedures performed by renowned specialists in Istanbul, supported by end-to-end concierge logistics.
          </p>
        </div>
      </section>

      <!-- Detailed Services Catalog -->
      <section class="section-services-catalog">
        <div class="container">

          <!-- Treatment 1: Hair -->
          <article class="service-detail-card card-luxury" id="hair-transplant">
            <div class="detail-grid">
              <div class="detail-info">
                <span class="detail-tag">01 • Hair Restoration</span>
                <h2 class="detail-title">Sapphire FUE & DHI Hair Transplantation</h2>
                <p class="detail-text">
                  Painless, high-density hair restoration using advanced Sapphire blades and Direct Hair Implantation (DHI) pens. Designed for natural hairline design with maximum graft survival.
                </p>
                <ul class="detail-features">
                  <li>✓ Lifetime Guarantee Certificate</li>
                  <li>✓ Needle-Free Anesthesia Option</li>
                  <li>✓ Complete Post-Op Care Kit Included</li>
                </ul>
                <a href="/contact" data-route class="btn-luxury-gold"><span>Request Hair Assessment</span></a>
              </div>
              <div class="detail-media">
                <div class="media-box-luxury">
                  <img src="${medias.hair}" alt="Hair transplantation in progress" class="detail-img" loading="lazy" />
                  <span class="media-badge">Lifetime Guarantee</span>
                </div>
              </div>
            </div>
          </article>

          <!-- Treatment 2: Dental -->
          <article class="service-detail-card card-luxury" id="dental">
            <div class="detail-grid">
              <div class="detail-info">
                <span class="detail-tag">02 • Aesthetic Dentistry</span>
                <h2 class="detail-title">Hollywood Smile & Digital Smile Design</h2>
                <p class="detail-text">
                  Complete cosmetic smile transformations utilizing premium E-max porcelain veneers, Zirconia crowns, and Swiss dental implants with 3D digital smile simulation.
                </p>
                <ul class="detail-features">
                  <li>✓ 3D Digital Smile Preview Before Treatment</li>
                  <li>✓ Premium Swiss & German Implants</li>
                  <li>✓ Completed in 5–7 Days</li>
                </ul>
                <a href="/contact" data-route class="btn-luxury-gold"><span>Get Smile Simulation</span></a>
              </div>
              <div class="detail-media">
                <div class="media-box-luxury">
                  <img src="${medias.dental}" alt="Comfortable dental check-up" class="detail-img" loading="lazy" />
                  <span class="media-badge">3D Smile Simulation</span>
                </div>
              </div>
            </div>
          </article>

          <!-- Treatment 3: Plastic Surgery -->
          <article class="service-detail-card card-luxury" id="plastic-surgery">
            <div class="detail-grid">
              <div class="detail-info">
                <span class="detail-tag">03 • Cosmetic & Reconstructive</span>
                <h2 class="detail-title">Plastic & Aesthetic Body Surgery</h2>
                <p class="detail-text">
                  Precision facial and body reshaping procedures including Rhinoplasty, Mommy Makeover, Breast Surgery, and Vaser Liposuction performed in leading surgical centers.
                </p>
                <ul class="detail-features">
                  <li>✓ Board-Certified Aesthetic Surgeons</li>
                  <li>✓ Private Hospital Suite & 24/7 Nursing</li>
                  <li>✓ Tailored Post-Op Compression Garments</li>
                </ul>
                <a href="/contact" data-route class="btn-luxury-gold"><span>Consult Surgical Specialist</span></a>
              </div>
              <div class="detail-media">
                <div class="media-box-luxury">
                  <img src="${medias.plastic}" alt="Plastic surgery consultation" class="detail-img" loading="lazy" />
                  <span class="media-badge">Advanced Surgical Suites</span>
                </div>
              </div>
            </div>
          </article>

          <!-- Treatment 4: Bariatric -->
          <article class="service-detail-card card-luxury" id="bariatric">
            <div class="detail-grid">
              <div class="detail-info">
                <span class="detail-tag">04 • Metabolic Health</span>
                <h2 class="detail-title">Laparoscopic Bariatric Surgery</h2>
                <p class="detail-text">
                  Safe, minimally invasive weight-loss solutions including Sleeve Gastrectomy and Gastric Bypass, supervised by senior bariatric surgeons and dedicated clinical nutritionists.
                </p>
                <ul class="detail-features">
                  <li>✓ Minimally Invasive Laparoscopic Surgery</li>
                  <li>✓ 12-Month Post-Op Nutritional Guidance</li>
                  <li>✓ Comprehensive Pre-Surgical Medical Checkup</li>
                </ul>
                <a href="/contact" data-route class="btn-luxury-gold"><span>Evaluate Bariatric Eligibility</span></a>
              </div>
              <div class="detail-media">
                <div class="media-box-luxury">
                  <img src="${medias.bariatric}" alt="Healthy lifestyle after bariatric treatment" class="detail-img" loading="lazy" />
                  <span class="media-badge">12-Month Aftercare</span>
                </div>
              </div>
            </div>
          </article>

          <!-- Treatment 5: Medical Aesthetics -->
          <article class="service-detail-card card-luxury" id="aesthetics">
            <div class="detail-grid">
              <div class="detail-info">
                <span class="detail-tag">05 • Aesthetic Medicine</span>
                <h2 class="detail-title">Non-Invasive Medical Aesthetics</h2>
                <p class="detail-text">
                  Advanced non-surgical anti-aging, laser dermatology, and skin-rejuvenation treatments delivered in our partner clinics — naturally enhancing your beauty with minimal to zero downtime.
                </p>
                <ul class="detail-features">
                  <li>✓ Non-Invasive Anti-Aging Treatments</li>
                  <li>✓ Laser Dermatology & Skin Rejuvenation</li>
                  <li>✓ Minimal to Zero Downtime</li>
                </ul>
                <a href="/contact" data-route class="btn-luxury-gold"><span>Book Aesthetic Consultation</span></a>
              </div>
              <div class="detail-media">
                <div class="media-box-luxury">
                  <img src="${medias.aesthetics}" alt="Serene medical-aesthetics facial treatment" class="detail-img" loading="lazy" />
                  <span class="media-badge">Non-Surgical</span>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>
    </div>
  `;
}
