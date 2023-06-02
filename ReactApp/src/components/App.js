import React from 'react';
import NavBar from './NavBar/NavBar';
import Catalogo from './catalogo/catalogo';
import Home from './home/home.js';
import Acerca from './acerca/acerca.js';
import Contacto from './contacto/contacto.js'; // Importa el componente Contacto desde su archivo correspondiente

import { Routes, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} /> {/* Ruta para el componente Contacto */}
        </Routes>
      </div>
    );
  }
}

export default App;
