import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import galleryData from "../../data/ImagesGalleri.json";

type GallerSliderProps = {
  className?: string;
};

const GallerySlider = ({ className }: GallerSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState<number | null>(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length
    );
  };

  useEffect(() => {
    if (timer) {
      clearInterval(timer);
    }

    const newTimer = setInterval(nextImage, 4000);
    setTimer(newTimer);

    return () => {
      if (newTimer) clearInterval(newTimer);
    };
  }, [currentIndex]);

  return (
    <section className={`py-12 bg-gray-100 ${className} `}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Vårt Galleri</h2>

        <div className="relative w-full max-w-3xl mx-auto">
          <img
            src={galleryData[currentIndex].image}
            alt={galleryData[currentIndex].alt}
            className="w-full h-120 object-cover rounded-lg shadow-lg"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
          >
            <HiChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
          >
            <HiChevronRight />
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white text-sm font-semibold">
            {galleryData[currentIndex].alt}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
