"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Mail, Phone, Award, BookOpen, Users, CheckCircle } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2 }
};

interface CourseCardProps {
  title: string;
  date: string;
  time: string;
  level: string;
  imageUrl: string;
  benefits: string[];
}

const CourseCard = ({ title, date, time, level, imageUrl, benefits }: CourseCardProps) => (
  <motion.div 
    className="bg-white rounded-xl shadow-xl overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
        Próximamente
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Award className="w-4 h-4 mr-2" />
          <span>{level}</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">Beneficios del curso:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <motion.li 
              key={index}
              className="flex items-center text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Inscribirme ahora
      </motion.button>
    </div>
  </motion.div>
);

const InstructorSection = () => (
  <motion.div 
    className="bg-white rounded-xl shadow-xl p-6 mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructor Principal</h2>
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80"
          alt="Octavio Arce"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Octavio Arce</h3>
        <p className="text-blue-600 mb-2">Nivel III END</p>
        <p className="text-gray-600 mb-2">Ing. Mecánico de PUCP</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-100 text-blue-600 px-3 py-1 rounded-full text-sm">ASNT</span>
          <span className="bg-purple-100 text-blue-600 px-3 py-1 rounded-full text-sm">AWS</span>
          <span className="bg-purple-100 text-blue-600 px-3 py-1 rounded-full text-sm">END Partner</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactInfo = () => (
  <motion.div 
    className="bg-white rounded-xl shadow-xl p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Información de Contacto</h2>
    <div className="space-y-4">
      <div className="flex items-center text-gray-600">
        <Phone className="w-5 h-5 mr-3 text-blue-600" />
        <span>976225732</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Mail className="w-5 h-5 mr-3 text-blue-600" />
        <a href="mailto:servicios@overhaulmining.com" className="hover:text-blue-600">
          servicios@overhaulmining.com
        </a>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-5 h-5 mr-3 text-blue-600" />
        <span>Cursos prácticos en Cajamarca</span>
      </div>
    </div>
  </motion.div>
);

export default function CoursesPage() {
  const courses = [
    {
      title: "Curso de Inspección Visual (VT)",
      date: "7 al 11 de Agosto",
      time: "07:00pm - 10:00pm",
      level: "Visual testing nivel I y II",
      imageUrl: "/cursos/inspeccion-visual.jpeg",
      benefits: [
        "Certificación internacional",
        "Material de estudio incluido",
        "Prácticas en laboratorio",
        "Evaluación continua"
      ]
    },
    {
      title: "Curso de líquidos penetrantes (PT)",
      date: "14 al 18 de Agosto",
      time: "07:00pm - 10:00pm",
      level: "Penetrant testing nivel I y II",
      imageUrl: "/cursos/liquidos-penetrantes.jpeg",
      benefits: [
        "Instructores certificados",
        "Equipos modernos",
        "Casos prácticos reales",
        "Soporte post-curso"
      ]
    },
    {
      title: "Curso de partículas magnéticas (MT)",
      date: "21 al 25 de Agosto",
      time: "07:00pm - 10:00pm",
      level: "Magnetic testing nivel I y II",
      imageUrl: "/cursos/particulas-magneticas.jpeg",
      benefits: [
        "Grupos reducidos",
        "Práctica intensiva",
        "Material especializado",
        "Certificado válido internacionalmente"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          {...fadeIn}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CURSOS TEÓRICO ONLINE Y PRÁCTICOS PRESENCIALES DE ENSAYOS NO DESTRUCTIVOS (END)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Formación especializada con certificación internacional en técnicas de ensayos no destructivos.
            Aprende con expertos del sector y obtén las certificaciones más demandadas por la industria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <InstructorSection />
        <ContactInfo />

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Más información
          </button>
        </motion.div>
      </div>
    </div>
  );
}