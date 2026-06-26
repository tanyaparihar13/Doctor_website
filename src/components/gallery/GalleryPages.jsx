import { motion } from "framer-motion";


// Image Imports
import banner from "../../assets/images/physio1.jpg";
import physio1 from "../../assets/images/physio1.jpg";
import physio2 from "../../assets/images/physio2.jpg";
import physio3 from "../../assets/images/physio3.jpg";
import physio4 from "../../assets/images/physio4.jpg";
import physio5 from "../../assets/images/physio5.jpg";
import physio6 from "../../assets/images/physio6.jpg";

// Gallery Images
const galleryImages = [
  physio1,
  physio2,
  physio3,
  physio4,
  physio5,
  physio6,
];

// Component Name Changed to Avoid Duplicate Error
function GalleryPages() {
  return (
   
  
    <section className="bg-white min-h-screen">

      {/* Hero Banner */}
      <section className="relative h-[65vh] overflow-hidden">

        <img
          src={banner}
          alt="Gallery Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[5px] text-green-300 font-semibold mb-4">
              Our Moments
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Gallery
            </h1>

            <p className="mt-5 text-lg text-gray-200 max-w-2xl mx-auto">
              Explore our clinic atmosphere, treatment sessions,
              recovery journey and happy patients.
            </p>
          </motion.div>
        </div>

      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-white via-green-50 to-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl shadow-xl bg-white"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="absolute bottom-5 left-5 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                    <p className="text-white text-xl font-semibold">
                      Dr. Jang Clinic
                    </p>
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </section>
     
  );
}

export default GalleryPages;