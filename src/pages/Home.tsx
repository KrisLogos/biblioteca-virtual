import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, useGLTF } from '@react-three/drei';
import Librero from '../components/Librero';

const Home = () => {
  return (
    // 1. Contenedor principal: Cambié h-full por h-screen para asegurar que tome toda la ventana. 
    // Agregué 'relative' para poder encimar la UI.
    <div className="w-full h-screen relative bg-gradient-to-b from-gray-800 to-gray-900">

      {/* 2. Capa de UI (HTML tradicional) */}
      {/* 'absolute inset-0' la estira en toda la pantalla. 'z-10' la pone por encima del 3D. */}
      {/* 'pointer-events-none' evita que este div bloquee los clics hacia el 3D en el futuro. */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-widest animate-pulse drop-shadow-lg">
          BIBLIOTECA VIRTUAL
        </h1>
        <p className="text-gray-300">Entorno isométrico base cargado</p>
      </div>

      {/* 3. Capa 3D (React Three Fiber) */}
      <Canvas
        frameloop="demand" // <-- AGREGADO
        dpr={[1, 2]}       // <-- AGREGADO
        gl={{ preserveDrawingBuffer: true, antialias: true }} // <-- AGREGADO
        // Posición [5, 5, 5] nos da ese ángulo isométrico clásico mirando hacia el centro
        camera={{ position: [3.8, 1, 4], fov: 43 }}
      >
        {/* Iluminación básica */}
        
        {/* Borramos la ambientLight y ponemos la hemisphereLight para iluminar los estantes desde abajo */}
        <hemisphereLight args={['#ffffff', '#9ca3af', 2]} />
        <directionalLight position={[10, 10,10]} intensity={1} />

        {/* El cubo de prueba en el centro de tu escena */}
        <Suspense fallback={null}>
          <Librero />
        </Suspense>


        {/* TU NUEVO SUELO (Visible y alineado) */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          // X=0: Centrado horizontalmente
          // Y=-2: Justo en la base del cubo
          // Z=0: Alineado con la profundidad (el lado de 3) de tu cubo
          position={[0, -2, 0]}
        >
          {/* ancho (5): Se extiende hacia los lados (lo que buscabas).
             alto (3): Coincide EXACTO con la profundidad de tu cubo.
          */}
          <planeGeometry args={[5, 3]} />
          <meshStandardMaterial color="#a32d2d" />
        </mesh>
        {/* --- LA MAGIA: SOMBRAS DE CONTACTO --- */}
        {/* Esto genera una sombra falsa pero realista justo debajo de los objetos */}
        <ContactShadows
          frames={1}
          position={[0, -1.99, 0]} // Apenas un milímetro arriba del suelo rojo para que no parpadee
          opacity={0.6}            // Qué tan oscura es la sombra
          scale={10}               // El tamaño del área de sombra
          blur={2.5}               // Qué tan difusa es (entre más alto, más suave)
          far={4}                  // Qué tan lejos debe estar el objeto para dejar de proyectar sombra
          color="#000000"          // Color de la sombra
        />
      </Canvas>

    </div>
  );
};

export default Home;