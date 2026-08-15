// Why Choose Us Component (High-Fidelity)

export default function whyChooseUs() {
  const pillars = [
    {
      icon: "⚜",
      title: "Concierge Medical Standard",
      description: "We handle 100% of flight, hotel, driver, and hospital logistics so your medical journey feels effortless and stress-free."
    },
    {
      icon: "🛡",
      title: "Accredited Excellence",
      description: "Every procedure is executed in JCI-certified hospitals using world-renowned surgical techniques and medical safety protocols."
    },
    {
      icon: "💎",
      title: "Transparent & All-Inclusive",
      description: "Zero hidden costs. Clear pricing frameworks with pre-op tests, medications, transfers, and 5-star hotel stays included."
    },
    {
      icon: "🤝",
      title: "Long-Term European Follow-up",
      description: "Our care does not end when you fly home. Dedicated post-operative monitoring ensures long-term peace of mind."
    }
  ];

  return `
    <section class="section-why-us bg-dark-obsidian">
      <div class="container">
        
        <div class="section-header text-center">
          <span class="section-subtitle text-gold">The Platinya Distinction</span>
          <h2 class="section-title text-inverse">Why European Patients Choose Platinya</h2>
          <p class="section-description text-muted">
            Combining world-class medical skill with private luxury hospitality for an unparalleled healthcare experience.
          </p>
        </div>

        <div class="why-us-grid">
          ${pillars.map(p => `
            <div class="why-us-card">
              <div class="why-icon">${p.icon}</div>
              <h3 class="why-title">${p.title}</h3>
              <p class="why-desc">${p.description}</p>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
