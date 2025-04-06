import HeroImage from "../components/hero-image/HeroImage";
import galleryHero from "../assets/gallery/galleryHero.webp";
import GalleryImages from "../components/gallery-content/GallerySlider";

const Gallery = () => {
  return (
    <>
      <header>
        <HeroImage
          title="Vårat Bildgalleri"
          subtitle="lorem ipsum dolar sit, lorem ipsu dolar sit."
          image={galleryHero}
        />
      </header>
      <GalleryImages />
    </>
  );
};

export default Gallery;
