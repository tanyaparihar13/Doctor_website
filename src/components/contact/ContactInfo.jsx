import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  const cards = [
    {
      icon: <Phone size={34} />,
      title: "Phone",
      detail: "+91 6394816035",
      link: "tel:+916394816035",
    },
    {
      icon: <Mail size={34} />,
      title: "Email",
      detail: "info@drjangclinic.com",
      link: "mailto:info@drjangclinic.com",

    },
    {
      icon: <MapPin size={34} />,
      title: "Address",
      detail: "Ground Floor, BLOCK A-524, Opposite Gardenia Glory, Sector 46, Noida",
      link: "https://share.google/92wJMs3O0BCdTxXK7",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[4px] text-green-600 font-semibold">
            Reach Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
            Contact Information
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            We're always available for appointments,
            consultations, and support.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotate: 1,
              }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl shadow-xl border border-green-100 p-10 text-center overflow-hidden group"
            >

              {/* Animated Background */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear",
                }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-40"
              ></motion.div>

              {/* Icon */}
             <a
  href={item.link}
  className="block"
>
  <motion.div
    whileHover={{
      rotate: [0, -10, 10, -10, 0],
      scale: 1.15,
    }}
    transition={{ duration: 0.6 }}
    className="relative z-10 w-20 h-20 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center shadow-lg mb-6 cursor-pointer"
  >
    {item.icon}
  </motion.div>
</a>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-green-900 mb-3">
                {item.title}
              </h3>

              {/* Detail */}
              <p className="relative z-10 text-gray-600 text-lg">
                {item.detail}
              </p>

              {/* Bottom Line Animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{
                  duration: 1,
                  delay: index * 0.3,
                }}
                className="h-1 bg-green-600 mx-auto rounded-full mt-6"
              ></motion.div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;