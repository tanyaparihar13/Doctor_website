import physio6 from "../../assets/images/physio6.jpg";

const ContactHero = () => {
  return (
    
      
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-32"
      style={{
        backgroundImage: `url(${physio6})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

        <p className="uppercase tracking-[4px] text-green-200 mb-4">
          Get In Touch
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
          Contact Us
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
          Need treatment or consultation? Contact us today and
          begin your recovery journey.
        </p>

      </div>
    </section>
    
  );
};

export default ContactHero;