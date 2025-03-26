'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import CursoCard from '@/app/components/CursoCard';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  //loading
  const [loading, setLoading] = useState(true);
  //error
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/public/cursos')
      .then((response) => {
        setCursos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='bg-gray-800'>
      {loading ? (
        <div className='flex items-center justify-center h-screen text-white'>
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className='flex items-center justify-center h-16 text-white'>
          <p>Error: {error.message}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pt-20 container mx-auto">
          {cursos.map((curso) => (
            <CursoCard key={curso.id} curso={curso} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cursos;