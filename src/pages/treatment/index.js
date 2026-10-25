// Treatment page template.
//
// One page per operation (tummy tuck, rhinoplasty, breast lift…), driven by a
// content module in src/content/. The template is deliberate about structure:
// a crawler should be able to read what the operation is, who it suits, what
// happens on the day, how long recovery takes, what the risks are and what
// patients ask — in that order, without JavaScript.
//
// The FAQ is <details>/<summary>, so the answers are in the HTML for Google and
// still open and close without a line of JavaScript.
import { t, getLang, localizedHref } from "../../i18n";
import { icons } from "../../components/icons";

const SITE = "https://platinyaclinic.com";

function langUrl(slug, lang) {
  return SITE + localizedHref(slug, lang);
}

function structuredData(content, copy, lang) {
  const procedure = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: copy.title,
    description: copy.lead,
    url: langUrl(content.slug, lang),
    procedureType: "https://schema.org/SurgicalProcedure",
    bodyLocation: copy.eyebrow,
    howPerformed: copy.techniques.items.map((i) => `${i.name}: ${i.text}`).join(" "),
    preparation: copy.journey.steps[0].text,
    followup: copy.journey.steps[4].text,
    provider: {
      "@type": "MedicalClinic",
      name: "Platinya Clinic",
      url: SITE + "/",
      address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [procedure, faq]
    .map((d) => `<script type="application/ld+json">${JSON.stringify(d)}</script>`)
    .join("\n");
}

export default function treatmentPage(content) {
  const lang = getLang();
  const copy = content[lang] || content.en;
  const groupHref = localizedHref(content.group.href, lang);
  const groupLabel = content.group.label[lang] || content.group.label.en;

  return `
    <div class="page-treatment">

      <!-- Hero -->
      <section class="tr-hero">
        <div class="container tr-hero-grid">
          <div class="tr-hero-copy">
            <nav class="tr-crumbs" aria-label="${t("tr.crumbs")}">
              <a href="${groupHref}" data-route>${groupLabel}</a>
              <span aria-hidden="true">/</span>
              <span>${copy.title}</span>
            </nav>

            <span class="tr-eyebrow">${copy.eyebrow}</span>
            <h1 class="tr-title">${copy.title}</h1>
            <p class="tr-lead">${copy.lead}</p>

            <div class="tr-hero-actions">
              <a href="/contact" data-route class="btn-luxury-gold"><span>${copy.cta}</span></a>
              <a href="${groupHref}" data-route class="tr-ghost-link">${groupLabel}</a>
            </div>

            <dl class="tr-stats">
              ${copy.stats
                .map(
                  (s) => `
                <div class="tr-stat">
                  <dt>${s.label}</dt>
                  <dd>${s.value}</dd>
                </div>`
                )
                .join("")}
            </dl>
          </div>

          <figure class="tr-hero-media">
            <img src="${content.heroImage}" alt="${copy.heroAlt}" loading="eager" fetchpriority="high" decoding="async" />
          </figure>
        </div>
      </section>

      <!-- Who it is for -->
      <section class="tr-section tr-candidate">
        <div class="container tr-two-col">
          <div class="tr-col-head">
            <h2 class="tr-h2">${copy.candidate.heading}</h2>
            <p class="tr-body">${copy.candidate.intro}</p>
          </div>
          <div class="tr-col-body">
            <ul class="tr-checks">
              ${copy.candidate.items
                .map((i) => `<li><span class="tr-check" aria-hidden="true">${icons.check}</span><span>${i}</span></li>`)
                .join("")}
            </ul>
            <p class="tr-note">${copy.candidate.note}</p>
          </div>
        </div>
      </section>

      <!-- Techniques -->
      <section class="tr-section tr-techniques">
        <div class="container">
          <div class="tr-section-head">
            <h2 class="tr-h2">${copy.techniques.heading}</h2>
            <p class="tr-body">${copy.techniques.intro}</p>
          </div>
          <div class="tr-cards">
            ${copy.techniques.items
              .map(
                (i, n) => `
              <article class="tr-card">
                <span class="tr-card-num">${String(n + 1).padStart(2, "0")}</span>
                <h3 class="tr-card-title">${i.name}</h3>
                <p class="tr-card-text">${i.text}</p>
              </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- Journey -->
      <section class="tr-section tr-journey">
        <div class="container">
          <h2 class="tr-h2">${copy.journey.heading}</h2>
          <ol class="tr-timeline">
            ${copy.journey.steps
              .map(
                (s, n) => `
              <li class="tr-step">
                <span class="tr-step-num" aria-hidden="true">${String(n + 1).padStart(2, "0")}</span>
                <div class="tr-step-body">
                  <h3 class="tr-step-title">${s.name}</h3>
                  <p class="tr-body">${s.text}</p>
                </div>
              </li>`
              )
              .join("")}
          </ol>
        </div>
      </section>

      <!-- Risks -->
      <section class="tr-section tr-risks">
        <div class="container">
          <div class="tr-risks-head">
            <h2 class="tr-h2">${copy.risks.heading}</h2>
            <p class="tr-body">${copy.risks.intro}</p>
          </div>
          <ul class="tr-risk-list">
            ${copy.risks.items.map((r) => `<li>${r}</li>`).join("")}
          </ul>
          <p class="tr-note tr-note-strong">${copy.risks.note}</p>
        </div>
      </section>

      <!-- FAQ -->
      <section class="tr-section tr-faq">
        <div class="container">
          <h2 class="tr-h2">${copy.faq.heading}</h2>
          <div class="tr-faq-list">
            ${copy.faq.items
              .map(
                (f) => `
              <details class="tr-faq-item">
                <summary>${f.q}</summary>
                <p class="tr-body">${f.a}</p>
              </details>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="tr-cta">
        <div class="container tr-cta-inner">
          <div>
            <h2 class="tr-cta-title">${copy.ctaBand.heading}</h2>
            <p class="tr-cta-text">${copy.ctaBand.text}</p>
          </div>
          <a href="/contact" data-route class="btn-luxury-gold"><span>${copy.ctaBand.button}</span></a>
        </div>
      </section>

      <p class="container tr-disclaimer">${copy.disclaimer}</p>

      ${structuredData(content, copy, lang)}
    </div>
  `;
}
