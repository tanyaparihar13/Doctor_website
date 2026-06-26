import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Activity,
  HeartPulse,
  Bone,
  Dumbbell,
  Brain,
  Accessibility,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

// Images
import physio1 from "../../assets/images/physio1.jpg";
import physio2 from "../../assets/images/physio2.jpg";
import physio3 from "../../assets/images/physio3.jpg";
import physio4 from "../../assets/images/physio4.jpg";
import physio5 from "../../assets/images/physio5.jpg";
import physio6 from "../../assets/images/physio6.jpg";

const services = [
  {
    icon: <HeartPulse size={20} />,
    image: physio1,
    title: "Pain Management Therapy",
    slug: "pain-management-therapy",
    desc: "Our advanced pain management therapies are designed to reduce chronic pain, improve flexibility, and restore your body’s natural movement through personalized physiotherapy treatments and expert rehabilitation care.",
  },

  {
    icon: <Bone size={20} />,
    image: physio2,
    title: "Post Surgery Rehabilitation",
    slug: "post-surgery-rehabilitation",
    desc: "We provide specialized orthopedic rehabilitation programs for fractures, joint replacements, ligament injuries, and post-surgical recovery with focused mobility improvement and strength restoration.",
  },

  {
    icon: <Dumbbell size={20} />,
    image: physio3,
    title: "Sports Injury Rehab",
    slug: "sports-injury-rehab",
    desc: "Professional sports physiotherapy treatments focused on faster muscle recovery, injury prevention, mobility enhancement, and performance improvement for athletes and active individuals.",
  },

  {
    icon: <Brain size={20} />,
    image: physio4,
    title: "Neurological Rehabilitation",
    slug: "neurological-rehabilitation",
    desc: "Comprehensive neurological rehabilitation for stroke recovery, paralysis management, balance disorders, and other neurological conditions with advanced physiotherapy techniques.",
  },

  {
    icon: <Accessibility size={20} />,
    image: physio5,
    title: "Neck & Shoulder Pain",
    slug: "neck-shoulder-pain",
    desc: "Improve spinal alignment, body posture, and muscular balance with corrective physiotherapy sessions designed to relieve discomfort and enhance long-term body mechanics.",
  },

  {
    icon: <Activity size={20} />,
    image: physio6,
    title: "Home Physiotherapy",
    slug: "home-physiotherapy",
    desc: "Get professional physiotherapy treatments at home with personalized rehabilitation plans, one-on-one attention, and expert guidance for convenient recovery and wellness.",
  },
];

const Services = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#f7faf8] via-white to-[#eef7f1]">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-[320px] h-[320px] bg-green-200/40 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-emerald-200/40 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-green-100 shadow-lg">

            <Sparkles size={14} className="text-green-600" />

            <span className="uppercase tracking-[3px] text-[11px] font-bold text-green-700">
              Our Premium Services
            </span>

          </div>

          {/* H2 Heading */}
         <div className="text-center">
  


  {/* Main Heading (H2) */}
  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-[#0d3b31] leading-tight">
    Advanced Physiotherapy{" "}
    <span className="block text-green-600">
      Recovery Solutions
    </span>
  </h2>

  {/* Subtitle */}
  <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-7">
    World-class physiotherapy treatments for pain relief, mobility,
    rehabilitation, and long-term wellness.
  </p>

</div>

        </motion.div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="mt-14 md:mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-6">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >

              <Link
                to={`/services/${service.slug}`}
                className="block h-full"
              >

                <div className="relative h-full rounded-[28px] overflow-hidden bg-white border border-green-100 shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_70px_rgba(16,185,129,0.15)] transition-all duration-700">

                  {/* ================= IMAGE ================= */}
                  <div className="relative h-[210px] overflow-hidden">

                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8 }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041713]/90 via-[#041713]/20 to-transparent" />

                    {/* Number */}
                    <div className="absolute top-4 right-5 text-[50px] font-black text-white/10">
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center shadow-xl">

                      {service.icon}

                    </div>

                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="p-6 flex flex-col h-[calc(100%-210px)]">

                    {/* Label */}
                    <div className="flex items-center gap-2 text-green-600 text-[10px] font-bold uppercase tracking-[2px]">

                      <ShieldCheck size={12} />

                      Expert Physiotherapy

                    </div>

                    {/* H3 Title */}
                    <h3 className="mt-3 text-[22px] md:text-[24px] font-bold text-[#0d3b31] leading-tight">

                      {service.title}

                    </h3>

                    {/* Divider */}
                    <div className="mt-4 w-14 h-[3px] rounded-full bg-gradient-to-r from-green-400 to-emerald-700" />

                    {/* Description */}
                    <p className="mt-4 text-gray-600 text-[14px] leading-7 text-justify flex-grow">

                      {service.desc}

                    </p>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center justify-between">

                      <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">

                        <span className="group-hover:translate-x-1 transition-all duration-300">
                          Discover More
                        </span>

                        <ArrowRight
                          size={15}
                          className="group-hover:translate-x-1 transition-all duration-300"
                        />

                      </div>

                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-[#0d3b31] text-white flex items-center justify-center shadow-lg">

                        <ArrowRight size={15} />

                      </div>

                    </div>

                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-green-200 transition-all duration-700 pointer-events-none" />

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;