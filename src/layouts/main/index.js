import header from "../../components/header";
import footer from "../../components/footer";
import { icons } from "../../components/icons";
import { t } from "../../i18n";

export default function mainLayout(pageContent) {
  return `
    <div class="app-layout">
      ${header()}

      <main>
        ${pageContent}
      </main>

      ${footer()}

      <a
        href="https://wa.me/905300799487"
        target="_blank"
        rel="noopener"
        class="whatsapp-float"
        aria-label="${t("wa.chat")}"
        title="${t("wa.chat")}"
      >
        <span class="whatsapp-float-photo">
          <img
            src="./assets/images/ui/whatsapp-agent.webp"
            alt=""
            width="60"
            height="60"
            loading="lazy"
            decoding="async"
          />
        </span>
        <span class="whatsapp-float-glyph" aria-hidden="true">${icons.whatsapp}</span>
      </a>
    </div>
  `;
}