import { motion } from "framer-motion";
import {
  CheckCircle,
  HeartPulse,
  Activity,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

// Images
import ja1 from "../../assets/images/ja1.webp";
import jangbhadhur from "../../assets/images/jangbhadhur.webp";

const features = [
  "Personalized Physiotherapy Treatments",
  "Advanced Rehabilitation Programs",
  "Experienced Physiotherapy Experts",
  "Modern Equipment & Therapy Techniques",
];

const About = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-[#ecfdf5] via-[#f7fff9] to-[#dcfce7]">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute top-0 left-0 w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] bg-green-300/20 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] bg-emerald-300/20 blur-[100px] rounded-full"></div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ================= LEFT IMAGE SECTION ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 flex justify-center"
          >

            <div className="relative w-full max-w-[520px]">

              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-[24px] sm:rounded-[30px] shadow-2xl border border-green-100"
              >

                <img
                  src={ja1}
                  alt="Physiotherapy Treatment"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b31]/30 to-transparent"></div>

              </motion.div>

              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 right-2 sm:right-5 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-3 w-[180px] sm:w-[220px] border border-green-100"
              >

                <img
                  src={jangbhadhur}
                  alt="Dr. Jang Bahadur"
                  className="rounded-xl h-[120px] sm:h-[150px] w-full object-cover"
                />

                <div className="mt-3 text-center">

                  <h3 className="text-sm sm:text-lg font-bold text-[#0d3b31]">
                    Expert Recovery Care
                  </h3>

                  <p className="text-[11px] sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Helping patients regain mobility and live pain-free.
                  </p>

                </div>

              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-4 left-4 bg-[#0d3b31] text-white rounded-2xl px-4 py-3 shadow-xl"
              >

                <h3 className="text-2xl sm:text-3xl font-bold">
                  10+
                </h3>

                <p className="text-[10px] sm:text-xs text-green-100 mt-1">
                  Years Experience
                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm"
            >

              <HeartPulse size={16} />

              ABOUT OUR CLINIC

            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3b31] leading-tight"
            >

              Restoring Movement,

              <span className="block text-green-600 mt-1 sm:mt-2">
                Relieving Pain
              </span>

            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-5 text-gray-700 text-sm sm:text-base leading-7 sm:leading-8 max-w-2xl mx-auto lg:mx-0"
            >

              We provide advanced physiotherapy and rehabilitation
              treatments focused on improving mobility, reducing pain,
              and helping patients recover faster with personalized care.
              Our experienced therapists use modern techniques and
              evidence-based therapies to ensure long-term wellness.

            </motion.p>

            {/* ================= FEATURES ================= */}

            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white/70 backdrop-blur-md border border-green-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left"
                >

                  <div className="min-w-[40px] min-h-[40px] rounded-xl bg-green-100 flex items-center justify-center">

                    <CheckCircle
                      size={20}
                      className="text-green-600"
                    />

                  </div>

                  <p className="text-gray-700 font-medium leading-relaxed text-sm">
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* ================= STATS ================= */}

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">

              {/* Patients */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md border border-green-100 rounded-2xl p-4 sm:p-5 text-center shadow-md"
              >

                <Activity
                  size={28}
                  className="mx-auto text-green-600"
                />

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0d3b31]">
                  5K+
                </h3>

                <p className="mt-1 text-gray-600 text-xs sm:text-sm">
                  Happy Patients
                </p>

              </motion.div>

              {/* Recovery */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md border border-green-100 rounded-2xl p-4 sm:p-5 text-center shadow-md"
              >

                <HeartPulse
                  size={28}
                  className="mx-auto text-green-600"
                />

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0d3b31]">
                  98%
                </h3>

                <p className="mt-1 text-gray-600 text-xs sm:text-sm">
                  Recovery Success
                </p>

              </motion.div>

              {/* Trusted */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md border border-green-100 rounded-2xl p-4 sm:p-5 text-center shadow-md col-span-2 md:col-span-1"
              >

                <ShieldCheck
                  size={28}
                  className="mx-auto text-green-600"
                />

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0d3b31]">
                  100%
                </h3>

                <p className="mt-1 text-gray-600 text-xs sm:text-sm">
                  Trusted Care
                </p>

              </motion.div>

            </div>

            {/* ================= CTA BUTTON ================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >

              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              >

                Explore More

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />

              </Link>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;