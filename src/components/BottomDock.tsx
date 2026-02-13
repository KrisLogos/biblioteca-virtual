// src/components/BottomDock.tsx
import { NavLink } from 'react-router-dom';
import { Home, Search, Bookmark, Map, Lock } from 'lucide-react';

export const BottomDock = () => {
  return (
    // Contenedor principal: estilo píldora/vidrio (Glassmorphism)
    <div className="flex items-center gap-6 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
      
      {/* 1. BÚSQUEDA (El Radar para buscar PDFs) */}
      <button 
        className="text-white/70 hover:text-white hover:scale-110 transition-all p-2 focus:outline-none"
        title="Buscar en el catálogo"
      >
        <Search size={26} />
      </button>

      {/* 2. HOME (Botón de Pánico / Vista Principal 3D) */}
      {/* Usamos NavLink porque este sí cambia la ruta principal */}
      <NavLink 
        to="/" 
        title="Mi Estantería"
        className={({ isActive }) => 
          `p-2 transition-all hover:scale-110 ${isActive ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-white/70 hover:text-white'}`
        }
      >
        <Home size={28} />
      </NavLink>

      {/* 3. MOCHILA (Lecturas activas / Guardados) */}
      <button 
        className="text-white/70 hover:text-white hover:scale-110 transition-all p-2 focus:outline-none"
        title="Mi Mochila (Lecturas activas)"
      >
        <Bookmark size={26} />
      </button>

      {/* 4. CAMPUS (Función Social - Bloqueada por ahora) */}
      {/* Nota las clases opacity-50 y cursor-not-allowed */}
      <div 
        className="relative p-2 opacity-50 cursor-not-allowed transition-all hover:opacity-70" 
        title="Próximamente: Visita otros campus"
      >
        <Map size={26} className="text-white/70" />
        
        {/* Truco: Un candadito miniatura superpuesto en la esquina del ícono */}
        <div className="absolute top-1 right-1 bg-gray-900 rounded-full p-[2px]">
          <Lock size={10} className="text-white" />
        </div>
      </div>

    </div>
  );
};