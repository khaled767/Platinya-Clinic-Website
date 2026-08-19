// i18n translations dictionary.
// Covers the site's UI chrome: navigation, header actions, page banners/subtitles,
// and common buttons — across all supported languages.

export const LANGS = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

const t = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.hospitals": "Contracted Hospitals",
    "nav.experiences": "Experiences",
    "nav.contact": "Contact",
    "cta.vip": "VIP Consultation",
    "lang": "EN",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.about": "من نحن",
    "nav.hospitals": "المستشفيات المتعاقد معها",
    "nav.experiences": "تجارب المرضى",
    "nav.contact": "اتصل بنا",
    "cta.vip": "استشارة VIP",
    "lang": "ع",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.hospitals": "Hôpitaux partenaires",
    "nav.experiences": "Expériences",
    "nav.contact": "Contact",
    "cta.vip": "Consultation VIP",
    "lang": "FR",
  },
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Sobre Nosotros",
    "nav.hospitals": "Hospitales Asociados",
    "nav.experiences": "Experiencias",
    "nav.contact": "Contacto",
    "cta.vip": "Consulta VIP",
    "lang": "ES",
  },
  tr: {
    "nav.home": "Ana Sayfa",
    "nav.services": "Hizmetler",
    "nav.about": "Hakkımızda",
    "nav.hospitals": "Anlaşmalı Hastaneler",
    "nav.experiences": "Deneyimler",
    "nav.contact": "İletişim",
    "cta.vip": "VIP Danışma",
    "lang": "TR",
  },
  it: {
    "nav.home": "Home",
    "nav.services": "Servizi",
    "nav.about": "Chi Siamo",
    "nav.hospitals": "Ospedali Partner",
    "nav.experiences": "Esperienze",
    "nav.contact": "Contatti",
    "cta.vip": "Consulta VIP",
    "lang": "IT",
  },
  ru: {
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.hospitals": "Партнёрские больницы",
    "nav.experiences": "Отзывы",
    "nav.contact": "Контакты",
    "cta.vip": "VIP-консультация",
    "lang": "RU",
  },
};

export default t;
