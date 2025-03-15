import Link from "next/link";
import { FaUser } from "react-icons/fa"; // Ícono para personal (persona)
import { FaCogs } from "react-icons/fa"; // Ícono para equipos (máquinas/engranajes)

export default function Home() {
  return (
    <div className="w-full">
      <div className="py-6 items-center max-w-6xl m-auto">
        <p className="text-2xl font-bold text-center">
          Consultar validez de certificados
        </p>
        <div className="flex gap-3 w-full pt-8 justify-center">
          <Link href={"/consultar-certificados/cert-person"}>
            <button
              type="button"
              className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 flex items-center gap-2"
            >
              <FaUser /> {/* Ícono de usuario */}
              Certificaciones de personal
            </button>
          </Link>
          <Link href={"/consultar-certificados/cert-equipos"}>
            <button
              type="button"
              className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 flex items-center gap-2"
            >
              <FaCogs /> {/* Ícono de engranajes para máquinas */}
              Certificaciones de equipo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}