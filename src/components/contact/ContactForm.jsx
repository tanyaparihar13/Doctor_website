import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello,
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/916394816035?text=${encodedText}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact-form"
      className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[4px] text-green-600 font-semibold">
              Contact Now
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4 leading-tight">
              Let’s Start Your Recovery Journey Today
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Fill out the form and our team will contact you
              quickly regarding appointments and treatment.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md">
                <Phone className="text-green-700" />
                <span className="text-gray-700 font-medium">
                  +91 6394816035
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md">
                <Mail className="text-green-700" />
                <span className="text-gray-700 font-medium">
                  info@drjangclinic.com
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md">
                <CheckCircle className="text-green-700" />
                <span className="text-gray-700 font-medium">
                  Quick Response Available
                </span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[30px] shadow-2xl p-8 md:p-10 border border-green-100"
          >

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-60"></div>

            <h3 className="text-3xl font-bold text-green-900 mb-8 relative z-10">
              Send Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >

              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-200 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                ></textarea>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default ContactForm;