import homePage from "../pages/home";
import servicesPage from "../pages/services";
import aboutPage from "../pages/about";
import hospitalsPage from "../pages/hospitals";
import testimonialsPage from "../pages/testimonials";
import contactPage from "../pages/contact";
import notFoundPage from "../pages/not-found";

const routes = {
  "/": homePage,
  "/services": servicesPage,
  "/about": aboutPage,
  "/hospitals": hospitalsPage,
  "/testimonials": testimonialsPage,
  "/contact": contactPage,
};

export { notFoundPage };
export default routes;
