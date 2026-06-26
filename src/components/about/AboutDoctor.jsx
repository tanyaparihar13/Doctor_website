import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import physio1 from "../../assets/images/physio1.jpg";
import physio3 from "../../assets/images/physio3.jpg";
import physio5 from "../../assets/images/physio5.jpg";


const images = [physio1, physio3, physio5];

const features = [
  {
    title: "Personalized Treatment",
    desc: "Customized physiotherapy plans designed for faster recovery and long-term wellness.",
  },
  {
    title: "Advanced Techniques",
    desc: "Modern rehabilitation methods for pain relief and mobility improvement.",
  },
  {
    title: "Patient Focused Care",
    desc: "Complete support with guided therapy sessions and expert consultation.",
  },
];

const AboutDoctor = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] overflow-hidden">

      {/* ================= BACKGROUND SLIDER ================= */}

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >

          <img
            src={images[current]}
            alt="Physiotherapy"
            className="w-full h-full object-cover"
          />

        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#061712]/90 via-[#061712]/70 to-[#061712]/45"></div>

      {/* LIGHT GLOW */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-green-500/10 blur-[120px] rounded-full"></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 flex items-center min-h-[85vh] lg:min-h-[92vh] py-14 lg:py-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">

            {/* ================= LEFT CONTENT ================= */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >

              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">

                <span className="text-[11px] uppercase tracking-[2px] text-green-400 font-medium">
                  Professional Physiotherapy Care
                </span>

              </div>

              {/* Heading */}
<h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1] whitespace-nowrap">
  Dr. Jang Bahadur (PT)
</h1>

              {/* Role */}
              <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-green-400">

                Expert Physiotherapist

              </h2>

              {/* Description */}
              <p className="mt-5 text-gray-200 text-sm sm:text-base leading-7 max-w-xl mx-auto lg:mx-0">

                Advanced physiotherapy treatments for sports injuries,
                posture correction, joint pain, paralysis rehabilitation,
                and mobility recovery with personalized expert care.

              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
                >

                  Book Appointment

                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="border border-white/25 bg-white/5 hover:bg-white hover:text-black text-white px-7 py-3 rounded-full font-medium transition-all duration-300"
                >

                  Our Services

                </motion.button>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-9 max-w-sm mx-auto lg:mx-0">

                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-center"
                >

                  <h3 className="text-2xl font-semibold text-green-400">
                    10+
                  </h3>

                  <p className="text-gray-200 mt-1 text-sm">
                    Experience
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-center"
                >

                  <h3 className="text-2xl font-semibold text-green-400">
                    5000+
                  </h3>

                  <p className="text-gray-200 mt-1 text-sm">
                    Patients
                  </p>

                </motion.div>

              </div>

            </motion.div>

            {/* ================= RIGHT CARD ================= */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="hidden lg:flex justify-end"
            >

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="relative bg-white/10 border border-white/15 backdrop-blur-2xl rounded-[28px] p-7 w-full max-w-[390px] shadow-[0_15px_50px_rgba(0,0,0,0.22)] overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-green-400/10 blur-[70px] rounded-full"></div>

                {/* Heading */}
                <div className="relative z-10">

                  <span className="text-green-400 text-xs tracking-[2px] uppercase font-medium">
                    Why Choose Us
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold text-white leading-snug">

                    Trusted Recovery &
                    Physiotherapy Care

                  </h3>

                </div>

                {/* Features */}
                <div className="relative z-10 mt-7 space-y-4">

                  {features.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4 }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 transition-all duration-300"
                    >

                      <h4 className="text-base font-medium text-green-400">
                        {item.title}
                      </h4>

                      <p className="text-gray-300 mt-2 leading-6 text-sm">
                        {item.desc}
                      </p>

                    </motion.div>
                  ))}

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ================= DOTS ================= */}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.15 }}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "bg-green-500 w-8 h-2.5"
                : "bg-white/70 w-2.5 h-2.5"
            }`}
          />
        ))}

      </div>

    </section>
  
  );
};

export default AboutDoctor;