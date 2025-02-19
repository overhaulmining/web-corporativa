import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Truck, PhoneCall, Mail, Target, Eye, Users } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: "Capacitación y Certificación de Personal IZAJE",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
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
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1570619367330-f794786ab176?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800"
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
            <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Nuestros Servicios
            </button>
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
              <h3 className="text-xl font-bold mb-4">Quiénes Somos</h3>
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
            <ServiceCard key={index} {...service}/>
          ))}
        </div>
      </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Galería de Trabajos</h2>
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
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <PhoneCall className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Teléfono</h3>
                <p className="text-gray-600">+51 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <Mail className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@empresa.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
              <Truck className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Oficina Principal</h3>
                <p className="text-gray-600">Av. Industrial 123, Lima</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secciones;