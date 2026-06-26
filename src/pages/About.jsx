
import AboutDoctor from "../components/about/AboutDoctor";
import AboutPhysio from "../components/about/AboutPhysio";
import WhyChoose from "../components/about/WhyChoose";
import AboutService from "../components/about/AboutService";
import Statistics from "../components/about/Statistics";
import Testimonials from "../components/about/Testimonials";
import FAQSection from "../components/about/FAQSection";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
    <Helmet>
      <title>About Dr. Jang Bahadur - Expert Physiotherapist</title>
      <meta
        name="description"
        content="Learn about Dr. Jang Bahadur, an expert physiotherapist providing advanced physiotherapy treatments for pain relief, mobility recovery, and rehabilitation care."
      />
    </Helmet>
      <AboutDoctor />
        <AboutPhysio />
        <WhyChoose />
        <AboutService />
        <Statistics />
        <Testimonials />
        <FAQSection />
    </>

  );
};

export default About;