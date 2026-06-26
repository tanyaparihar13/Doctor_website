
import Hero from "../components/hero/Hero";
import WhyChoose from "../components/hero/WhyChoose";
import About from "../components/hero/About";
import Services from "../components/hero/Services";
import TreatmentsSection from "../components/hero/TreatmentsSection";
import Testimonials from "../components/about/Testimonials";
import FAQSection from "../components/about/FAQSection";
import Cta from "../components/hero/Cta";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Jang Bahadur - Expert Physiotherapist in Noida</title>
        <meta
          name="description"
          content="Welcome to Dr. Jang Bahadur's physiotherapy clinic in Noida. We offer expert physiotherapy treatments for pain relief, mobility recovery, and rehabilitation care. Book your appointment today!"
        />
      </Helmet> 
      <Hero />
      <About />
      <Services />
      <TreatmentsSection />
      <Testimonials />
       <WhyChoose />
      <FAQSection />
      <Cta />

    </>
  );
};

export default Home;