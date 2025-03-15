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
  }); // Formato: DD/MM/YYYY
};

export default function CertificadosTable() {
  const [dni, setDni] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const fetchData = async () => {
    if (!dni.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/consulta-certificados/personas?dni=${dni}`);
      const result = await res.json();
      setData(result.certificados || result);
      setUserInfo({
        nombre: [
          result[0].apellido_paterno,
          result[0].apellido_materno,
          result[0].primer_nombre,
          result[0].segundo_nombre
        ]
          .filter(Boolean)
          .join(" "),
        fotocheck: result[0].fotocheck || null,
        dni: dni
      });
    } catch (error) {
      console.error("Error en la consulta:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setDni("");
    setData([]);
    setUserInfo(null);
    setSearch("");
  };

  const columns = [
    { accessorKey: "nombre_curso", header: "Certificado" },
    { accessorKey: "certificadora", header: "Empresa Certificadora" },
    {
      accessorKey: "fecha_servicio",
      header: "Fecha",
      cell: ({ row }) => formatDate(row.original.fecha_servicio) // Formatear la fecha aquí
    },
    { accessorKey: "certificado", header: "PDF" },
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
      {!data.length ? (
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder="Ingrese DNI"
            className="w-40"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <Button onClick={fetchData} disabled={loading}>
            {loading ? "Buscando..." : "Buscar"}
          </Button>
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