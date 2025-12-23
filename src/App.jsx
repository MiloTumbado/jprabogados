import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import FilosofiaPage from './pages/FilosofiaPage';
import ServiciosPage from './pages/ServiciosPage';
import EquipoPage from './pages/EquipoPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<QuienesSomosPage />} />
          <Route path="/filosofia" element={<FilosofiaPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/equipo" element={<EquipoPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
