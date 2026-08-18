// Partner Facilities Section (collaborating hospitals/clinics, shown without names)
// Displays the calibre of facilities we work with — as proof, never revealing identities.

export default function partnerFacilities() {
  const shots = [
    {
      img: "./assets/images/partner-clinics/bm-treatment-web.jpg",
      alt: "Advanced dental treatment suite",
      caption: "State-of-the-art dental treatment suites with ergonomic, high-precision equipment",
    },
    {
      img: "./assets/images/partner-clinics/hlc-treatment-web.jpg",
      alt: "Modern surgical treatment room",
      caption: "Advanced treatment and procedure rooms equipped to international standards",
    },
    {
      img: "./assets/images/partner-clinics/hlc-waiting-web.jpg",
      alt: "Contemporary clinic waiting lounge",
      caption: "Refined, calming interiors designed for patient comfort and privacy",
    },
    {
      img: "./assets/images/partner-clinics/efc-waiting-web.jpg",
      alt: "Elegant clinic reception and waiting area",
      caption: "Five-star standard reception and patient-waiting environments",
    },
  ];

  return `
    <section class="section-partner-facilities">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle text-gold">The Facilities Behind The Journey</span>
          <h2 class="section-title text-inverse">Our Partner Hospitals & Clinics</h2>
          <p class="section-description text-muted">
            We partner exclusively with leading private hospitals and specialist clinics in Istanbul. Every treatment is delivered within world-class, modern medical environments — selected for their standards, discretion, and comfort.
          </p>
        </div>

        <div class="partner-gallery">
          ${shots.map((s) => `
            <figure class="partner-card">
              <div class="partner-media">
                <img src="${s.img}" alt="${s.alt}" class="partner-img" loading="lazy" />
              </div>
              <figcaption class="partner-caption">
                <span class="partner-dot"></span>
                <span class="partner-text">${s.caption}</span>
              </figcaption>
            </figure>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
