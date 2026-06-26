import { motion } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";
import ct from "../../assets/images/ct.jpg";

const ContactCTA = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${ct})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] p-8 md:p-14 shadow-2xl text-center"
        >

          {/* Small Text */}
          <p className="text-green-300 font-semibold tracking-[3px] uppercase mb-4">
            Book Consultation
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Start Your Recovery
            <span className="block text-green-300">
              With Experts Today
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Get personalized physiotherapy treatment for pain relief,
            posture correction and faster recovery.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

            {/* Call */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+916394816035"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition"
            >
              <PhoneCall size={20} />
              Call Now
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/916394816035"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-green-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition"
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </motion.a>

          </div>

          {/* Bottom Trust Text */}
          <p className="mt-8 text-sm text-gray-300">
            Trusted by Hundreds of Happy Patients
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default ContactCTA;