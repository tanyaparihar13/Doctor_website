// ========================== Blog.jsx ==========================

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogData from "../components/data/blogData";
import { Helmet } from "react-helmet-async";

// ✅ ONLY USE EXISTING IMAGES
import physio1 from "../assets/images/physio1.jpg";
import physio2 from "../assets/images/physio2.jpg";
import physio3 from "../assets/images/physio3.jpg";

const blogImages = [physio1, physio2, physio3];

const Blog = () => {
  return (
  <>
  <Helmet>
    <title>Physiotherapy Blog - Tips, Recovery Guides & Wellness Insights</title>
    <meta
      name="description"
      content="Explore our physiotherapy blog for expert tips on pain relief, posture correction, mobility recovery, and rehabilitation care. Stay informed with the latest insights from Dr. Jang Bahadur."
    />
  </Helmet>
 
    <section className="bg-[#f6fbf8] min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${physio1})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#041f18]/75" />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-400/20 blur-[140px] rounded-full" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >

          <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-green-200 text-sm tracking-[2px] uppercase font-semibold">
            Physiotherapy Insights
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight">
            Health & Recovery
            <span className="block bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Expert Blogs
            </span>
          </h1>

          <p className="mt-6 text-gray-200 max-w-2xl mx-auto leading-8 text-base md:text-lg">
            Discover physiotherapy tips, posture correction advice,
            recovery guides, pain management solutions and wellness
            insights from expert therapists.
          </p>

        </motion.div>
      </section>

      {/* ================= BLOGS ================= */}
      <section className="py-20 md:py-28 relative">

        {/* Background Glow */}
        <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-green-200/30 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-200/30 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogData.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -12 }}
                viewport={{ once: true }}
                className="group relative rounded-[32px] overflow-hidden bg-white border border-green-100 shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_90px_rgba(16,185,129,0.18)] transition-all duration-700"
              >

                {/* Top Gradient */}
                <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-green-400 via-emerald-500 to-[#0d3b31]" />

                {/* IMAGE */}
                <div className="relative overflow-hidden h-72">

                  <img
                    src={blog.image || blogImages[index % blogImages.length]}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#041f18]/90 via-[#041f18]/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[2px] uppercase">
                    {blog.category}
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-5 left-5 text-white text-sm font-medium">
                    {blog.date}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-7 relative z-10">

                  <h2 className="text-2xl font-black text-[#0d3b31] leading-snug mb-4">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 leading-8 mb-7 text-[15px]">
                    {blog.shortDescription}
                  </p>

                  <Link to={`/blogs/${blog.slug}`}>
                    <button className="group/button inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-[#0d3b31] text-white font-semibold shadow-lg hover:shadow-green-200 transition-all duration-300">

                      Read Full Article

                      <span className="group-hover/button:translate-x-1 transition duration-300">
                        →
                      </span>

                    </button>
                  </Link>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </section>
    </>
  );
};

export default Blog;