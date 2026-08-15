import hero from '../../components/hero';
import services from '../../components/services';
import about from '../../components/about';
import whyChooseUs from '../../components/why-choose-us';
import testimonials from '../../components/testimonials';
import contact from '../../components/contact';

export default function homePage() {
    return `
        ${hero()}
        ${services()}
        ${about()}
        ${whyChooseUs()}
        ${testimonials()}
        ${contact()}
    `;
}