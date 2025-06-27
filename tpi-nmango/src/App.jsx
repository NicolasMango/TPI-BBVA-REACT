import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container ,ThemeProvider , CssBaseline} from '@mui/material';
import Navbar from './components/ui/Navbar';
import Inicio from './pages/Inicio';
import Usuarios from './pages/Usuarios';
import Productos from './pages/Productos';
import Detalle from './pages/Detalle';
import { getTheme } from './components/ui/theme';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const theme = getTheme(mode);

  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Container sx={{ marginTop: 10 }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/detalle/:id" element={<Detalle />} /> 
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;