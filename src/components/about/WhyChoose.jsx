import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  Activity,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Experienced Doctor",
    desc: "10+ years of expertise in advanced physiotherapy and rehabilitation care.",
  },
  {
    icon: <HeartPulse size={40} />,
    title: "Pain Relief Therapy",
    desc: "Specialized treatments focused on reducing pain and improving mobility.",
  },
  {
    icon: <Activity size={40} />,
    title: "Modern Techniques",
    desc: "Advanced physiotherapy methods for faster recovery and long-term wellness.",
  },
  {
    icon: <UserCheck size={40} />,
    title: "Personalized Care",
    desc: "Customized therapy plans designed according to every patient’s condition.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="text-green-600 uppercase tracking-[4px] font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Expert Physiotherapy Care
            You Can Trust
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            We provide professional physiotherapy treatments focused on
            pain relief, rehabilitation, mobility improvement, and
            long-term recovery with personalized patient care.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition duration-300 border border-gray-100 group"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;