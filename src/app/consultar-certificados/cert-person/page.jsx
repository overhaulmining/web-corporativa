"use client";

import { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender
} from "@tanstack/react-table";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Función para formatear la fecha
const formatDate = (dateString) => {
  if (!dateString) return "Sin fecha";
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

import Link from 'next/link'; // Usamos el Link de Next.js
import { FaArrowLeft } from 'react-icons/fa'; // Ícono de flecha izquierda de react-icons

const BackLink = () => {
  return (
    <Link
      href="/consultar-certificados" // Cambia esto por la ruta deseada, ej. "/consultar-certificados"
      style={{
        textDecoration: 'none',
        color: 'blue',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <FaArrowLeft /> {/* Ícono de flecha */}
      Atrás
    </Link>
  );
};


export default function CertificadosTable() {
  const [dni, setDni] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [activeTab, setActiveTab] = useState("dni");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const fetchData = async () => {
    // Validar antes de enviar
    if (activeTab === "dni" && !dni.trim()) {
      alert("Por favor, ingrese un DNI.");
      return;
    }
    if (activeTab === "nombres" && (!nombres.trim() || !apellidoPaterno.trim())) {
      alert("Por favor, complete al menos nombres y apellido paterno.");
      return;
    }
  
    setLoading(true);
    try {
      let url = `${API_URL}/api/consulta-certificados/personas?`;
      if (activeTab === "dni") {
        url += `dni=${encodeURIComponent(dni)}`;
      } else {
        url += `nombres=${encodeURIComponent(nombres)}&apellido_paterno=${encodeURIComponent(apellidoPaterno)}`;
        if (apellidoMaterno.trim()) {
          url += `&apellido_materno=${encodeURIComponent(apellidoMaterno)}`;
        }
      }
  
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json",
        },
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `Error HTTP: ${res.status}`);
      }
  
      const result = await res.json();
      // Asegurarnos de que siempre tengamos un array, incluso si está vacío
      const certificados = Array.isArray(result.certificados) 
        ? result.certificados 
        : Array.isArray(result) 
          ? result 
          : [];
      
      setData(certificados);
      
      if (certificados.length > 0) {
        setUserInfo({
          nombre: [
            certificados[0].apellido_paterno,
            certificados[0].apellido_materno,
            certificados[0].primer_nombre,
            certificados[0].segundo_nombre
          ]
            .filter(Boolean)
            .join(" "),
          fotocheck: certificados[0].fotocheck || null,
          dni: certificados[0].dni || dni
        });
      } else {
        setUserInfo(null); // Resetear userInfo si no hay resultados
        alert("No se encontraron certificados para esta búsqueda.");
      }
    } catch (error) {
      console.error("Error en la consulta:", error);
      setData([]); // Asegurar que data sea un array vacío en caso de error
      setUserInfo(null);
      alert(error.message || "Ocurrió un error al realizar la búsqueda");
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setDni("");
    setNombres("");
    setApellidoPaterno("");
    setApellidoMaterno("");
    setData([]);
    setUserInfo(null);
    setSearch("");
    setActiveTab("dni");
  };
  // COLUMNAS DATOS
  const columns = [
    { accessorKey: "nombre_curso", header: "Certificado" },
    { accessorKey: "certificadora", header: "Empresa Certificadora" },
    {
      accessorKey: "fecha_servicio",
      header: "Fecha",
      cell: ({ row }) => formatDate(row.original.fecha_servicio),
    },
    {
      accessorKey: "src",
      header: "PDFs",
      cell: ({ row }) => {
        const pdfPath = row.original.src;
        if (!pdfPath) return "Sin PDF";
    
        const fullUrl = `${API_URL}/storage/${pdfPath}`;
        console.log("URL generada:", fullUrl);
    
        const handleDownload = () => {
          // Crear un enlace temporal y simular un clic
          const link = document.createElement("a");
          link.href = fullUrl;
          link.download = pdfPath.split("/").pop() || "certificado.pdf"; // Nombre del archivo
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          console.log("Descarga iniciada para:", fullUrl);
        };
    
        return (
          <button onClick={handleDownload} className="text-blue-600 hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { globalFilter: search },
    onGlobalFilterChange: setSearch,
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <BackLink/>
      <h2 className="font-bold text-2xl mb-2">Certificaciones de Personal</h2>
      {!data.length ? (
        <div className="mb-4">
          {/* Tabs */}
          <div className="flex border-b mb-4">
            <button
              className={`px-4 py-2 -mb-px text-sm font-medium ${
                activeTab === "dni"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("dni")}
            >
              Buscar por DNI
            </button>
            <button
              className={`px-4 py-2 -mb-px text-sm font-medium ${
                activeTab === "nombres"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("nombres")}
            >
              Buscar por Nombres y Apellidos
            </button>
          </div>

          {/* Contenido de las pestañas */}
          {activeTab === "dni" ? (
            <div className="flex gap-2 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">DNI</label>
                <Input
                  type="text"
                  placeholder="Ingrese DNI"
                  className="w-40"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </div>
              <Button onClick={fetchData} disabled={loading}>
                {loading ? "Buscando..." : "Buscar"}
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 flex-col md:flex-row">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Nombres</label>
                  <Input
                    type="text"
                    placeholder="Nombres"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Apellido Paterno</label>
                  <Input
                    type="text"
                    placeholder="Apellido Paterno"
                    value={apellidoPaterno}
                    onChange={(e) => setApellidoPaterno(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Apellido Materno (opcional)</label>
                  <Input
                    type="text"
                    placeholder="Apellido Materno"
                    value={apellidoMaterno}
                    onChange={(e) => setApellidoMaterno(e.target.value)}
                  />
                </div>
              </div>
              <Button onClick={fetchData} disabled={loading}>
                {loading ? "Buscando..." : "Buscar"}
              </Button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="mb-6 p-4 border rounded-lg bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="flex gap-3 items-end">
                <h2 className="text-lg font-semibold">{userInfo?.nombre}</h2>
                <p className="text-gray-600">DNI: {userInfo?.dni}</p>
                <p className="text-gray-600">Fotocheck: {userInfo?.fotocheck}</p>
              </div>
            </div>
            <Button variant="" onClick={clearData} className="mt-4">
              Nueva búsqueda
            </Button>
          </div>

          <Input
            type="text"
            placeholder="Buscar certificado..."
            className="mb-4 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Table className="border">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center">
                    No hay resultados
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <div className="flex justify-between mt-4">
            <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Anterior
            </Button>
            <span>Página {table.getState().pagination.pageIndex + 1}</span>
            <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Siguiente
            </Button>
          </div>
        </>
      )}
    </div>
  );
}