import hero from '../../components/hero';
import services from '../../components/services';
import about from '../../components/about';
import whyChooseUs from '../../components/why-choose-us';
import turkishLicenses from '../../components/turkish-licenses';
import testimonials from '../../components/testimonials';
import contact from '../../components/contact';

export default function homePage() {
    return `
        ${hero()}
        ${services()}
        ${about()}
        ${whyChooseUs()}
        ${turkishLicenses()}
        ${testimonials()}
        ${contact()}
    `;
}
