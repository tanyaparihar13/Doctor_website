import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How many physiotherapy sessions do I need?",
    a: "It depends on your condition. After assessment, we design a personalized recovery plan for fast healing.",
  },
  {
    q: "Do you provide home physiotherapy service?",
    a: "Yes, we provide professional home visits with proper equipment and expert guidance.",
  },
  {
    q: "Is physiotherapy painful?",
    a: "No, treatment is focused on pain relief. Some movements may feel mild pressure but are safe.",
  },
  {
    q: "Which conditions do you treat?",
    a: "We treat back pain, neck pain, arthritis, sports injuries, post-surgery rehab and neurological cases.",
  },
];

export default function Faqs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative py-28 bg-[#f6fbf8] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-green-300/30 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-emerald-300/30 blur-[150px] rounded-full" />

      {/* Container */}
      <div className="relative max-w-5xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-5 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-green-100 text-green-700 text-sm font-semibold shadow-sm">
            ❓ FAQs
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#0d3b31]">
            Frequently Asked
            <span className="block text-green-600">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Cards */}
        <div className="space-y-6">

          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[28px] border transition-all duration-500 cursor-pointer overflow-hidden
                ${open === i
                  ? "bg-white/60 backdrop-blur-2xl border-green-300 shadow-[0_20px_80px_rgba(16,185,129,0.15)] scale-[1.01]"
                  : "bg-white/30 border-white/40 hover:bg-white/50"
                }
              `}
            >

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-green-200/20 to-transparent" />

              {/* Question */}
              <div
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between px-7 py-6 relative z-10"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#12372d]">
                  {item.q}
                </h3>

                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                    ${open === i
                      ? "bg-green-600 text-white rotate-45"
                      : "bg-green-100 text-green-600"
                    }
                  `}
                >
                  <Plus size={18} />
                </div>
              </div>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: open === i ? "auto" : 0,
                  opacity: open === i ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="px-7 pb-6 text-gray-600 leading-7">
                  {item.a}
                </div>
              </motion.div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}