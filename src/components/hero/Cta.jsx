import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  ArrowRight,
  Info,
  Sparkles,
} from "lucide-react";

// Background Image
import cta1 from "../../assets/images/cta1.jpg";

const Cta = () => {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">

      {/* ================= FULL BACKGROUND IMAGE ================= */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${cta1})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-[#0d3b31]/20 to-[#0d3b31]/80" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-green-400/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-emerald-400/10 blur-[120px] rounded-full"></div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* LEFT ALIGN */}
        <div className="flex justify-center lg:justify-start">

          {/* ================= CTA CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0d3b31]/95 via-[#15803d]/95 to-[#16a34a]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] w-full lg:w-[55%]"
          >

            {/* Animated Glow */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-120px] bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-green-600/10 blur-3xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* ================= CONTENT ================= */}

            <div className="relative z-10 text-white px-6 sm:px-10 lg:px-12 py-12 sm:py-14">

              {/* Badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
              >

                <Sparkles size={13} />

                <span className="text-[11px] sm:text-xs uppercase tracking-[3px] font-semibold">
                  Start Your Recovery Journey
                </span>

              </motion.div>

              {/* Heading */}
              <motion.h2
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              >

                Pain-Free Movement

                <span className="block text-white/90 mt-1">
                  Starts Here
                </span>

              </motion.h2>

              {/* Description */}
              <p className="mt-5 text-white/85 text-sm sm:text-base leading-7 max-w-xl">

                Advanced physiotherapy treatments designed to reduce pain,
                restore mobility, and improve your quality of life with
                expert rehabilitation care.

              </p>

              {/* ================= BUTTONS ================= */}

              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">

                {/* Contact Button */}
                <Link to="/contact">

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-xl"
                  >

                    <PhoneCall size={17} />

                    Book Appointment

                  </motion.button>

                </Link>

                {/* About Button */}
                <Link to="/about">

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
                  >

                    <Info size={17} />

                    Learn More

                    <ArrowRight size={17} />

                  </motion.button>

                </Link>

              </div>

              {/* Animated Line */}
              <motion.div
                animate={{
                  width: ["0px", "140px", "0px"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="h-[2px] bg-white/50 mt-8 rounded-full"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Cta;