// FAQ section — reusable across the service/concierge pages.
//
// Two reasons the answers are always VISIBLE (no accordion):
//   · the text must be in the rendered HTML for search engines to read it;
//   · a hidden answer is also hidden from a patient who is scanning the page.
//
// The section ships a FAQPage JSON-LD block built from the same translation keys,
// so the visible copy and the structured data can never drift apart. Pages using
// it need, in their dictionary: <prefix>.faqLbl, <prefix>.faqTitle, and
// <prefix>.fq1..N / <prefix>.fa1..N (question/answer pairs).
import { t } from "../../i18n";

export default function faqSection(prefix, count = 5) {
  const items = Array.from({ length: count }, (_, i) => {
    const qKey = `${prefix}.fq${i + 1}`;
    const aKey = `${prefix}.fa${i + 1}`;
    const q = t(qKey);
    const a = t(aKey);
    // t() returns the key itself when a translation is missing — never publish
    // a placeholder as a real question.
    return { q: q === qKey ? "" : q, a: a === aKey ? "" : a };
  });

  const usable = items.filter((it) => it.q && it.a);

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: usable.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  const jsonLd = usable.length
    ? `<script type="application/ld+json">${JSON.stringify(ld).replace(/<\//g, "<\\/")}</script>`
    : "";

  return `
    <section class="section-faq">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">${t(`${prefix}.faqLbl`)}</span>
          <h2 class="section-title">${t(`${prefix}.faqTitle`)}</h2>
        </div>

        <div class="faq-list">
          ${usable
            .map(
              (it) => `
            <article class="faq-item">
              <h3 class="faq-q">${it.q}</h3>
              <p class="faq-a">${it.a}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
    ${jsonLd}
  `;
}
