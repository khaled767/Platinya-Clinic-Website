import { t } from "../../i18n";

export default function notFoundPage() {
  return `
    <section class="page-notfound bg-dark-obsidian">
      <div class="container">
        <span class="notfound-code">404</span>
        <h1 class="notfound-title text-inverse">${t("nf.title")}</h1>
        <p class="notfound-desc text-muted">${t("nf.desc")}</p>
        <a href="/" data-route class="btn-luxury-gold"><span>${t("nav.home")}</span></a>
      </div>
    </section>
  `;
}
