
import GalleryPages from "../components/gallery/GalleryPages";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <>
    <Helmet>
      <title>Dr. Jang Bahadur - Gallery</title>
      <meta
        name="description"
        content="Explore our clinic atmosphere, treatment sessions, recovery journey and happy patients."
      />
    </Helmet>
      <GalleryPages />
       
    </>

  );
};

export default Gallery;