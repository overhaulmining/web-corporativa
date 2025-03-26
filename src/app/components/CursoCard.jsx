import Link from 'next/link';

const CursoCard = ({ curso }) => {
    const {
      nombre_curso,
      src_portada,
      titulo,
      descripcion,
      fecha_inicio,
      fecha_final,
    } = curso;

    const textcolor= "text-gray-100";
  
    // Construir la URL de la imagen si src_portada existe
    const imagenUrl = src_portada ? `http://127.0.0.1:8000/${src_portada}` : null;
  
    // Función para formatear fechas
    const formatDate = (dateString) =>
      dateString
        ? new Date(dateString).toLocaleDateString('es-ES')
        : 'No especificada';
  
    return (
      <div className="bg-gray-700   flex flex-col h-auto py-5 px-2 rounded-lg">
        {imagenUrl && (
          <img
            src={imagenUrl}
            alt={`Portada del curso ${nombre_curso}`}
            className="w-full h-48 object-cover rounded-lg"
            width={400}
            height={400}
          />
        )}
        <div className="p-4">
          <h2 className={`text-xl font-semibold ${textcolor}`}>{nombre_curso}</h2>
          <h3 className={`text-lg ${textcolor} pt-1`}>{titulo}</h3>
          <p className={`text-gray-400 pt-2 ${textcolor}`}>{descripcion}</p>
          <div className="pt-4">
            <p className={`text-sm ${textcolor}`}>
              <strong>Fecha de inicio:</strong> {formatDate(fecha_inicio)}
            </p>
            <p className={`text-sm ${textcolor}`}>
              <strong>Fecha de finalización:</strong> {formatDate(fecha_final)}
            </p>
          </div>
        </div>

        <div className="px-3">
          <Link
            href={`/cursos/${curso.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Ver curso
          </Link>
        </div>
      </div>
    );
  };
  
  export default CursoCard;