import { motion } from "framer-motion";
import {
  Users,
  Smile,
  Award,
  Activity,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={38} />,
    number: "5000+",
    title: "Happy Patients",
  },
  {
    icon: <Activity size={38} />,
    number: "10+",
    title: "Years Experience",
  },
  {
    icon: <Award size={38} />,
    number: "98%",
    title: "Recovery Success",
  },
  {
    icon: <Smile size={38} />,
    number: "24/7",
    title: "Patient Support",
  },
];

const Statistics = () => {
  return (
    <section className="relative bg-[#F7FBF9] py-24 px-6 md:px-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-200 blur-[120px] rounded-full opacity-40"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-emerald-100 blur-[120px] rounded-full opacity-40"></div>

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="text-green-600 uppercase tracking-[6px] font-semibold mb-4">
            Our Achievements
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Trusted By Thousands
            <span className="block text-green-600">
              Of Patients
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-7">
            Delivering advanced physiotherapy care with
            exceptional patient recovery and long-term wellness results.
          </p>

        </motion.div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] border border-green-100 bg-white p-10 text-center hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_20px_70px_rgba(34,197,94,0.15)]"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-emerald-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white shadow-[0_10px_40px_rgba(34,197,94,0.3)] group-hover:scale-110 transition duration-500">

                {item.icon}

              </div>

              {/* Number */}
              <h3 className="relative z-10 text-5xl font-black text-gray-900 mt-8">
                {item.number}
              </h3>

              {/* Title */}
              <p className="relative z-10 text-gray-600 text-lg mt-4 group-hover:text-gray-900 transition duration-300">
                {item.title}
              </p>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-green-500 to-emerald-400 group-hover:w-full transition-all duration-700"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Statistics;