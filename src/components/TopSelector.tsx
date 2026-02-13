// src/components/TopSelector.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const TopSelector = () => {
  // Un pequeño estado falso para probar que los botones funcionan
  const [categoria, setCategoria] = useState("Libros de Ingeniería");

  return (
    // CONTENEDOR FLEX: Alinea los 3 elementos en fila y los separa
    <div className="flex items-center justify-center gap-4">
      
      {/* BOTÓN IZQUIERDO */}
      <button 
        className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
        onClick={() => setCategoria("Memorias de Estadía")}
      >
        <ChevronLeft size={24} />
      </button>

      {/* TEXTO CENTRAL (EL NOMBRE DEL OBJETO) */}
      <div className="px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-wider shadow-lg">
        {categoria}
      </div>

      {/* BOTÓN DERECHO */}
      <button 
        className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
        onClick={() => setCategoria("Tesis Doctorales")}
      >
        <ChevronRight size={24} />
      </button>

    </div>
  );
};