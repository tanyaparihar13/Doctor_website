// ========================== BlogDetail.jsx ==========================

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogData from "../components/data/blogData";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogData.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <div className="py-32 text-center text-2xl font-bold text-red-500">
        Blog Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#f6fbf8] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] flex items-center justify-center">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${blog.image})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#041f18]/80" />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-green-400/20 blur-[140px] rounded-full" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center px-4"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-green-200 text-sm">

            <span>{blog.date}</span>

            <span>•</span>

            <span>{blog.category}</span>

          </div>

          <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            {blog.title}
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-8">
            By {blog.author}
          </p>

        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative py-20 md:py-28">

        {/* Glow */}
        <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-green-200/30 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-200/30 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] border border-green-100 shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden"
          >

            {/* Image */}
            <div className="overflow-hidden h-[300px] md:h-[500px]">

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* Content */}
            <div className="p-8 md:p-14">

              <h2 className="text-3xl md:text-5xl font-black text-[#0d3b31] leading-tight mb-8">
                {blog.title}
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-[#0d3b31] rounded-full mb-10"></div>

              <p className="text-gray-700 text-lg leading-[2.1] text-justify">
                {blog.content}
              </p>

              {/* CTA */}
              <div className="mt-14 flex flex-wrap gap-5">

                <Link to="/blogs">
                  <button className="px-8 py-4 rounded-full border border-green-200 text-[#0d3b31] hover:bg-green-50 transition duration-300 font-semibold">

                    ← Back to Blogs

                  </button>
                </Link>

                <Link to="/contact">
                  <button className="px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-[#0d3b31] text-white font-semibold shadow-lg hover:scale-105 transition duration-300">

                    Book Consultation

                  </button>
                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default BlogDetail;