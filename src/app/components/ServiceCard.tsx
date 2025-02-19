import React from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  services: string[];
  image: string;
}

export function ServiceCard({ title, services, image }: ServiceCardProps) {
  return (
    <div className="bg-gray-800  rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          height={224}
          width={448}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-4">{title}</h3>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-100">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}