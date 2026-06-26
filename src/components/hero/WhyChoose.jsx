import { motion } from "framer-motion";
import {
  Brain,
  ClipboardCheck,
  Activity,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const recoverySteps = [
  {
    icon: <Brain size={30} />,
    title: "ASSESS",
    subtitle: "ROOT-CAUSE",
    heading: "AI + Physio Precision",
    desc: "Identify the exact cause of pain through advanced physiotherapy assessments and expert analysis.",
  },

  {
    icon: <ClipboardCheck size={30} />,
    title: "PLAN",
    subtitle: "SMART-GOALS",
    heading: "Personalized Recovery Map",
    desc: "Customized rehabilitation programs designed around your recovery goals and lifestyle.",
  },

  {
    icon: <Activity size={30} />,
    title: "TRACK",
    subtitle: "PROGRESS",
    heading: "Proof of Recovery",
    desc: "Monitor every improvement with measurable physiotherapy progress and guided care.",
  },

  {
    icon: <HeartHandshake size={30} />,
    title: "ADVANCE",
    subtitle: "LONG-TERM CARE",
    heading: "Care Beyond Clinic",
    desc: "Continuous exercise guidance and preventive care for lasting mobility and wellness.",
  },
];

const topCards = [
  {
    icon: <Brain size={28} />,
    title: "Advanced Clinics",
    desc: "Modern infrastructure, latest technology and expert physiotherapists for faster recovery.",
  },

  {
    icon: <ClipboardCheck size={28} />,
    title: "Home Care",
    desc: "Professional physiotherapy sessions at home with personalized rehabilitation support.",
  },

  {
    icon: <Activity size={28} />,
    title: "Tele Rehab",
    desc: "Virtual physiotherapy guidance with expert mentoring and recovery tracking.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eefcf4] via-[#f8fffb] to-[#dcfce7] py-16 sm:py-20 lg:py-24">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-green-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-emerald-300/20 blur-[120px] rounded-full"></div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">

            <Sparkles size={16} />

            WHY CHOOSE US

          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0d3b31] leading-[1.15]">

            Advanced Recovery

            <span className="block text-green-600 mt-2">
              With Expert Care
            </span>

          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-8 max-w-3xl mx-auto">

            Experience a modern physiotherapy recovery system focused on
            assessment, personalized rehabilitation planning, progress
            tracking, and long-term wellness support.

          </p>

        </motion.div>

        {/* ================= TOP FEATURE CARDS ================= */}

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {topCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[28px] bg-[#0d3b31] p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.12)]"
            >

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-green-300 backdrop-blur-md"
                >

                  {card.icon}

                </motion.div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-gray-300 leading-7 text-sm sm:text-base">
                  {card.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* ================= RECOVERY PROCESS ================= */}

        <div className="mt-20">

          {/* Process Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-2 bg-white border border-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">

              <HeartHandshake size={16} />

              OUR RECOVERY PROCESS

            </div>

            <h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3b31] leading-tight">

              AI Precision Recovery

            </h3>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8 text-sm sm:text-base">

              Our step-by-step physiotherapy process combines expert care,
              personalized planning, and continuous recovery tracking for
              long-term wellness.

            </p>

          </motion.div>

          {/* ================= PROCESS CARDS ================= */}

          <div className="relative mt-16">

            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-20 left-0 w-full h-[2px] bg-gradient-to-r from-green-200 via-emerald-300 to-green-200"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

              {recoverySteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >

                  {/* Card */}
                  <div className="relative h-full bg-white/80 backdrop-blur-md border border-green-100 rounded-[30px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)] transition-all duration-500 overflow-hidden text-center">

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Step Number */}
                    <div className="absolute top-3 right-4 text-[60px] font-bold text-green-50 leading-none">
                      0{index + 1}
                    </div>

                    {/* Icon Circle */}
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-[#0d3b31] flex items-center justify-center text-white shadow-[0_20px_60px_rgba(16,185,129,0.25)]"
                    >

                      {/* Rotating Ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 14,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-[8px] rounded-full border-2 border-dashed border-white/30"
                      />

                      <div className="relative z-10">
                        {item.icon}
                      </div>

                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 mt-8">

                      <h4 className="text-2xl font-bold text-[#0d3b31]">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs uppercase tracking-[3px] font-semibold text-green-600">
                        {item.subtitle}
                      </p>

                      {/* Divider */}
                      <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mt-5"></div>

                      <h5 className="mt-5 text-xl font-semibold text-[#12372d] leading-snug">
                        {item.heading}
                      </h5>

                      <p className="mt-4 text-sm sm:text-[15px] leading-7 text-gray-600">
                        {item.desc}
                      </p>

                    </div>

                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-[#0d3b31] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;