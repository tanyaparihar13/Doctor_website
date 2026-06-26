// ========================= ServiceList.jsx =========================

import services from "./servicesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Sparkles,
} from "lucide-react";

const icons = [Activity, HeartPulse, Stethoscope];

const ServiceList = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f7fbf8] via-white to-[#eef7f1]">

      {/* Background Glow */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-green-200/40 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
        transition={{ duration: 24, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-emerald-200/40 blur-[120px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-green-100 shadow-xl"
          >
            <Sparkles size={15} className="text-green-600" />

            <span className="uppercase tracking-[3px] text-xs font-bold text-green-700">
              Physiotherapy Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 text-4xl md:text-6xl font-black text-[#0d3b31] leading-tight"
          >
            Expert Recovery With
            <span className="block bg-gradient-to-r from-green-500 via-emerald-600 to-[#0d3b31] bg-clip-text text-transparent">
              Personalized Care
            </span>
          </motion.h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Advanced physiotherapy treatments designed to reduce pain,
            improve mobility and help you recover faster naturally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => {
            const Icon = icons[i % icons.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >

                <div className="relative h-full rounded-[32px] overflow-hidden bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.07)] hover:shadow-[0_35px_90px_rgba(16,185,129,0.16)] transition-all duration-700">

                  {/* Top Gradient */}
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-green-400 via-emerald-500 to-[#0d3b31]" />

                  {/* Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-200/30 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

                  <div className="p-8 relative z-10">

                    {/* Icon */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-[#0d3b31] text-white flex items-center justify-center shadow-xl"
                    >
                      <Icon size={28} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mt-6 text-2xl font-black text-[#0d3b31] leading-tight">
                      {service.title}
                    </h3>

                    {/* Line */}
                    <div className="mt-4 h-[4px] w-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-700" />

                    {/* Description */}
                    <p className="mt-5 text-gray-600 leading-7 text-[15px]">
                      {service.hero.description}
                    </p>

                    {/* Button */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-7 inline-flex items-center gap-2 text-green-700 font-bold text-sm group-hover:gap-3 transition-all"
                    >
                      Explore Treatment
                      <ArrowRight size={17} />
                    </Link>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;