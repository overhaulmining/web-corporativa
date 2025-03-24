// File: /app/registro-participante/page.jsx
"use client"; // para usar hooks en Next.js 13+

import React, { useState } from "react";

const RegistroParticipante = () => {
  // State para campos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    empresa: "",
    telefono: "",
    correo: "",
    fotocheck: "",
    area: "",
    observaciones: "",
    categoria: "",
    subCategoria: "",
  });

  // Opciones del select principal
  const categorias = [
    { label: "IZAJE", value: "IZAJE" },
    { label: "LINEA AMARILLA", value: "LINEA_AMARILLA" },
    { label: "HERRAMIENTAS MANUALES Y DE PODER", value: "HERRAMIENTAS" },
    { label: "END", value: "END" },
  ];

  // Sub-opciones basadas en la categoría seleccionada
  const subOpciones = {
    IZAJE: [
      "Operador Grúa Móvil",
      "Operador Grúa Articulada",
      "Operador Telehandler",
      "Operador Grúa Manlift", 
      "Operador Montacargas",
      "Operador de Transpaleta manual ",
      "Operador de Grúa Puente ",
      "Pañolero- Elementos de izaje ",
      "Rigger de izajes",
      "Operador de monorriel",
      "Operador Polipasto sobre camioneta ",
      "Operador de Tecle Manual ",
      "Inducción izajes Newmont ",
      "Operador Grúa Franna ",
      "Supervisor de lzaje ",
      "Vientero de izaje",
      "Otros",
    ],
    LINEA_AMARILLA: [
      "Operador de Excavadora",
      "Operador de Cargador Portaherramientas IT",
      "Operador de Cargador Frontal",
      "Operador de Retroexcavadora",
      "Operador de Motoniveladora",
      "Operado de Bolter ",
      "Operador de Scaler ()perador de Jumbo ",
      "Operador Lanzador Shotcrete ",
      "Operador de Anfo Loader ",
      "Operador de Simba/ Taladros ",
      "Operador de Rodillo", 
      "Otros",
    ],
    HERRAMIENTAS: [
      "SEG. EN EL USO DE PISTOLA ELECTRICA",
      "SEG. EN EL USO DE PISTOLA NEUMATICA",
      "SEG. EN EL USO DE RAD ELECTRICO Y NEUMATICO",
      "SEG. EN EL USO DE GATA ELECTRO HIDRAULICA ENERPAC",
      "SEG. EN EL USO DE PISTOLAS DE TORQUE CONTROLADO",
      "SEG. EN EL USO DE PULIDORA INALAMBRICA",
      "SEG. EN EL USO DE PULIDORA NEUMATICA",
      "SEG.EN EL USO DE TALADRO ELECTRO / NEUMATICO",
      "SEG. EN EL USO DE TORQUIMETRO",
      "SEG. EN EL USO DE TURBINETA",
      "SEG. EN EL USO DE VOLTIMETRO Y KIT DE DESCARGA",
      "SEG.EN EL USO DE BOMBA NEUMATICA DE GRASA/ACEITE",
      "SEG.EN EL USO DE STOCKA",
      "Otros",
    ],
    END: [
      "Curso de Particulas Magneticas (MT)",
      "Curso de Líquidos Penetrantes (PT)",
      "Curso de Inspeccion Visual (VT)",
      "Curso de Ultrasonido (UT)", 
      "otros "
    ],
  };

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Manejador de envío de formulario (ejemplo)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    // Aquí podrías hacer la lógica de guardado o llamado a un API.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Registro de Participantes
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block mb-1 font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa el nombre"
              required
            />
          </div>

          {/* Apellidos */}
          <div>
            <label
              htmlFor="apellidos"
              className="block mb-1 font-medium text-gray-700"
            >
              Apellidos:
            </label>
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa los apellidos"
              required
            />
          </div>

          {/* Empresa */}
          <div>
            <label
              htmlFor="empresa"
              className="block mb-1 font-medium text-gray-700"
            >
              Empresa:
            </label>
            <input
              type="text"
              name="empresa"
              id="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa el nombre de la empresa"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label
              htmlFor="telefono"
              className="block mb-1 font-medium text-gray-700"
            >
              Teléfono:
            </label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa el teléfono"
            />
          </div>

          {/* Correo */}
          <div>
            <label
              htmlFor="correo"
              className="block mb-1 font-medium text-gray-700"
            >
              Correo:
            </label>
            <input
              type="email"
              name="correo"
              id="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa el correo"
              required
            />
          </div>

          {/* Fotocheck */}
          <div>
            <label
              htmlFor="fotocheck"
              className="block mb-1 font-medium text-gray-700"
            >
              Fotocheck:
            </label>
            <input
              type="text"
              name="fotocheck"
              id="fotocheck"
              value={formData.fotocheck}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nro. de fotocheck"
            />
          </div>

          {/* Área */}
          <div>
            <label
              htmlFor="area"
              className="block mb-1 font-medium text-gray-700"
            >
              Área:
            </label>
            <input
              type="text"
              name="area"
              id="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Área"
            />
          </div>

          {/* Observaciones */}
          <div>
            <label
              htmlFor="observaciones"
              className="block mb-1 font-medium text-gray-700"
            >
              Observaciones:
            </label>
            <textarea
              name="observaciones"
              id="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Agrega observaciones si es necesario"
            />
          </div>

          {/* Categoría (Select principal) */}
          <div>
            <label
              htmlFor="categoria"
              className="block mb-1 font-medium text-gray-700"
            >
              Categoría:
            </label>
            <select
              name="categoria"
              id="categoria"
              value={formData.categoria}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Selecciona una opción --</option>
              {categorias.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategoría (Select dinámico) */}
          {formData.categoria && (
            <div>
              <label
                htmlFor="subCategoria"
                className="block mb-1 font-medium text-gray-700"
              >
                Opciones de {formData.categoria}:
              </label>
              <select
                name="subCategoria"
                id="subCategoria"
                value={formData.subCategoria}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Selecciona una opción --</option>
                {subOpciones[formData.categoria]?.map((subCat, idx) => (
                  <option key={idx} value={subCat}>
                    {subCat}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Botón de enviar */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroParticipante;
