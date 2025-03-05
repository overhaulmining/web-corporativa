"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // Estado para los inputs
  const [ruc, setRuc] = useState("");
  const [placa, setPlaca] = useState("");
  const [loading, setLoading] = useState(false);

  // Estado para los errores de validación
  const [error, setError] = useState("");

  // Router
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validar que ambos campos estén completos
    if (!ruc || !placa) {
      setError("Por favor complete todos los campos.");
      setLoading(false);
      return;
    }

    // Limpiar errores previos
    setError("");

    // Enviar los datos a la API
    const response = await fetch("http://127.0.0.1:8000/api/consulta-certificados/equipos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ruc,
        placa,
      }),
    });

    if (!response.ok) {
      setError("certificado no encontrado");
      setLoading(false);
      return;
    }

    const data = await response.json();
    console.log("visualización de la data", data);

    if (data) {
      // Redirigir con las query params ruc, placa y pdf
      setError("");
      setLoading(false);
      router.push(`/consultar-certificados/certificados-equipos/resultado?ruc=${ruc}&placa=${placa}&pdf=${data.src}`);
    }

    if (!data) {
      setError("No se encontraron certificados");
      setLoading(false);
    } else {
      // Manejar errores de la respuesta
      setError("Error al obtener certificados");
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[75vh] flex items-center justify-center bg-gray-200 px-10">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg py-10">
        <p className="text-2xl font-extrabold text-center text-gray-800 mb-6">CONSULTAR CERTIFICACIÓN EQUIPOS</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="ruc" className="block text-sm font-medium text-gray-700">RUC:</label>
            <input
              type="text"
              id="ruc"
              value={ruc}
              onChange={(e) => setRuc(e.target.value)}
              className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="placa" className="block text-sm font-medium text-gray-700">Placa:</label>
            <input
              type="text"
              id="placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          {loading ? (
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 border-4 border-t-4 border-blue-900 border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-3 mt-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none"
            >
              Buscar
            </button>
          )}
        </form>

        <div className="mt-10 text-center text-sm text-gray-600">
          <p className="font-semibold">Overhaul Mining - Ensayos y certificaciones</p>
          <p>Para consultar acerca del estado de su certificación escribir a: <span className="font-semibold">informes@overhaulmining.com</span></p>
          <p className="mt-3">Copyright © 2025. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
