import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Usuarios from './pages/Usuarios';
import Productos from './pages/Productos';
import Detalle from './pages/Detalle';

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 10 }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/detalle/:id" element={<Detalle />} /> 
        </Routes>
      </Container>
    </>
  );
}

export default App;