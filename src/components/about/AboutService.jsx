import { motion } from "framer-motion";
import {
  HeartPulse,
  Bone,
  Dumbbell,
  Activity,
  Accessibility,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: <HeartPulse size={34} />,
    title: "Pain Relief Therapy",
    desc: "Advanced therapy for neck pain, back pain, and muscle stiffness recovery.",
  },
  {
    icon: <Bone size={34} />,
    title: "Orthopedic Rehab",
    desc: "Specialized rehabilitation for fractures, arthritis, and joint recovery.",
  },
  {
    icon: <Dumbbell size={34} />,
    title: "Sports Injury Care",
    desc: "Professional physiotherapy treatment for sports-related injuries.",
  },
  {
    icon: <Accessibility size={34} />,
    title: "Paralysis Therapy",
    desc: "Focused rehabilitation programs for movement and coordination recovery.",
  },
  {
    icon: <Activity size={34} />,
    title: "Post Surgery Rehab",
    desc: "Safe recovery programs designed after surgeries and operations.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Posture Correction",
    desc: "Improve body balance, flexibility, and posture with expert care.",
  },
];

const AboutService = () => {
  return (
    <section className="relative bg-[#06110D] py-28 px-6 md:px-12 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-green-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-emerald-400/20 blur-[180px] rounded-full"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          <p className="text-green-400 uppercase tracking-[7px] font-semibold mb-5">
            Physiotherapy Excellence
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
            Premium Care
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent">
              For Your Recovery
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-9 mt-8 max-w-3xl mx-auto">
            Combining advanced physiotherapy techniques with personalized
            rehabilitation programs to help you recover faster,
            move better, and live pain-free.
          </p>

        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative"
            >

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 h-full transition-all duration-500 hover:-translate-y-4 hover:border-green-400/40 hover:shadow-[0_25px_80px_rgba(34,197,94,0.35)]">

                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 via-transparent to-emerald-300/10"></div>
                </div>

                {/* Top Light */}
                <div className="absolute -top-24 -right-20 w-44 h-44 bg-green-400/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Number */}
                <h1 className="absolute top-5 right-6 text-[90px] font-black text-white/[0.03] group-hover:text-green-400/[0.06] transition duration-500">
                  0{index + 1}
                </h1>

                {/* Icon Box */}
                <div className="relative z-10 w-20 h-20 rounded-[28px] bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] group-hover:scale-110 group-hover:rotate-3 transition duration-500">

                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-[28px] bg-white/10"></div>

                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-3xl font-bold text-white mt-9 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-400 leading-8 mt-5 text-[17px] group-hover:text-gray-200 transition duration-300">
                  {service.desc}
                </p>

                {/* Bottom */}
                <div className="relative z-10 flex items-center justify-between mt-12">

                  <button className="text-green-400 font-semibold flex items-center gap-2 text-lg group-hover:text-white transition duration-300">
                    Discover More
                  </button>

                  <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300">

                    <ArrowUpRight size={22} />

                  </div>

                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-green-400 to-emerald-200 group-hover:w-full transition-all duration-700"></div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutService;