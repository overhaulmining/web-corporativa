import React from 'react';
import Image from 'next/image';

function SubNavbar() {
    return (
        <div>
            <div className="bg-gray-100">
                <div className="flex justify-between items-center max-w-6xl m-auto py-1">
                    <Image src="/logo.png" alt="Logo" width={120} height={100} />
                    <Image src="/cert_iso-remove.png" alt="Certificación ISO" width={240} height={100} quality={100} />
                    <ul className="flex text-sm gap-6 items-center font-sans">
                        <li className="hover:text-blue-500 transition-colors duration-300">Inicio</li>
                        <li className="hover:text-blue-500 transition-colors duration-300">Servicios</li>
                        <li className="hover:text-blue-500 transition-colors duration-300">Cursos END</li>
                        <li className="hover:text-blue-500 transition-colors duration-300">Nosotros</li>
                        <li className="hover:text-blue-500 transition-colors duration-300">Contáctanos</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SubNavbar;
