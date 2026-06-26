// ========================= ServiceDetail.jsx =========================

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Activity,
  ShieldPlus,
  Sparkles,
} from "lucide-react";

import services from "./servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-32 text-center text-xl font-semibold">
        Service Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#f7fbf8] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${service.hero.image})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#041713]/80 via-[#041713]/75 to-[#041713]/90" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-5xl mx-auto px-5 text-center"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
            <Sparkles size={15} />
            <span className="uppercase tracking-[3px] text-xs font-bold">
              Physiotherapy Treatment
            </span>
          </div>

          <h1 className="mt-7 text-4xl md:text-7xl font-black text-white leading-tight">
            {service.hero.heading}
          </h1>

          <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mt-7" />

          <p className="mt-7 text-lg leading-9 text-gray-200 max-w-3xl mx-auto">
            {service.hero.description}
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 px-9 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold shadow-2xl"
            >
              Book Appointment
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-28 relative">

        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-20">

           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0d3b31] leading-[1.1] text-center">
  Treatment Highlights
</h2>

            <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-green-400 to-emerald-700 mx-auto mt-6" />

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {service.features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -10 }}
                className="group"
              >

                <div className="relative h-full rounded-[30px] bg-white border border-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-[0_35px_90px_rgba(16,185,129,0.14)] overflow-hidden transition-all duration-700">

                  <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-green-400 to-emerald-700" />

                  <div className="p-8">

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-[#0d3b31] text-white flex items-center justify-center shadow-xl"
                    >
                      <Activity />
                    </motion.div>

                    <h3 className="mt-6 text-xl font-bold text-[#0d3b31] leading-8">
                      {item}
                    </h3>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-white">

        <div className="max-w-6xl mx-auto px-5">

          <div className="text-center mb-20">

           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0d3b31] leading-[1.1] text-center">
  Recovery Process
</h2>

            <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-green-400 to-emerald-700 mx-auto mt-6" />

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >

                <div className="rounded-[30px] bg-[#f7fbf8] border border-green-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500">

                  <div className="absolute -top-5 left-7 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-[#0d3b31] text-white flex items-center justify-center font-black text-lg shadow-xl">
                    {i + 1}
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-[#0d3b31]">
                    Step {i + 1}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8 text-lg">
                    {step}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 bg-gradient-to-b from-[#eef7f1] via-white to-[#f7fbf8]">

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

          <motion.img
            src={service.benefitsImage}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
          />

          <div>

       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0d3b31] leading-[1.1] text-center">
  <span className="inline">Why Choose </span>
  <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent inline">
    Our Clinic?
  </span>
</h2>

            <div className="mt-10 space-y-5">

              {service.benefits.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-5 bg-white border border-green-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-500"
                >

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-[#0d3b31] text-white flex items-center justify-center shadow-lg">
                    <CheckCircle />
                  </div>

                  <h3 className="text-[#0d3b31] font-semibold text-lg">
                    {item}
                  </h3>

                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#041713] relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_35%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-24 h-24 mx-auto rounded-[30px] bg-gradient-to-br from-green-500 to-emerald-700 text-white flex items-center justify-center shadow-2xl"
          >
            <ShieldPlus size={42} />
          </motion.div>

          <h2 className="mt-8 text-4xl md:text-6xl font-black text-white leading-tight">
            Start Your Recovery
            <span className="block text-green-400">
              Journey Today
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-300 max-w-2xl mx-auto">
            Experience advanced physiotherapy care with personalized
            treatment plans designed for faster recovery and pain-free movement.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold inline-flex items-center gap-3 shadow-2xl"
            >
              Book Consultation
              <ArrowRight size={20} />
            </motion.button>
          </Link>

        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;