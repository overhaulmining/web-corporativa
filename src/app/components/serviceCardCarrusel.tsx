import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCardCarouselProps {
  images: React.ReactNode[];
}

const ServiceCardCarousel: React.FC<ServiceCardCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-80 bg-purple-900 flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {image}
        </div>
      ))}
      
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 text-white transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 text-white transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
      
      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCardCarousel;