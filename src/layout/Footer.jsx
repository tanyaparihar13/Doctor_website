import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

/* LOGO */
import logo1 from "../assets/images/logo1.png";

const Footer = () => {
  // SERVICES LINKS
  const serviceLinks = [
    {
      title: "Back Pain Treatment",
      slug: "back-pain-treatment",
    },
    {
      title: "Sports Injury Rehab",
      slug: "sports-injury-rehab",
    },
    {
      title: "Neck & Shoulder Pain",
      slug: "neck-shoulder-pain",
    },
    {
      title: "Post Surgery Rehabilitation",
      slug: "post-surgery-rehabilitation",
    },
    {
      title: "Neurological Rehabilitation",
      slug: "neurological-rehabilitation",
    },
    {
      title: "Home Physiotherapy",
      slug: "home-physiotherapy",
    },
  ];

  return (
    <footer className="bg-[#041f18] text-white pt-16 pb-6 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TOP SECTION ================= */}

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/10 pb-8">

          {/* ================= CLINIC INFO ================= */}

          <div className="lg:pr-6">

            {/* Logo */}
            <div className="flex justify-center sm:justify-start">

              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
  <img
    src={logo1}
    alt="logo"
    className="w-20 h-20 object-contain"
  />
</div>

            </div>

            {/* Description */}
            <p className="mt-6 text-gray-300 leading-7 text-sm md:text-base text-center sm:text-left">

              Trusted physiotherapy clinic providing advanced
              pain relief, rehabilitation, posture correction,
              sports injury recovery, and personalized therapy
              care in Noida with modern physiotherapy treatments.

            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-4 mt-7">

              {/* WhatsApp */}
              <a
                href="https://wa.me/916394816035"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-700 transition duration-300 flex items-center justify-center"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.78 11.78 0 0012.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.96L0 24l6.34-1.66a11.87 11.87 0 005.72 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.17-1.23-6.15-3.44-8.43z" />
                </svg>

              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/the.human_valley/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-700 transition duration-300 flex items-center justify-center"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5C20 18.33 18.33 20 16.25 20h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>

              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/adarsh.vijay.bind.2025?rdid=yP02iiUWFIrWc3PU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DZwgjKp9y%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio#"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-700 transition duration-300 flex items-center justify-center"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
                </svg>

              </a>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-2xl font-bold mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-green-400 transition duration-300 flex items-center gap-2"
                >

                  <ChevronRight size={16} />

                  Home

                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-green-400 transition duration-300 flex items-center gap-2"
                >

                  <ChevronRight size={16} />

                  About

                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:text-green-400 transition duration-300 flex items-center gap-2"
                >

                  <ChevronRight size={16} />

                  Blogs

                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-green-400 transition duration-300 flex items-center gap-2"
                >

                  <ChevronRight size={16} />

                  Gallery

                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-green-400 transition duration-300 flex items-center gap-2"
                >

                  <ChevronRight size={16} />

                  Contact

                </Link>
              </li>

            </ul>

          </div>

          {/* ================= SERVICES ================= */}

          <div>

            <h3 className="text-2xl font-bold mb-6 text-white">
              Our Services
            </h3>

            <ul className="space-y-4">

              {serviceLinks.map((service, index) => (
                <li key={index}>

                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-green-400 transition duration-300 flex items-start gap-2"
                  >

                    <ChevronRight
                      size={16}
                      className="mt-1 flex-shrink-0"
                    />

                    <span>{service.title}</span>

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* ================= CONTACT INFO ================= */}

          <div>

            <h3 className="text-2xl font-bold mb-6 text-white">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-300 text-sm md:text-base">

              {/* Phone */}
              <a
                href="tel:+916394816035"
                className="flex items-start gap-3 hover:text-green-400 transition duration-300"
              >

                <Phone
                  size={18}
                  className="mt-1 flex-shrink-0"
                />

                <span>
                  +91 6394816035
                </span>

              </a>

              {/* Email */}
              <a
                href="mailto:info@drjangclinic.com"
                className="flex items-start gap-3 hover:text-green-400 transition duration-300 break-all"
              >

                <Mail
                  size={18}
                  className="mt-1 flex-shrink-0"
                />

                <span>
                  info@drjangclinic.com
                </span>

              </a>

              {/* Address */}
              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0"
                />

                <p className="leading-7">

                
                 Ground Floor, BLOCK A-524, Opposite Gardenia Glory, Sector 46, Noida

                </p>

              </div>

              {/* Timing */}
              <div className="flex items-start gap-3">

                <Clock3
                  size={18}
                  className="mt-1 flex-shrink-0"
                />

                <p>
                  Open Daily : 9:00 AM – 9:30 PM
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="pt-2 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center">

          <p>
            © 2026 All Rights Reserved.
          </p>

          <p className="leading-6">

            Design & Developed By{" "}

            <a
              href="https://digimarqtechnology.com"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:text-green-300 font-semibold transition duration-300"
            >
              Digimarq Technology Pvt. Ltd.
            </a>

          </p>

        </div>

      </div>
{/* ================= FLOATING WHATSAPP ================= */}

<a
  href="https://wa.me/916394816035"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 z-[999] group"
>
  {/* Pulse Effect */}
  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

  {/* Main Button */}
  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-[0_10px_40px_rgba(34,197,94,0.45)] flex items-center justify-center hover:scale-110 transition-all duration-300">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="white"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0012.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.96L0 24l6.34-1.66a11.87 11.87 0 005.72 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.17-1.23-6.15-3.44-8.43zM12.07 21.8a9.86 9.86 0 01-5.02-1.37l-.36-.21-3.76.98 1-3.66-.24-.38a9.82 9.82 0 01-1.51-5.27c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.98 2.89a9.8 9.8 0 012.89 6.98c0 5.46-4.44 9.9-9.88 9.9zm5.43-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.25 5.14 4.56.72.3 1.28.48 1.72.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>

  </div>
</a>
    </footer>
  );
};

export default Footer;