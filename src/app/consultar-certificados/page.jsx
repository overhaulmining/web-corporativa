import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[50vh]  flex gap-10 items-center justify-center bg-gray-100">
      <div className="text-center max-w-lg w-full">
        <p className="text-3xl font-bold text-gray-800 mb-8">
          Consultar validez de certificados
        </p>
        <div className="space-y-2 flex flex-col ">
          <Link href="/consultar-certificados/certificados-personas">
            <button
              type="button"
              className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none dark:focus:ring-blue-800"
            >
              Certificaciones de personal
            </button>
          </Link>
          <Link href="/consultar-certificados/certificados-equipos">
            <button
              type="button"
              className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none dark:focus:ring-blue-800"
            >
              Certificaciones de equipo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
