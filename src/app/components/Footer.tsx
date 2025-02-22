import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nuestra Empresa</h3>
            <p className="text-gray-400 mb-4">
              Comprometidos con la excelencia y la innovación en cada proyecto que realizamos.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/overhaulmining.eirl" target='blanck' className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>

             
              <Link href="https://www.linkedin.com/in/overhaul-mining-eirl-908b04191/recent-activity/all/" target='blanck' className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <Link href="mailto:info@empresa.com" className="text-gray-400 hover:text-white transition-colors">
                  ricardo.luycho@overhaulmining.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <Link href="tel:+51976225732" className="text-gray-400 hover:text-white transition-colors">
                  +51 976 225 732
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <span className="text-gray-400">
                  Av. Manco Capac 1346 Los Baños del Inca - Cajamarca
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-gray-400 hover:text-white transition-colors">
                  Cursos End
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  contacto
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Boletín Informativo</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir las últimas noticias y actualizaciones.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} OverHaul Mining. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;