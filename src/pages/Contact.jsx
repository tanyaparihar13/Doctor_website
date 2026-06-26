import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import ContactCTA from "../components/contact/ContactCTA";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
    <Helmet>
      <title>Contact Dr. Jang Bahadur - Expert Physiotherapist in Noida</title>
      <meta
        name="description"
        content="Need treatment or consultation? Contact Dr. Jang Bahadur's physiotherapy clinic in Noida today and begin your recovery journey with expert care and personalized treatment plans."
      />
    </Helmet>
      <ContactHero/>
      <ContactInfo/>
      <ContactForm/>
        <ContactMap/>
        <ContactCTA/>
    </>
  );
}

export default Contact;