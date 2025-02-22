"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Importa Link de next/navigation

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

interface ServiceSectionProps {
    title: string;
    items: string[];
    imageSlot: React.ReactNode;
    buttonText?: string;
    whatsappLink: string; // Añadido whatsappLink para cada sección
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, items, imageSlot, buttonText = "Contactar ahora", whatsappLink }) => (
    <motion.div
        className="w-full bg-white rounded-lg shadow-xl overflow-hidden mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="bg-blue-900 text-white py-4 px-6">
            <h2 className="text-2xl font-bold">{title}</h2>
        </div>

        <div className="p-6 md:flex gap-8">
            <div className="md:w-1/2">
                <ul className="space-y-3">
                    {items.map((item, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center gap-2 text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <CheckCircle2 className="text-blue-600 w-5 h-5 flex-shrink-0" />
                            <span>{item}</span>
                        </motion.li>
                    ))}
                </ul>

                <Link href={whatsappLink}>  {/* Aquí añadimos el enlace de WhatsApp */}
                    <motion.button
                        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-purple-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <PhoneCall className="w-4 h-4" />
                        {buttonText}
                    </motion.button>
                </Link>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0">
                {/* Image placeholder - Replace src with your actual image */}
                <div className="rounded-lg overflow-hidden bg-gray-100 aspect-video">
                    {imageSlot}
                </div>
            </div>
        </div>
    </motion.div>
);

export default function ServicesPage() {
    const ensayosItems = [
        "Partículas Magnéticas",
        "Líquidos Penetrantes",
        "Ultrasonido haz normal y angular",
        "Inspección Visual",
        "Radiografía Industrial",
        "Medición de Dureza",
        "Réplicas Metalográficas",
        "Prueba de Fuga"
    ];

    const capacitacionItems = [
        "Operador de Grúa puente",
        "Operador de Grúa telescópica",
        "Operador de Grúa de brazo articulado",
        "Operador de Montacargas",
        "Operador de Man lift",
        "Operador de Telehandler",
        "Operador de Monorriel",
        "Entrenadores en Izaje de NACE",
        "Operador de Grúas pórtico",
        "Supervisor de Izaje",
        "Riggers",
        "Venteros",
        "Estrobadores"
    ];

    const certificacionItems = [
        "Grúas Pluma de Colonia",
        "Camión Grúas articuladas",
        "Grúas Puente",
        "Grúas móviles",
        "Telescópica",
        "Grúas Pórtico",
        "Eslingas de cadena",
        "Eslingas de cable",
        "Eslingas sintéticas",
        "Aparejos",
        "Ganchos",
        "Grilletes",
        "Tensores"
    ];

    // Enlace de WhatsApp común
    const whatsappLink = "https://api.whatsapp.com/send/?phone=51976225732&text=Hola%2C+me+gustar%C3%ADa+recibir+una+cotizaci%C3%B3n+sobre+ensayo+no+destructivos.&type=phone_number&app_absent=0";

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <motion.h1
                className="text-4xl font-bold text-center text-blue-900 mb-12"
                {...fadeIn}
            >
                OVERHAUL MINING BRINDA SERVICIOS DE INGENIERÍA
            </motion.h1>

            <div className="max-w-7xl mx-auto space-y-12">
                <ServiceSection
                    title="ENSAYOS NO DESTRUCTIVOS"
                    items={ensayosItems}
                    imageSlot={
                        <div className="bg-gray-200 w-full h-full">
                            {/* Placeholder for your first image */}
                            <Image
                                src="/ensanos-no-destructivos.jpeg"
                                alt="ensayos no destructivos"
                                width={1200}  // Puedes ajustar el tamaño de la imagen
                                height={800}  // Ajusta la altura también
                                layout="responsive"  // Asegura que la imagen se redimensione correctamente
                                objectFit="cover"  // Para que la imagen ocupe todo el espacio sin distorsionarse
                            />
                        </div>
                    }
                    whatsappLink={whatsappLink}  // Pasar enlace de WhatsApp
                />

                <ServiceSection
                    title="Capacitación y certificación de personal Izaje"
                    items={capacitacionItems}
                    imageSlot={
                        <div className="bg-gray-200 w-full h-full">
                            {/* Placeholder for your second image */}
                            <Image
                                src="/grua.jpg"  // Ajusta la ruta de la imagen
                                alt="Capacitación y certificación"
                                width={1200}
                                height={800}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </div>
                    }
                    whatsappLink={whatsappLink}  // Pasar enlace de WhatsApp
                />

                <ServiceSection
                    title="Certificación de Equipos y personal de Izaje"
                    items={certificacionItems}
                    imageSlot={
                        <div className="bg-gray-200 w-full h-full">
                            {/* Placeholder for your third image */}
                            <Image
                                src="/equipos.jpeg"  // Ajusta la ruta de la imagen
                                alt="Certificación de equipos"
                                width={1200}
                                height={800}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </div>
                    }
                    whatsappLink={whatsappLink}  // Pasar enlace de WhatsApp
                />
            </div>

        </div>
    );
}
