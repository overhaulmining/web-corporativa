"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';


// Ejemplo de logos de empresas (reemplazar con tus URLs reales)
const logos = [
    { id: 1, url: '/empresas/empresa1.png', name: 'Empresa 1' },
    { id: 2, url: '/empresas/empresa2.png', name: 'Empresa 2' },
    { id: 3, url: '/empresas/empresa3.png', name: 'Empresa 3' },
    { id: 4, url: '/empresas/empresa4.jpg', name: 'Empresa 4' },
    { id: 5, url: '/empresas/empresa5.png', name: 'Empresa 5' },
    { id: 6, url: '/empresas/empresa6.png', name: 'Empresa 6' },
    { id: 7, url: '/empresas/empresa7.png', name: 'Empresa 7' },
    { id: 8, url: '/empresas/empresa8.png', name: 'Empresa 8' },
    { id: 9, url: '/empresas/empresa9.jpg', name: 'Empresa 9' },
    { id: 10, url: '/empresas/empresa10.jpg', name: 'Empresa 10' },
    { id: 11, url: '/empresas/empresa11.png', name: 'Empresa 11' },
    { id: 12, url: '/empresas/empresa12.png', name: 'Empresa 12' },
    { id: 13, url: '/empresas/empresa13.png', name: 'Empresa 13' },
    { id: 14, url: '/empresas/empresa14.png', name: 'Empresa 14' },
];

const LogoCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Número de logos a mostrar según el tamaño de la pantalla
    const [itemsToShow, setItemsToShow] = useState(5);

    // Actualizar el número de logos a mostrar según el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 768) {
                setItemsToShow(2);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(3);
            } else {
                setItemsToShow(5);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const totalSlides = Math.ceil(logos.length / itemsToShow);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    // Cambiar automáticamente cada 3 segundos
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);

            return () => clearInterval(interval);
        }
        return undefined;
    }, [nextSlide, isPaused]);

    // Obtener los logos actuales a mostrar
    const visibleLogos = () => {
        const startIdx = currentIndex * itemsToShow;
        return logos.slice(startIdx, startIdx + itemsToShow);
    };

    return (
        <div className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">TRABAJAMOS PARA LOS MEJORES CLIENTES</h2>

                <div className="relative">
                    {/* Botón anterior */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
                        aria-label="Anterior"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-600" />
                    </button>

                    {/* Contenedor del carrusel */}
                    <div
                        className="overflow-hidden mx-10"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="flex justify-center items-center gap-4 sm:gap-8 transition-transform duration-500 ease-in-out">
                            {visibleLogos().map((logo) => (
                                <div key={logo.id} className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-[150px] h-[150px] bg-white rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                                        <Image
                                            src={logo.url}
                                            alt={`Logo de ${logo.name}`}
                                            className="max-w-full max-h-full object-contain"
                                            width="150"
                                            height="150"
                                        />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botón siguiente */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
                        aria-label="Siguiente"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <ChevronRight className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${currentIndex === index ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'
                                }`}
                            aria-label={`Ir a slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;