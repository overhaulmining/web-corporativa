"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const images = [
    {
        url: "/capacitacion.png",
        title: "CAPACITACIÓN Y CERTIFICACIÓN DE PERSONAL IZAJE",
        description: "Operador Grua puente - Operador Grua telescopica"
    },
    {
        url: "/img/mina.jpeg",
        title: "Gruas puentes - Gruas movil",
        description: "Equipos dedicados y especializados"
    },
    {
        url: "/img/trabajo-campo.png",
        title: "Trabajo Efectivo",
        description: "Eficiencia y rapidez"
    },
    {
        url: "/image-carrusel/image4.png",
        title: "Equipo especializado",
        description: "Servicio rápido y eficiente"
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
        }
    };

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

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
                        <Image
                            src={image.url}
                            alt={image.title}
                            width={1800}
                            height={650}
                            objectFit="cover"
                            objectPosition="bottom"
                            className="absolute inset-0 object-cover w-screen"
                            style={{
                                height: "calc(100vh - 120px)",
                                filter: 'brightness(60%)' // Reducir el brillo para darle más opacidad
                            }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-8">
                            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold'>
                                {image.title}
                            </p>
                            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold'>
                                {image.description}
                            </p>
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

            {/* Indicators
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
            </div> */}
        </div>
    );
};

export default Carousel;
