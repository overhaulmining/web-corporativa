"use client"
// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  // Definición del estado inicial
  
  pdf: '',  // Estado inicial de 'pdf'
  setPdf: (src) => set({ pdf: src }),  // Acción para actualizar el valor de 'pdf'


  
}));

export default useStore;
