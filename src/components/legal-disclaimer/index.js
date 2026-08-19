// Legal Disclaimer — Licensing statement in all supported languages
// Exact text supplied by the client (legally required wording).

export default function legalDisclaimer() {
  const statements = [
    { lang: "Türkçe", text: "Tedavi hizmetlerimiz, sağlık turizmi yetki belgesine sahip anlaşmalı olduğumuz sağlık kuruluşlarında, yüksek kalite standartlarında sunulmaktadır." },
    { lang: "English", text: "Our treatment services are provided at contracted healthcare institutions with a health tourism authorization certificate, ensuring high-quality standards." },
    { lang: "Français", text: "Nous fournissons nos services médicaux dans des établissements de santé sous contrat, titulaires d’un certificat de tourisme médical, conformément à des normes de qualité élevées." },
    { lang: "العربية", text: "تُقدم خدماتنا العلاجية في المؤسسات الصحية المُتعاقدين معها والحاصلة على شهادة ترخيص السياحة العلاجية، مع ضمان معايير عالية الجودة." },
    { lang: "Español", text: "Nuestros servicios de tratamiento se brindan en instituciones de salud contratadas que cuentan con un certificado de autorización de turismo de salud, garantizando estándares de alta calidad." },
    { lang: "Italiano", text: "I nostri servizi di trattamento sono forniti presso istituzioni sanitarie convenzionate con un certificato di autorizzazione per il turismo sanitario, garantendo standard di alta qualità." },
    { lang: "Русский", text: "Наши медицинские услуги предоставляются в контрактных медицинских учреждениях, имеющих сертификат аккредитации в области медицинского туризма, согласно высококачественным стандартам." },
  ];

  return `
    <section class="section-legal-disclaimer">
      <div class="container">
        <h3 class="legal-title">Official Statement</h3>
        <div class="legal-list">
          ${statements.map((s) => `
            <div class="legal-item">
              <span class="legal-lang">${s.lang}</span>
              <p class="legal-text">${s.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
