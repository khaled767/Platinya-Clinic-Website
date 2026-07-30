// Doctors Page Module (High-Fidelity)

export default function doctorsPage() {
  const doctors = [
    {
      name: "Dr. Mehmet Yilmaz",
      title: "Senior Hair Restoration Specialist",
      experience: "14+ Years Experience",
      specialty: "Sapphire FUE & DHI Micro-Grafting",
      memberships: "Member of ISHRS & EHRS"
    },
    {
      name: "Dr. Sarah Al-Mansoor",
      title: "Chief Aesthetic Dentist",
      experience: "12+ Years Experience",
      specialty: "Digital Smile Design & E-Max Veneers",
      memberships: "European Academy of Esthetic Dentistry"
    },
    {
      name: "Prof. Dr. Arda Kaya",
      title: "Lead Plastic & Reconstructive Surgeon",
      experience: "18+ Years Experience",
      specialty: "Rhinoplasty, Facial & Body Contouring",
      memberships: "ISAPS & EBOPRAS Certified"
    },
    {
      name: "Dr. Caner Demir",
      title: "Bariatric & Laparoscopic Specialist",
      experience: "15+ Years Experience",
      specialty: "Metabolic & Sleeve Gastrectomy Surgery",
      memberships: "IFSO Active Member"
    }
  ];

  return `
    <div class="page-doctors">
      <section class="page-banner bg-dark-obsidian">
        <div class="container">
          <span class="section-subtitle text-gold">Surgical Excellence</span>
          <h1 class="page-title text-inverse">Our Board-Certified Specialists</h1>
          <p class="page-description text-muted">
            Meet the world-renowned medical experts behind Platinya Clinic. Every surgeon and specialist is board-certified with extensive international experience.
          </p>
        </div>
      </section>

      <section class="section-doctors-list">
        <div class="container">
          <div class="doctors-grid">
            ${doctors.map(d => `
              <div class="doctor-card-luxury card-luxury">
                <div class="doctor-avatar-box">
                  <span class="doctor-icon">👨‍⚕️</span>
                </div>
                <h3 class="doctor-name">${d.name}</h3>
                <p class="doctor-title">${d.title}</p>
                <div class="doctor-meta">
                  <span class="meta-tag">${d.experience}</span>
                  <span class="meta-tag">${d.specialty}</span>
                </div>
                <p class="doctor-accreditation">${d.memberships}</p>
                <a href="/contact" data-route class="btn-doctor-consult"><span>Consult Specialist</span></a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
