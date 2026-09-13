// /bariatric — Bariatric & Metabolic Surgery
import { icons } from "../../components/icons";
import { plasticGroupPage } from "../plastic/shared";

const BASE = "./assets/images/ai/services/bariatric/";

// Bariatric procedures (3) — order set by the client:
//   1 Abdominal liposuction & tummy tuck · 2 Gastric sleeve · 3 Gastric balloon
// key matches bariatric.g.<key> / bariatric.g.<key>c / bariatric.f.<key>{1..3}
const PROCEDURES = [
  { key: "lipo",    num: "01", img: "lipo.webp" },
  { key: "sleeve",  num: "02", img: "sleeve.webp" },
  { key: "balloon", num: "03", img: "balloon.webp" },
];

export default function bariatricPage() {
  return plasticGroupPage({
    prefix: "bariatric",
    heroImg: "hero.webp",
    icon: icons.stethoscope,
    procedures: PROCEDURES,
    base: BASE,
  });
}
