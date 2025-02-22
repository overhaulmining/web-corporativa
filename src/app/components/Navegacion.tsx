"use client"
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Briefcase, Book, Users, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'Servicios',
      submenu: [
        { title: 'Software', href: '#' },
        { title: 'Hardware', href: '#' },
        { title: 'Servicios Cloud', href: '#' },
      ],
    },
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className="bg-gradient-to bg-gray-200 text-gray-800 py-3 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex gap-5 items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            <Image src="/cert_iso-remove.png" alt="Certificación ISO" width={200} height={100} quality={100} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex  items-center space-x-8">
            <Link href="/" className="flex items-center space-x-1 text-sm hover:text-gray-500">
              <span>Inicio</span>
            </Link>

            <Link href="/servicios" className="flex items-center space-x-1 hover:text-gray-500">
              <span className='text-sm'>Servicios</span>
            </Link>
            <Link href="/cursos" className="flex items-center space-x-1 hover:text-gray-500">
              <Book className="w-5 h-5" />
              <span className='text-sm'>Cursos End</span>
            </Link>
            <Link href="#nosotros" className="flex items-center space-x-1 hover:text-gray-500">
              <Users className="w-5 h-5" />
              <span className='text-sm'>Nosotros</span>
            </Link>
            <Link href="#contacto" className="flex items-center space-x-1 hover:text-gray-500">
              <Phone className="w-5 h-5" />
              <span className='text-sm'>Contacto</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden transition-transform duration-300 ease-in-out transform bg-gray-200 p-4">
          <div className="space-y-4">
            {menuItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-800 hover:bg-gray-300"
                >
                  <div className="flex items-center space-x-2">
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === item.title && (
                  <div className="pl-6 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-300"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/cursos"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-800 hover:bg-gray-300"
            >
              <Book className="w-5 h-5" />
              <span>Cursos End</span>
            </Link>
            <Link
              href="#nosotros"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-800 hover:bg-gray-300"
            >
              <Users className="w-5 h-5" />
              <span>Nosotros</span>
            </Link>
            <Link
              href="#contacto"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-800 hover:bg-gray-300"
            >
              <Phone className="w-5 h-5" />
              <span>Contacto</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
