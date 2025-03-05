"use client"
import React from 'react';
//import Carousel from './components/Carousel';
import ServiceCardCarousel from './serviceCardCarrusel';
import Link from 'next/link';
import Image from 'next/image';

function SeccionServices() {


  // Imágenes para los carruseles de las tarjetas de servicios
  const equipmentCertificationImages = [
    <Image key="crane" src="/img/maquinaria-grua.jpg" alt="Grúa" className="h-full w-full object-cover" width={400} height={400}/>,
    <Image key="crane" src="/img/persona-mina.jpeg" alt="persona-mina" className="h-full w-full object-cover" width={400} height={400}/>,
    <Image key="crane" src="/img/mina.jpeg" alt="Grúa" className="h-full w-full object-cover" width={400} height={400}/>
  ];

  const personnelCertificationImages = [
    <Image key="operator" src="/img/izaje.jpeg" alt="Operador" className="h-full w-full object-cover" width={400} height={400}/>,
    <Image key="operator" src="/img/izaje2.jpg" alt="Operador" className="h-full w-full object-cover" width={400} height={400}/>,
    <Image key="operator" src="/img/izaje3.jpg" alt="Operador" className="h-full w-full object-cover" width={400} height={400}/>
  ];

  const maintenanceImages = [
    <Image key="maintenance" src="/img/mantenimiento1.jpg" alt="Mantenimiento" className="h-full w-full object-cover" width={400} height={400}/>,
    <Image key="maintenance" src="/img/mantenimiento2.jpg" alt="Mantenimiento" className="h-full w-full object-cover" width={400} height={400}/>,
    <Image key="maintenance" src="/img/mantenimiento3.jpg" alt="Mantenimiento" className="h-full w-full object-cover" width={400} height={400}/>
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Carousel */}
      {/* <Carousel items={carouselItems} /> */}

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Nuestros Servicios</h2>

          <div className="flex flex-col max-w-3xl mx-auto gap-10">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <ServiceCardCarousel images={equipmentCertificationImages} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Certificación de equipos de izaje</h3>
                <p className="text-gray-700 mb-4">Ofrecemos servicios de certificación para todo tipo de equipos de izaje, garantizando su seguridad y cumplimiento normativo.</p>
                <Link href="https://api.whatsapp.com/send/?phone=51976225732&text=Hola%2C+me+gustar%C3%ADa+recibir+una+cotizaci%C3%B3n+sobre+ensayo+no+destructivos.&type=phone_number&app_absent=0" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Más información
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <ServiceCardCarousel images={personnelCertificationImages} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Certificación de personal</h3>
                <p className="text-gray-700 mb-4">Certificamos operadores de grúas y personal especializado en izaje, asegurando que cumplan con los estándares de seguridad requeridos.</p>
                <Link href="https://api.whatsapp.com/send/?phone=51976225732&text=Hola%2C+me+gustar%C3%ADa+recibir+una+cotizaci%C3%B3n+sobre+ensayo+no+destructivos.&type=phone_number&app_absent=0" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Más información
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <ServiceCardCarousel images={maintenanceImages} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Mantenimiento Industrial</h3>
                <p className="text-gray-700 mb-4">Servicios completos de mantenimiento preventivo, correctivo, planeamiento y soldadura industrial para optimizar sus operaciones.</p>
                <Link href="https://api.whatsapp.com/send/?phone=51976225732&text=Hola%2C+me+gustar%C3%ADa+recibir+una+cotizaci%C3%B3n+sobre+ensayo+no+destructivos.&type=phone_number&app_absent=0" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Más información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4  bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">¿Necesita nuestros servicios?</h2>
          <p className="text-lg text-gray-700 mb-8">Contáctenos hoy mismo para obtener más información sobre nuestros servicios de certificación y mantenimiento industrial.</p>
          <Link href="https://api.whatsapp.com/send/?phone=51976225732&text=Hola%2C+me+gustar%C3%ADa+recibir+una+cotizaci%C3%B3n+sobre+ensayo+no+destructivos.&type=phone_number&app_absent=0" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Más información
          </Link>
        </div>
      </section>


    </div>
  );
}

export default SeccionServices;