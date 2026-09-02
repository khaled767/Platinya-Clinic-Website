import header from "../../components/header";
import footer from "../../components/footer";
import { icons } from "../../components/icons";

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
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span class="whatsapp-float-badge">${icons.whatsapp}</span>
      </a>
    </div>
  `;
}