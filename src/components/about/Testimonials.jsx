import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Slip Disc Recovery",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I was suffering from severe lower back pain and slip disc issues for several months. After physiotherapy treatment, my pain reduced significantly and now I can walk comfortably without discomfort.",
  },
  {
    name: "Priya Sharma",
    role: "Neck Pain Treatment",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Very professional physiotherapy care. The treatment sessions and guided exercises helped me recover from chronic neck pain and improved my posture.",
  },
  {
    name: "Rohit Singh",
    role: "Sports Injury Recovery",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "One of the best physiotherapy experiences. The doctor understood my injury properly and provided effective treatment that helped me return to sports quickly.",
  },
  {
    name: "Sneha Gupta",
    role: "Knee Pain Recovery",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "I had long-term knee pain and difficulty in walking. Regular physiotherapy sessions improved my mobility and reduced pain significantly.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#f7fbf9] py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-green-100 shadow-lg">
            <Sparkles size={15} className="text-green-600" />
            <span className="text-xs uppercase tracking-[3px] font-bold text-green-700">
              Patient Reviews
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-medium text-[#0d3b31] leading-tight">
  What Our <span className="font-semibold text-green-600">Patients Say</span>
</h2>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-7 text-justify">
            We are committed to providing effective physiotherapy care focused on pain relief,
            recovery, and long-term mobility improvement. Here is what our patients
            experienced after treatment.
          </p>
        </motion.div>

        {/* ================= TESTIMONIAL CARD ================= */}
        <div className="relative bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] mt-24 overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 items-center"
            >
              {/* LEFT IMAGE */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400"
                  alt="Physiotherapy treatment"
                  className="w-full h-[600px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-8 left-8 bg-white rounded-2xl px-6 py-4 shadow-xl">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={18} />
                    ))}
                  </div>
                  <p className="text-gray-900 font-bold mt-2">5.0 Google Rating</p>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="p-10 md:p-16 relative">

                <div className="absolute top-10 right-10 text-green-100">
                  <Quote size={90} />
                </div>

                {/* USER */}
                <div className="flex items-center gap-5">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-green-500"
                  />

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {testimonials[current].name}
                    </h3>
                    <p className="text-green-600 mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>

                {/* STARS */}
                <div className="flex gap-1 text-yellow-400 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="text-gray-600 text-lg md:text-xl leading-8 mt-8 text-justify">
                  “{testimonials[current].review}”
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-14 flex-wrap gap-6">

                  <div className="flex items-center gap-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google"
                      className="w-6 h-6"
                    />
                    <span className="text-gray-500 font-medium">
                      Verified Google Reviews
                    </span>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4">
                    <button
                      onClick={prevSlide}
                      className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-600 hover:text-white transition"
                    >
                      <ChevronLeft size={22} />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;