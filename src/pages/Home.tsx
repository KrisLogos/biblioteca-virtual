const Home = () => {
  return (
    // Este div simula el espacio 3D por ahora
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-widest animate-pulse">
          BIBLIOTECA VIRTUAL
        </h1>
        <p className="text-gray-400">Cargando entorno isométrico...</p>
      </div>
    </div>
  );
};

export default Home;