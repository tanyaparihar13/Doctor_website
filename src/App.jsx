import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
// Service Pages
import ServiceList from "./components/services/ServiceList";
import ServiceDetail from "./components/services/ServiceDetail";

import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";


// React Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        {/* Services */}
        <Route path="/services" element={<ServiceList />} />

        <Route
          path="/services/:slug"
          element={<ServiceDetail />}
        />

        {/* BLOG */}
        <Route path="/blogs" element={<Blog />} />

        {/* BLOG DETAIL */}
        <Route
          path="/blogs/:slug"
          element={<BlogDetail />}
        />
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
