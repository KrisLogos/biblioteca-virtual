// src/components/TopRightControls.tsx
import { User, Settings } from 'lucide-react';

export const TopRightControls = () => {
  return (
    // Agrupamos los dos botones en una pequeña "píldora"
    <div className="flex items-center gap-2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
      
      {/* BOTÓN DE PERFIL */}
      <button 
        className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
        title="Mi Perfil"
      >
        <User size={20} />
      </button>

      {/* SEPARADOR VISUAL (Una línea sutil entre los botones) */}
      <div className="w-px h-6 bg-white/20"></div>

      {/* BOTÓN DE AJUSTES */}
      <button 
        className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all hover:rotate-90"
        title="Ajustes y Rendimiento"
      >
        <Settings size={20} />
      </button>

    </div>
  );
};