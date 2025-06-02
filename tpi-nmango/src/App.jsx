import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Usuarios from './pages/Usuarios';
import Productos from './pages/Productos';
import Detalle from './pages/Detalle';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;