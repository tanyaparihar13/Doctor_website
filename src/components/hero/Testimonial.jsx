import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Sports Injury Recovery",
    text: "Excellent recovery support. My knee pain improved quickly and mobility returned faster than expected.",
  },

  {
    name: "Priya Verma",
    role: "Neck & Back Pain",
    text: "Very professional approach. My posture improved and pain reduced significantly within weeks.",
  },

  {
    name: "Amit Singh",
    role: "Post Surgery Rehab",
    text: "Highly skilled team. They guided me step by step through recovery with great care.",
  },

  {
    name: "Sneha Kapoor",
    role: "Frozen Shoulder",
    text: "Amazing experience. Shoulder mobility improved a lot with consistent therapy sessions.",
  },
];

export default function Testimonial() {
  const [pause, setPause] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eefcf4] via-[#f8fffb] to-[#dcfce7] py-10 sm:py-12 lg:py-14">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-0 left-0 w-[180px] h-[180px] bg-green-300/20 blur-[90px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-emerald-300/20 blur-[90px] rounded-full"></div>

      {/* ================= EDGE FADE ================= */}

      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-[#eefcf4] to-transparent z-10"></div>

      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-[#dcfce7] to-transparent z-10"></div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">

            <Star size={13} fill="currentColor" />

            Patient Testimonials

          </div>

          {/* Heading */}
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d3b31] leading-tight">

            What Our Patients

            <span className="block text-green-600 mt-1">
              Say About Us
            </span>

          </h2>

          {/* Description */}
          <p className="mt-3 text-gray-600 text-sm leading-6 max-w-xl mx-auto">

            Trusted physiotherapy care with expert recovery and rehabilitation support.

          </p>

        </motion.div>

        {/* ================= TESTIMONIAL SLIDER ================= */}

        <div className="mt-7 overflow-hidden relative">

          <motion.div
            className="flex gap-4 w-max"
            onHoverStart={() => setPause(true)}
            onHoverEnd={() => setPause(false)}
            animate={
              pause
                ? {}
                : { x: ["0%", "-50%"] }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {[...reviews, ...reviews].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                }}
                className="w-[250px] sm:w-[280px] lg:w-[300px] shrink-0 group"
              >

                {/* ================= CARD ================= */}

                <div className="relative bg-white/80 backdrop-blur-xl border border-green-100 rounded-[22px] p-4 sm:p-5 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_35px_rgba(16,185,129,0.10)] transition-all duration-500 overflow-hidden">

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-green-100/40 to-transparent transition-all duration-500"></div>

                  {/* Quote Icon */}
                  <div className="relative z-10 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">

                    <Quote
                      size={18}
                      className="text-white"
                    />

                  </div>

                  {/* Stars */}
                  <div className="relative z-10 flex gap-1 mt-3 text-yellow-400">

                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={13}
                        fill="currentColor"
                      />
                    ))}

                  </div>

                  {/* Review Text */}
                  <p className="relative z-10 mt-3 text-gray-700 text-sm leading-6">

                    {item.text}

                  </p>

                  {/* Footer */}
                  <div className="relative z-10 mt-4 pt-3 border-t border-green-100 flex items-center justify-between">

                    <div>

                      <h4 className="font-bold text-[#12372d] text-sm">
                        {item.name}
                      </h4>

                      <p className="text-xs text-gray-500 mt-1">
                        {item.role}
                      </p>

                    </div>

                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 text-white flex items-center justify-center font-bold shadow-md text-sm">

                      {item.name.charAt(0)}

                    </div>

                  </div>

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-green-400 via-emerald-500 to-[#0d3b31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}