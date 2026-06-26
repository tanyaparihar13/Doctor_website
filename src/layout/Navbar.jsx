import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
 
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

/* LOGO */
import logo1 from "../assets/images/logo1.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const location = useLocation();

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
    {
      title: "Pediatric Physiotherapy",
      slug: "pediatric-physiotherapy",
    },
    {
      title: "Pain Management Therapy",
      slug: "pain-management-therapy",
    },
  ];

  const navLink =
    "relative hover:text-green-700 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-700 after:transition-all hover:after:w-full";

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[82px] lg:h-[92px] flex items-center justify-between">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            {/* Logo */}
            <img
              src={logo1}
              alt="logo"
              className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
            />

            {/* Logo Text */}
            <div>

              <h1 className="text-[18px] md:text-3xl font-black leading-tight text-[#0d3b31]">
                Dr. Jang Bahadur
              </h1>

              <p className="text-[10px] md:text-sm text-green-700 font-medium tracking-wide">
                Physiotherapy & Rehab Clinic
              </p>

            </div>

          </Link>

          {/* ================= DESKTOP MENU ================= */}

          <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-semibold">

            {/* Home */}
            <Link to="/">
              <li
                className={`${navLink} ${
                  location.pathname === "/"
                    ? "text-green-700"
                    : ""
                }`}
              >
                Home
              </li>
            </Link>

            {/* About */}
            <Link to="/about">
              <li
                className={`${navLink} ${
                  location.pathname === "/about"
                    ? "text-green-700"
                    : ""
                }`}
              >
                About
              </li>
            </Link>

            {/* SERVICES */}
            <li
              className="relative"
              onMouseEnter={() => setServiceDropdown(true)}
              onMouseLeave={() => setServiceDropdown(false)}
            >

              <button className="flex items-center gap-1 hover:text-green-700 transition">

                Services

                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    serviceDropdown ? "rotate-180" : ""
                  }`}
                />

              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-14 left-0 w-80 bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden transition-all duration-300 ${
                  serviceDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-4"
                }`}
              >

                {serviceLinks.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.slug}`}
                  >

                    <div className="px-6 py-4 hover:bg-green-50 hover:text-green-700 transition border-b border-gray-100 last:border-b-0 font-medium">

                      {service.title}

                    </div>

                  </Link>
                ))}

              </div>

            </li>

            {/* Blogs */}
            <Link to="/blogs">
              <li
                className={`${navLink} ${
                  location.pathname === "/blogs"
                    ? "text-green-700"
                    : ""
                }`}
              >
                Blogs
              </li>
            </Link>

            {/* Gallery */}
            <Link to="/gallery">
              <li
                className={`${navLink} ${
                  location.pathname === "/gallery"
                    ? "text-green-700"
                    : ""
                }`}
              >
                Gallery
              </li>
            </Link>

            {/* Contact */}
            <Link to="/contact">
              <li
                className={`${navLink} ${
                  location.pathname === "/contact"
                    ? "text-green-700"
                    : ""
                }`}
              >
                Contact
              </li>
            </Link>

          </ul>

          {/* ================= CALL BUTTON ================= */}

          <div className="hidden lg:block">

            <a href="tel:+916394816035">

              <button className="flex items-center gap-2 bg-gradient-to-r from-green-700 to-[#0d3b31] hover:scale-105 transition duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-lg">

                <Phone size={18} />

                Call Now

              </button>

            </a>

          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            className="lg:hidden text-[#0d3b31]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >

            {mobileOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}

          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            mobileOpen
              ? "max-h-[1000px]"
              : "max-h-0"
          }`}
        >

          <div className="bg-white border-t border-gray-100 shadow-xl">

            <div className="px-6 py-6">

              <div className="flex flex-col gap-4">

                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-gray-700 hover:text-green-700"
                >
                  Home
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-gray-700 hover:text-green-700"
                >
                  About
                </Link>

                {/* Services */}
                <div>

                  <button
                    onClick={() =>
                      setMobileServiceOpen(!mobileServiceOpen)
                    }
                    className="w-full flex items-center justify-between font-medium text-gray-700 hover:text-green-700"
                  >

                    Services

                    <ChevronDown
                      size={18}
                      className={`transition duration-300 ${
                        mobileServiceOpen
                          ? "rotate-180"
                          : ""
                      }`}
                    />

                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileServiceOpen
                        ? "max-h-[500px] mt-3"
                        : "max-h-0"
                    }`}
                  >

                    <div className="ml-2 border-l-2 border-green-200 pl-4 flex flex-col gap-2">

                      {serviceLinks.map((service, index) => (
                        <Link
                          key={index}
                          to={`/services/${service.slug}`}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServiceOpen(false);
                          }}
                          className="text-gray-600 hover:text-green-700 transition"
                        >

                          {service.title}

                        </Link>
                      ))}

                    </div>

                  </div>

                </div>

                {/* Blogs */}
                <Link
                  to="/blogs"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-gray-700 hover:text-green-700"
                >
                  Blogs
                </Link>

                {/* Gallery */}
                <Link
                  to="/gallery"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-gray-700 hover:text-green-700"
                >
                  Gallery
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-gray-700 hover:text-green-700"
                >
                  Contact
                </Link>

              </div>

              {/* CALL BUTTON */}
              <div className="mt-6">

                <a href="tel:+919876543210">

                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 to-[#0d3b31] text-white py-3 rounded-full font-semibold shadow-lg">

                    <Phone size={18} />

                    Call Now

                  </button>

                </a>

              </div>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center items-center gap-6 mt-6 pt-5 border-t border-gray-200">

                {/* WhatsApp
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0d3b31] hover:text-green-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.78 11.78 0 0012.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.96L0 24l6.34-1.66a11.87 11.87 0 005.72 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.17-1.23-6.15-3.44-8.43z" />
                  </svg>
                </a> */}

                {/* Instagram 
                <a
                  href="#"
                  className="text-[#0d3b31] hover:text-green-700 transition"
                >
                  <Instagram size={28} />
                </a>*/}

              </div>

            </div>

          </div>

        </div>

      </header>
    </>
  );
};

export default Navbar;