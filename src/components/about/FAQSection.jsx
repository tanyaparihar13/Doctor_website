import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What conditions do you treat?",
    answer:
      "We provide treatment for back pain, neck pain, slip disc, sciatica, frozen shoulder, arthritis, sports injuries, paralysis recovery, posture correction, and rehabilitation therapy using advanced physiotherapy techniques.",
  },
  {
    question: "How many sessions are required?",
    answer:
      "The number of physiotherapy sessions depends on the patient’s condition, severity of pain, and recovery progress. Some patients recover in a few sessions while others may require long-term rehabilitation.",
  },
  {
    question: "Do you provide home physiotherapy services?",
    answer:
      "Yes, we offer home physiotherapy services for elderly patients, post-surgery recovery, paralysis rehabilitation, and patients with mobility difficulties who cannot visit the clinic.",
  },
  {
    question: "Is physiotherapy treatment painful?",
    answer:
      "Physiotherapy is generally safe and non-invasive. Some exercises may cause mild discomfort initially, but the overall treatment is focused on reducing pain and improving movement.",
  },
  {
    question: "Can physiotherapy avoid surgery?",
    answer:
      "In many cases, physiotherapy helps strengthen muscles, improve mobility, and reduce pain, which may reduce or eliminate the need for surgery depending on the condition.",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#f8fbf9] overflow-hidden">

      {/* Background Glow Animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-[140px] opacity-60"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-[140px] opacity-60"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-green-100 shadow-md">
            <span className="text-xs uppercase tracking-[3px] font-bold text-green-700">
              FAQ Section
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d3b31] leading-snug">
            Frequently Asked{" "}
            <span className="block font-semibold bg-gradient-to-r from-[#16a34a] via-[#15803d] to-[#0d3b31] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-600 leading-7 text-justify">
            Find answers about physiotherapy treatments, recovery process, and rehabilitation care.
            We help you understand your condition and guide you toward the right treatment plan.
          </p>
        </motion.div>

        {/* ================= FAQ LAYOUT ================= */}
        <div className="grid lg:grid-cols-2 gap-14 mt-20 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="sticky top-10"
          >
            <div className="relative bg-gradient-to-br from-green-600 to-emerald-500 rounded-[40px] p-10 shadow-xl overflow-hidden">

              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center"
              >
                <ShieldCheck size={40} className="text-white" />
              </motion.div>

              <h3 className="mt-8 text-3xl md:text-4xl font-bold text-white leading-snug">
                Need Expert Physiotherapy Care?
              </h3>

              <p className="mt-5 text-white/90 text-base md:text-lg leading-7 text-justify">
                Get personalized physiotherapy treatment for pain relief, injury recovery,
                and long-term mobility improvement with expert care.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10 text-white">
                <div className="bg-white/10 p-5 rounded-2xl">
                  <h4 className="text-2xl font-bold">10+</h4>
                  <p className="text-sm mt-1">Years Experience</p>
                </div>

                <div className="bg-white/10 p-5 rounded-2xl">
                  <h4 className="text-2xl font-bold">5000+</h4>
                  <p className="text-sm mt-1">Happy Patients</p>
                </div>
              </div>

              {/* 🔥 CTA BUTTON (CONTACT PAGE) */}
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-10 bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition"
                >
                  Contact Us Now
                </motion.button>
              </Link>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`rounded-2xl border bg-white transition-all duration-300 ${
                  active === index
                    ? "border-green-200 shadow-lg"
                    : "border-gray-100"
                }`}
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: active === index ? 180 : 0 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-50 text-green-600"
                  >
                    {active === index ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-gray-600 text-base leading-7 text-justify">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;