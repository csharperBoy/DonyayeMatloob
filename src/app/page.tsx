// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import TopBookCategories from "./therapy-services";
import BackToSchoolBooks from "./online-courses";
import OtherBookOffers from "./psychologists-team";
import CarouselFeatures from "./therapy-carousel";
import GetYourBookFromUs from "./appointment-request";
import Faq from "./faq";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopBookCategories />
      <BackToSchoolBooks />
      <OtherBookOffers />
      <CarouselFeatures />
      <GetYourBookFromUs />
      <Faq />
      <Footer />
    </>
  );
}
