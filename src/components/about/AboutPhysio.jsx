import { motion } from "framer-motion";
import doctor from "../../assets/images/jung1.webp";

const AboutPhysio = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10 overflow-hidden">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* Doctor Image */}
          <img
            src={doctor}
            alt="Dr Jang Bahadur"
            className="rounded-3xl shadow-xl w-[85%] md:w-[75%] h-[420px] object-cover"
          />

          {/* Experience Box */}
          <div className="absolute bottom-5 left-8 bg-green-600 text-white px-5 py-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-sm mt-1">
              Years Experience
            </p>
          </div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <p className="text-green-600 uppercase tracking-[3px] font-semibold mb-3 text-sm">
            About Doctor
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Dr. Jang Bahadur (PT)
          </h2>

          <h3 className="text-xl text-green-600 font-semibold mt-2">
            Expert Physiotherapist
          </h3>

          <p className="text-gray-600 text-base leading-7 mt-6">
            Dr. Jang Bahadur specializes in advanced physiotherapy
            treatments focused on pain relief, mobility recovery,
            posture correction, and rehabilitation care.
          </p>

          <p className="text-gray-600 text-base leading-7 mt-4">
            With years of experience and personalized therapy methods,
            he helps patients recover faster and improve their quality
            of life through expert physiotherapy solutions.
          </p>

          {/* Small Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">

            <div className="bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-gray-900">
                Personalized Care
              </h4>

              <p className="text-gray-600 text-sm mt-2 leading-6">
                Customized treatment plans for every patient.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-gray-900">
                Modern Therapy
              </h4>

              <p className="text-gray-600 text-sm mt-2 leading-6">
                Advanced rehabilitation and pain relief methods.
              </p>
            </div>

          </div>

          {/* Button */}
          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-medium transition duration-300 shadow-md">
            Book Appointment
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutPhysio;