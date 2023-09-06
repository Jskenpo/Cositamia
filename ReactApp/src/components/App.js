import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import Catalogo from './catalogo/catalogo';
import Home from './home/home.js';
import Acerca from './acerca/acerca.js';
import Contacto from './contacto/contacto.js';
import Carrito from './carrito/carrito.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo addToCart={addToCart} />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;

