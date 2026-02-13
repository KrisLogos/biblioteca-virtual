// src/layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom';
// 1. IMPORTAMOS EL COMPONENTE NUEVO
import { TopSelector } from '../components/TopSelector';
import { TopRightControls } from '../components/TopRightControllers';
import { BottomDock } from '../components/BottomDock';
const MainLayout = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900">

      {/* CAPA 1: FONDO (Aquí estará el 3D) */}
      <div className="absolute inset-0 z-0">
        <Outlet /> {/* Esto renderiza Home.tsx */}
      </div>

      {/* CAPA 2: UI FLOTANTE (HUD) */}
      {/* pointer-events-none: Permite hacer clic en el 3D a través de los huecos */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6">

        {/* === ZONA SUPERIOR === */}
        {/* pointer-events-auto: Reactiva los clics para estos botones */}
        <div className="pointer-events-auto flex justify-center pt-4">
          {/* 2. AQUÍ PONEMOS NUESTRA BARRA FLOTANTE */}
          <TopSelector />
          <div className="absolute top-4 right-6">
            <TopRightControls />
          </div>
        </div>



        {/* === ZONA INFERIOR === */}
        <div className="pointer-events-auto flex justify-center pb-4">
          {/* Aquí irá el Dock inferior después */}
          <BottomDock />
        </div>

      </div>

    </div>
  );
};

export default MainLayout;