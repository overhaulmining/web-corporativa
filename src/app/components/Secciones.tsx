import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Truck, PhoneCall, Mail, Target, Eye, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Capacitación y Certificación de Personal IZAJE",
    image: "/gruas.jpg",
    services: [
      "Operador de grúa puente",
      "Operador de Grúa telescópica",
      "Operador de Grúa de brazo articulado",
      "Operador de Montacargas",
      "Operador de Man lift",
      "Operador de Telehadler",
      "Supervisor de izaje"
    ]
  },
  {
    title: "Ensayos No Destructivos",
    image: "/cursos/particulas-magneticas.jpeg",
    services: [
      "Partículas Magnéticas",
      "Líquidos Penetrantes",
      "Ultrasonido haz normal y angular",
      "Inspección Visual",
      "Radiografía Industrial",
      "Medición de Dureza",
      "Réplicas Metalográficas"
    ]
  }
];

const galleryImages = [
  "/Cetrificacion-Izaje.jpeg",
  "/maquina-pesada.jpg",
  "/maquinaria.jpg",
  "/maquinarias.jpg",
  "/trabajando.jpg",
  "/gruas.jpg",

];

function Secciones() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-950 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Servicios Profesionales de Certificación y Capacitación
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Expertos en certificación, capacitación y ensayos no destructivos
          </p>
          <div className="flex gap-4">
            <Link href="/servicios" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Nuestros Servicios
            </Link>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4" id="nosotros">Quiénes Somos</h3>
              <p className="text-gray-600">
                Somos una empresa que presta servicios de ingeniería, Ensayos No Destructivos, control de calidad de materiales con personal calificado en  uniones soldadas y termo fundidas, inspección estructural de equipos de izaje y certificación de personal operador de  grúas , montacargas, manlift y equipos de transporte.

              </p>
            </div>
            <div className="text-center p-6">
              <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-gray-600">
                Ser reconocida a nivel nacional como una empresa líder en mantenimiento predictivo y metrología con altos estándares de seguridad y confiabilidad.
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-gray-600">
                Brindar servicios de excelencia: Ensayos , certificación de equipos y metrología, aplicando en todo momento una cultura de calidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='bg-gray-900'>
        <div className="  container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16 container mx-auto px-4">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* Contact Information */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2 justify-center items-start " id='contacto'>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contáctanos</h2>

            <div className="flex flex-col gap-6 w-full">
              {/* Phone */}
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <PhoneCall className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">+51 123 456 789</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <Mail className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@empresa.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <Truck className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Oficina Principal</h3>
                  <p className="text-gray-600">Av. Industrial 123, Lima</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="flex-1 w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d285686.9817301478!2d-78.424707!3d-7.159365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b2452149161357%3A0x96387430d9215512!2sAv.%20Manco%20C%C3%A1pac%201346%2C%20Ba%C3%B1os%20del%20Inca%2006004%2C%20Per%C3%BA!5e1!3m2!1ses!2sus!4v1740236833017!5m2!1ses!2sus"
              width="100%" height="400" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Secciones;