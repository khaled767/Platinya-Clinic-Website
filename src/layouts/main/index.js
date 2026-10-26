import header from "../../components/header";
import footer from "../../components/footer";
import { icons } from "../../components/icons";
import { t } from "../../i18n";

export default function mainLayout(pageContent) {
  // One number, one greeted message: the chat opens with the visitor's own
  // question already typed, in the language they are reading.
  const waHref = `https://wa.me/905300799487?text=${encodeURIComponent(t("wa.prefill"))}`;

  return `
    <div class="app-layout">
      ${header()}

      <main>
        ${pageContent}
      </main>

      ${footer()}

      <a
        href="${waHref}"
        target="_blank"
        rel="noopener"
        class="whatsapp-float"
        aria-label="${t("wa.chat")}"
        title="${t("wa.chat")}"
      >
        <span class="whatsapp-float-photo">
          <img
            src="/assets/images/ui/whatsapp-agent.webp"
            alt=""
            width="60"
            height="60"
            loading="lazy"
            decoding="async"
          />
        </span>
        <span class="whatsapp-float-glyph" aria-hidden="true">${icons.whatsapp}</span>
      </a>

      <!-- Proactive greeting: appears beside the button once the visitor has spent
           a while on the page, in the language of the page. Left empty and hidden
           in the pre-rendered HTML, so no crawler and no no-JS visitor sees it. -->
      <div class="wa-teaser" id="wa-teaser" hidden>
        <span class="wa-teaser-avatar">
          <img src="/assets/images/ui/whatsapp-agent.webp" alt="" width="36" height="36" />
        </span>
        <div class="wa-teaser-body">
          <span class="wa-teaser-name">${t("wa.name")}</span>
          <p class="wa-teaser-text" id="wa-teaser-text" role="status" aria-live="polite"></p>
          <span class="wa-teaser-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        </div>
        <a class="wa-teaser-open" href="${waHref}" target="_blank" rel="noopener" aria-label="${t("wa.chat")}"></a>
        <button type="button" class="wa-teaser-close" aria-label="${t("wa.close")}">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  `;
}
