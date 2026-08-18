// Turkish Licenses Section (Health Tourism + Trademark certifications)

export default function turkishLicenses() {
  return `
    <section class="section-licenses">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle text-gold">Official Registration</span>
          <h2 class="section-title text-inverse">Turkish Ministry of Health & Trade Licenses</h2>
          <p class="section-description text-muted">
            Platinya Clinic operates fully under the official authorisation and registrations of the Republic of Türkiye — verified by the Ministry of Health and the Turkish Patent and Trademark Office.
          </p>
        </div>

        <div class="licenses-grid">
          <!-- Health Tourism Authorization (Ministry of Health / Health Türkiye) -->
          <figure class="license-card">
            <div class="license-media">
              <img
                src="./assets/images/certifications/health-tourism-cert-web.jpg"
                alt="Official Health Tourism Authorization Certificate — Turkish Ministry of Health (Health Türkiye)"
                class="license-img"
                loading="lazy"
              />
            </div>
            <figcaption class="license-caption">
              <span class="license-badge">Ministry of Health — Health Türkiye</span>
              <h3 class="license-title">Health Tourism Authorization Certificate</h3>
              <p class="license-desc">
                International Health Tourism Authorization (Uluslararası Sağlık Turizmi Yetki Belgesi) issued by the Republic of Türkiye Ministry of Health — certifying Platinya Clinic's legitimate operation in health-tourism intermediary services.
              </p>
            </figcaption>
          </figure>

          <!-- Trademark Registration (TÜRKPATENT) -->
          <figure class="license-card">
            <div class="license-media">
              <img
                src="./assets/images/certifications/trademark-cert-p1-web.jpg"
                alt="Registered Trademark Certificate for PLATINYA CLINIC — Turkish Patent and Trademark Office"
                class="license-img"
                loading="lazy"
              />
            </div>
            <figcaption class="license-caption">
              <span class="license-badge">TÜRKPATENT</span>
              <h3 class="license-title">Registered Trademark — "Platinya Clinic"</h3>
              <p class="license-desc">
                Trademark Registration Certificate (Marka Tescil Belgesi) from the Turkish Patent and Trademark Office — legally protecting the "PLATINYA CLINIC" brand across medical, travel and accommodation services.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  `;
}
