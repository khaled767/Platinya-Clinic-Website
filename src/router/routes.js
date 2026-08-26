import homePage from "../pages/home";
import servicesPage from "../pages/services";
import aboutPage from "../pages/about";
import hospitalsPage from "../pages/hospitals";
import testimonialsPage from "../pages/testimonials";
import contactPage from "../pages/contact";
import privacyPolicyPage from "../pages/privacy-policy";
import termsPage from "../pages/terms";
import hotelPage from "../pages/hotel";
import airportPage from "../pages/airport";
import conciergePage from "../pages/concierge";
import transfersPage from "../pages/transfers";
import interpreterPage from "../pages/interpreter";
import notFoundPage from "../pages/not-found";

const routes = {
  "/": homePage,
  "/services": servicesPage,
  "/about": aboutPage,
  "/hospitals": hospitalsPage,
  "/testimonials": testimonialsPage,
  "/contact": contactPage,
  "/privacy-policy": privacyPolicyPage,
  "/terms": termsPage,
  "/hotel": hotelPage,
  "/airport": airportPage,
  "/concierge": conciergePage,
  "/transfers": transfersPage,
  "/interpreter": interpreterPage,
};

export { notFoundPage };
export default routes;
