// /aesthetics — Medical Aesthetics (non-surgical)
import { icons } from "../../components/icons";
import { plasticGroupPage } from "../plastic/shared";

const BASE = "./assets/images/ai/services/aesthetics/";

// Aesthetics procedures (5) — order set by the client:
//   1 Fillers · 2 Botulinum toxin · 3 Fractional laser
//   4 Mesotherapy · 5 Laser pigmentation removal
// key matches aesthetics.g.<key> / aesthetics.g.<key>c / aesthetics.f.<key>{1..3}
const PROCEDURES = [
  { key: "filler",     num: "01", img: "filler.webp" },
  { key: "botox",      num: "02", img: "botox.webp" },
  { key: "fractional", num: "03", img: "fractional.webp" },
  { key: "meso",       num: "04", img: "mesotherapy.webp" },
  { key: "laser",      num: "05", img: "laser.webp" },
];

export default function aestheticsPage() {
  return plasticGroupPage({
    prefix: "aesthetics",
    heroImg: "hero.webp",
    icon: icons.stethoscope,
    procedures: PROCEDURES,
    base: BASE,
  });
}
