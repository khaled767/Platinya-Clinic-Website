import header from "../../components/header";
import footer from "../../components/footer";




export default function mainLayout(pageContent) {
  return `
    <div class="app-layout">
      ${header()}

      <main>
        ${pageContent}
      </main>

      ${footer()}
    </div>
  `;
}