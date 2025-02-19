"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'; // Importar el componente Image de Next.js

const images = [
    {
        url: "/img/escabadora.jpg",
        title: "Excavadora Industrial",
        description: "Maquinaria pesada para excavación minera"
    },
    {
        url: "/img/camion-minero.jpg",
        title: "Camión Minero",
        description: "Transporte de materiales pesados"
    },
    {
        url: "/img/industria.jpg",
        title: "Grúa Industrial",
        description: "Equipamiento para elevación de cargas"
    },
    {
        url: "/img/perforadora.jpg",
        title: "Perforadora Industrial",
        description: "Equipo especializado para minería"
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(timer);
    },);

    const handlePrevious = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setTimeout(() => setIsTransitioning(false), 3000);
        }
    };

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setTimeout(() => setIsTransitioning(false), 3000);
        }
    };

    return (
        <div className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 120px)" }}>
            {/* Main Image */}
            <div
                className="absolute w-screen h-full transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    display: 'flex',
                    width: `${images.length * 100}%`
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-full h-full flex-shrink-0"
                    >
                        {/* Use objectFit="cover" and objectPosition="bottom" to ensure the image covers the container and is positioned at the bottom */}
                        <Image
                            src={image.url}
                            alt={image.title}
                            width={1800}
                            height={650}
                            objectFit="cover"  // Adjust the image to cover the container
                            objectPosition="bottom"  // Position the image at the bottom
                            className="absolute inset-0 object-cover w-screen"
                            style={{ height: "calc(100vh - 120px)" }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                            <h2 className="text-white text-3xl font-bold mb-2">{image.title}</h2>
                            <p className="text-white text-lg">{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                disabled={isTransitioning}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                disabled={isTransitioning}
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
