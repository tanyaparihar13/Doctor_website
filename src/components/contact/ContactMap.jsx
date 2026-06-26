import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[4px] text-green-600 font-semibold"
        >
          Visit Our Clinic
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-green-900 mt-4"
        >
          Find Us Easily
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Visit our clinic for professional physiotherapy,
          pain relief, posture correction and rehabilitation care.
        </motion.p>

      </div>

      {/* Map Wrapper */}
      <div className="max-w-[95%] mx-auto relative">

        {/* Floating Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-6 max-w-sm border border-white"
        >

          <h3 className="text-2xl font-bold text-green-900 mb-5">
            Dr. Jang Bahadur Clinic
          </h3>

          <div className="space-y-4 text-gray-700">

            <div className="flex gap-3">
              <MapPin className="text-green-700 mt-1" size={20} />
              <p>
                The Human Valley Physiotherapy &
                Rehab Clinic, Uttar Pradesh
              </p>
            </div>

            <div className="flex gap-3">
              <Navigation className="text-green-700 mt-1" size={20} />
              <p>
                Easily accessible location with parking.
              </p>
            </div>

            <div className="flex gap-3">
              <Clock className="text-green-700 mt-1" size={20} />
              <p>
                Mon - Sat : 9 AM to 8 PM
              </p>
            </div>

          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Get Directions
          </a>

        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[35px] shadow-2xl border-[8px] border-white"
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5866666603956!2d77.361873!3d28.552141000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefa8ae011cd7%3A0x66ea6e263aa75299!2sDr.%20Jang%20Bahadur%20(The%20Human%20Valley%20Physiotherapy%20and%20Rehab%20Clinic)!5e0!3m2!1sen!2sin!4v1778671640742!5m2!1sen!2sin"
            width="100%"
            height="620"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
            className="w-full"
          ></iframe>

        </motion.div>

      </div>

    </section>
  );
};

export default ContactMap;