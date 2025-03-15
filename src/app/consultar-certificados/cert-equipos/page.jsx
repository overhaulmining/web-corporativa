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


export default function EquiposTable() {
  const [ruc, setRuc] = useState("");
  const [placa, setPlaca] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [equipoInfo, setEquipoInfo] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const fetchData = async () => {
    // Validar que al menos un campo esté lleno
    if (!ruc.trim() && !placa.trim()) {
      alert("Por favor, ingrese al menos un RUC o una Placa.");
      return;
    }

    setLoading(true);
    try {
      let url = `http://127.0.0.1:8000/api/consulta-certificados/equipos?`;
      const params = [];
      if (ruc.trim()) params.push(`ruc=${encodeURIComponent(ruc)}`);
      if (placa.trim()) params.push(`placa=${encodeURIComponent(placa)}`);
      url += params.join('&');

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
      setData(result.certificados || result);
      if (result && result.length > 0) {
        setEquipoInfo({
          empresa: result[0].empresa || "Sin nombre de empresa",
          placa: result[0].placa || placa,
          ruc: result[0].ruc || ruc
        });
      }
    } catch (error) {
      console.error("Error en la consulta:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setRuc("");
    setPlaca("");
    setData([]);
    setEquipoInfo(null);
    setSearch("");
  };

  const columns = [
    { accessorKey: "tipo_unidad", header: "Equipo" },
    { accessorKey: "certificadora", header: "Empresa Certificadora" },
    { accessorKey: "inspector", header: "Inspector" },
    {
      accessorKey: "fecha_servicio",
      header: "Fecha",
      cell: ({ row }) => formatDate(row.original.fecha_servicio)
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
      <h2 className="font-bold text-2xl mb-3">Certificaciones de Equipos</h2>
      {!data.length ? (
        <div className="mb-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">RUC</label>
                <Input
                  type="text"
                  placeholder="Ingrese RUC (opcional)"
                  value={ruc}
                  onChange={(e) => setRuc(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Placa</label>
                <Input
                  type="text"
                  placeholder="Ingrese Placa (opcional)"
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={fetchData} disabled={loading}>
              {loading ? "Buscando..." : "Buscar"}
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6 p-4 border rounded-lg bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="flex gap-3 items-end">
                <h2 className="text-lg font-semibold">{equipoInfo?.empresa}</h2>
                <p className="text-gray-600">RUC: {equipoInfo?.ruc}</p>
                <p className="text-gray-600">Placa: {equipoInfo?.placa}</p>
              </div>
            </div>
            <Button variant="" onClick={clearData} className="mt-4">
              Nueva búsqueda
            </Button>
          </div>

          <Input
            type="text"
            placeholder="Buscar equipo..."
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