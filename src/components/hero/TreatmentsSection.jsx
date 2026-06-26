import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Activity,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

const conditions = [
  "Lumbar Spondylosis",
  "Sciatica",
  "Frozen Shoulder",
  "Slip Disc",
  "Arthritis",
  "Stroke Rehab",
];

const symptoms = [
  "Back Pain",
  "Neck Pain",
  "Joint Pain",
  "Knee Pain",
  "Shoulder Pain",
  "Muscle Stiffness",
];

const therapies = [
  "IFT Therapy",
  "Laser Therapy",
  "Dry Needling",
  "Shockwave Therapy",
  "Manual Therapy",
  "Cupping Therapy",
];

const services = [
  "Sports Physiotherapy",
  "Pediatric Physiotherapy",
  "Home Care",
  "Neuro Rehab",
  "Post Surgery Rehab",
  "Chiropractic Care",
];

const sections = [
  {
    title: "Conditions",
    subtitle: "Expert Care",
    icon: <ShieldCheck size={26} />,
    data: conditions,
    gradient: "from-[#16a34a] via-[#15803d] to-[#0d3b31]",
    lightBg: "bg-green-50",
    border: "border-green-100",
    number: "01",
  },

  {
    title: "Symptoms",
    subtitle: "Pain Relief",
    icon: <HeartPulse size={26} />,
    data: symptoms,
    gradient: "from-[#22c55e] via-[#10b981] to-[#065f46]",
    lightBg: "bg-emerald-50",
    border: "border-emerald-100",
    number: "02",
  },

  {
    title: "Therapies",
    subtitle: "Advanced Recovery",
    icon: <Activity size={26} />,
    data: therapies,
    gradient: "from-[#15803d] via-[#166534] to-[#052e16]",
    lightBg: "bg-green-50",
    border: "border-green-100",
    number: "03",
  },

  {
    title: "Services",
    subtitle: "Premium Treatments",
    icon: <Stethoscope size={26} />,
    data: services,
    gradient: "from-[#65a30d] via-[#16a34a] to-[#14532d]",
    lightBg: "bg-lime-50",
    border: "border-lime-100",
    number: "04",
  },
];

const TreatmentSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f6fbf8]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-green-200/30 blur-[130px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-emerald-200/30 blur-[130px] rounded-full"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">

        {/* Heading */}
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
      Physiotherapy Treatments
    </span>
  </div>

  {/* CLEAN H2 (less heavy, more professional) */}
  <h3 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d3b31] leading-snug">
    Advanced Recovery{" "}
    <span className="block font-semibold bg-gradient-to-r from-[#16a34a] via-[#15803d] to-[#0d3b31] bg-clip-text text-transparent">
      Solutions For Every Need
    </span>
  </h3>

  <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-7">
    Premium physiotherapy programs designed for pain relief,
    rehabilitation, mobility improvement and complete wellness care
    with modern recovery techniques.
  </p>

</motion.div>

      

        {/* Layout */}
        <div className="mt-20 space-y-8">

          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group"
            >

              <div className="relative overflow-hidden rounded-[35px] bg-white border border-green-100 shadow-[0_15px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_90px_rgba(16,185,129,0.12)] transition-all duration-700">

                {/* Hover Glow */}
                <div className="absolute -top-24 -right-24 w-52 h-52 bg-green-200/30 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                <div className="grid lg:grid-cols-[330px_1fr] items-center">

                  {/* Left Side */}
                  <div
                    className={`relative h-full bg-gradient-to-br ${item.gradient} p-10 text-white overflow-hidden`}
                  >

                    {/* Big Number */}
                    <div className="absolute top-0 right-4 text-[120px] font-black text-white/10 leading-none">
                      {item.number}
                    </div>

                    {/* Floating Icon */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="relative z-10 w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                    >
                      {item.icon}
                    </motion.div>

                    {/* Subtitle */}
                    <p className="mt-8 text-sm uppercase tracking-[4px] font-semibold text-white/80">
                      {item.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="mt-3 text-4xl font-black leading-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-6 text-white/80 leading-8 text-[15px]">
                      Personalized physiotherapy care using modern treatment
                      methods focused on faster recovery, mobility enhancement
                      and long-term physical wellness.
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-8 w-16 h-[4px] rounded-full bg-white/50"></div>
                  </div>

                  {/* Right Side */}
                  <div className="p-8 md:p-10">

                    <div className="grid sm:grid-cols-2 gap-4">

                      {item.data.map((text, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ x: 6 }}
                          className={`group/item flex items-center justify-between rounded-2xl border ${item.border} ${item.lightBg} px-5 py-4 hover:bg-white hover:shadow-lg transition-all duration-300`}
                        >

                          <div className="flex items-center gap-3">

                            {/* Icon */}
                            <div
                              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-md`}
                            >
                              <ChevronRight size={18} />
                            </div>

                            {/* Text */}
                            <span className="text-[15px] font-semibold text-[#12372d]">
                              {text}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Gradient Line */}
                    <div
                      className={`mt-8 h-[4px] w-full rounded-full bg-gradient-to-r ${item.gradient}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;