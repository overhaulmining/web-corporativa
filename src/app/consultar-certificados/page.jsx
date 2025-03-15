import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
        <div className="py-6 items-center max-w-6xl m-auto">
            <p className="text-xl font-bold text-center">Consultar validez de cerficados</p>
            <br />
            <Link href={"/consultar-certificados/cert-person"}>
            <button type="button" className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800">
                Certificaciones de personal    
            </button>
            </Link>
            <br />
            <Link href={"/consultar-certificados/cert-equipo"}>
            <button type="button" className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800">
                Certificaciones de equipo 
            </button>
            </Link>
        </div>
    </div>
  );
}
