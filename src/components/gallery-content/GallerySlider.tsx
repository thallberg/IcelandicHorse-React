import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import galleryData from '../../data/ImagesGalleri.json';

type GallerSliderProps = {
  className?: string;
}

const GallerySlider = ({ className }: GallerSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState<number | null>(null); // Ändra till 'number' istället för 'NodeJS.Timeout'

  // Byt till nästa bild
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  // Byt till föregående bild
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length
    );
  };

  // Automatisk bildväxling var 4:e sekund
  useEffect(() => {
    if (timer) {
      clearInterval(timer); // Rensa den gamla timern
    }

    // Skapa en ny timer för automatisk bildväxling
    const newTimer = setInterval(nextImage, 4000); 
    setTimer(newTimer); // Sätt den nya timern

    // Städa upp när komponenten tas bort
    return () => {
      if (newTimer) clearInterval(newTimer);
    };
  }, [currentIndex]); // Återställ timern när currentIndex ändras

  return (
    <section className={`py-12 bg-gray-100 ${className} `}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Vårt Galleri</h2>

        <div className="relative w-full max-w-3xl mx-auto">
          {/* Bilden */}
          <img
            src={galleryData[currentIndex].image}
            alt={galleryData[currentIndex].alt}
            className="w-full h-120 object-cover rounded-lg shadow-lg"
          />
         {/* Pilen för att byta till föregående bild */}
         <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
          >
            <HiChevronLeft />
          </button>
          {/* Pilen för att byta till nästa bild */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
          >
            <HiChevronRight />
          </button>

          {/* Beskrivning av bilden */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white text-sm font-semibold">
            {galleryData[currentIndex].alt}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
