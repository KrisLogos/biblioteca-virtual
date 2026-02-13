import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Maestra */}
        <Route path="/" element={<MainLayout />}>
          {/* Ruta Hija (Index) */}
          <Route index element={<Home />} />
          
          {/* Aquí agregarás /perfil o /libro/:id en el futuro */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;