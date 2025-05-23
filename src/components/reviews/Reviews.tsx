import { useState } from "react";
import reviews from "../../data/Reviews.json";
import {
  HiStar,
  HiOutlineStar,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsToShow = 3;

  const renderStars = (count: number) => {
    return (
      <div className="flex justify-center text-amber-400 mb-2">
        {Array.from({ length: 5 }).map((_, i) =>
          i < count ? (
            <HiStar key={i} className="w-5 h-5" />
          ) : (
            <HiOutlineStar key={i} className="w-5 h-5" />
          )
        )}
      </div>
    );
  };

  const nextSlide = () => {
    if (currentIndex + reviewsToShow < reviews.length) {
      setCurrentIndex(currentIndex + reviewsToShow);
    }
  };

  const prevSlide = () => {
    if (currentIndex - reviewsToShow >= 0) {
      setCurrentIndex(currentIndex - reviewsToShow);
    }
  };

  return (
    <section className="bg-blue-100 p-8 shadow-md py-12 mb-4 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-center text-amber-900 mb-8">
        Vad våra besökare säger
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 md:min-h-90 place-content-center">
          {reviews
            .slice(currentIndex, currentIndex + reviewsToShow)
            .map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center w-full flex flex-col justify-between"
              >
                {renderStars(review.rating)}
                <p className="text-lg text-gray-700 italic">
                  "{review.review}"
                </p>
                <div className="mt-4">
                  <h3 className="text-amber-900 font-semibold">
                    {review.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{review.location}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="absolute inset-y-1/2 left-0 flex items-center justify-center p-4">
          <button
            className="text-amber-900 bg-white p-2 rounded-full shadow-md hover:bg-amber-100"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-y-1/2 right-0 flex items-center justify-center p-4">
          <button
            className="text-amber-900 bg-white p-2 rounded-full shadow-md hover:bg-amber-100"
            onClick={nextSlide}
            disabled={currentIndex + reviewsToShow >= reviews.length}
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
