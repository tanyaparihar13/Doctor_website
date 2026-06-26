import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Star,
  HeartPulse,
} from "lucide-react";

import { Link } from "react-router-dom";


// Background Images
import physio1 from "../../assets/images/physio1.jpg";
import physio5 from "../../assets/images/physio5.jpg";

// Doctor Image
import doctor from "../../assets/images/jung1.webp";

const Hero = () => {
  return (

    <section className="relative w-full overflow-hidden text-white min-h-screen lg:h-screen flex items-center py-10 lg:py-0">

      {/* ================= BACKGROUND IMAGES ================= */}

      <div className="absolute inset-0">

        {/* Image 1 */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: [1, 0, 1],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${physio1})`,
          }}
        />

        {/* Image 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1.02, 1, 1.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${physio5})`,
          }}
        />

      </div>

      {/* ================= DARK OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/75"></div>

      {/* ================= GLOW EFFECTS ================= */}

      <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] bg-green-500/20 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-[-80px] right-[-80px] w-[220px] h-[220px] bg-emerald-400/10 blur-[100px] rounded-full"></div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}

          <div className="text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full"
            >

              <Star
                size={14}
                className="text-yellow-400 fill-yellow-400"
              />

              <span className="text-xs sm:text-sm font-medium">
                Trusted Physiotherapy & Rehab Center
              </span>

            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-5 text-3xl sm:text-5xl xl:text-6xl font-bold leading-[1.1]"
            >

              Restore Your

              <span className="block text-green-400 mt-1">
                Strength & Mobility
              </span>

            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >

              We provide advanced physiotherapy treatments with personalized
              rehabilitation programs to reduce pain, improve movement,
              and help you recover faster.

            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >

              {/* Book Appointment */}
              <Link
                to="/contact"
                className="group w-full sm:w-auto bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:scale-105"
              >

                Book Appointment

                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />

              </Link>

              {/* Request Callback */}
              <a
                href="tel:+916394816035"
                className="w-full sm:w-auto bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >

                <Phone size={17} />

                Request Callback

              </a>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-7 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
            >

              {/* Experience */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-xl p-3 text-center">

                <h3 className="text-xl font-bold text-green-400">
                  10+
                </h3>

                <p className="text-gray-300 text-xs mt-1">
                  Experience
                </p>

              </div>

              {/* Patients */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-xl p-3 text-center">

                <h3 className="text-xl font-bold text-green-400">
                  5K+
                </h3>

                <p className="text-gray-300 text-xs mt-1">
                  Patients
                </p>

              </div>

              {/* Recovery */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-xl p-3 text-center">

                <h3 className="text-xl font-bold text-green-400">
                  98%
                </h3>

                <p className="text-gray-300 text-xs mt-1">
                  Recovery
                </p>

              </div>

            </motion.div>

          </div>

          {/* ================= RIGHT DOCTOR CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative bg-white/10 border border-white/20 backdrop-blur-xl p-3 rounded-[24px] shadow-2xl w-full max-w-[280px] lg:max-w-[310px]">

              {/* Floating Icon */}
              <div className="absolute -top-3 -right-3 bg-green-500 p-2.5 rounded-xl shadow-xl z-20">

                <HeartPulse size={18} />

              </div>

              {/* Doctor Image */}
              <div className="overflow-hidden rounded-[20px]">

                <img
                  src={doctor}
                  alt="Dr. Jang Bahadur"
                  className="w-full h-[280px] lg:h-[340px] object-cover hover:scale-105 transition-all duration-700"
                />

              </div>

              {/* Doctor Info */}
              <div className="mt-4 text-center">

                <h2 className="text-lg lg:text-xl font-bold">
                  Dr. Jang Bahadur
                </h2>

                <p className="text-green-400 mt-1 text-sm">
                  Senior Physiotherapist
                </p>

                <p className="text-gray-300 mt-2 text-xs leading-relaxed">

                  Specialized in rehabilitation therapy, posture correction,
                  and pain management treatments.

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
   
  );
};

export default Hero;