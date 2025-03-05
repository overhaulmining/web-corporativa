"use client";
import React, { useState, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useRouter, useSearchParams } from "next/navigation";

function Page() {
  const [url, setUrl] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Extraer los valores de las query params
    const ruc = searchParams.get("ruc"); 
    const placa = searchParams.get("placa");
    const pdf = searchParams.get("pdf");

    if (pdf) {
      setUrl(`http://127.0.0.1:8000/api/${pdf}`);
    }

    // Puedes usar ruc y placa aquí si los necesitas mostrar
    
  }, [searchParams]);

  const handleDownload = () => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.download = pdf.split("/").pop();
    link.click();  
  };

  return (
    <div className="px-4">
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">CERTIFICADO DE EQUIPOS</h1>

        <div className="pt-20 w-1/2 mx-auto">
          <h2 className="text-xl font-bold">Vista previa del PDF:</h2>
          <div style={{ width: "100%", height: "450px", border: "1px solid #ddd" }}>
            {url && (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={url} />
              </Worker>
            )}
          </div>
        </div>

        <button
          onClick={handleDownload}
          style={{ marginTop: "20px" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Descargar PDF
        </button>

        <button
          onClick={() => router.back()}
          style={{ marginTop: "20px" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver
        </button>
      </div>
    </div>
  );
}

export default Page;
