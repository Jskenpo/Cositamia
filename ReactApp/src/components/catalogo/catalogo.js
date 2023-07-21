import React, { useState } from 'react';
import ProductCard from '../productCard/productCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './catalogo.css';

import producto1 from '../../assets/imas/Producto1.jpg';
import producto2 from '../../assets/imas/Producto2.jpg';
import producto3 from '../../assets/imas/Producto3.jpg';
import producto4 from '../../assets/imas/Producto4.jpg';
import producto5 from '../../assets/imas/Producto5.jpg';
import producto6 from '../../assets/imas/Producto6.jpg';
import producto7 from '../../assets/imas/Producto7.jpg';
import producto8 from '../../assets/imas/Producto8.jpg';
import producto9 from '../../assets/imas/Producto9.jpg';
import producto10 from '../../assets/imas/Producto10.jpg';

function Catalogo() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProductsVestidos = [
    { img: producto1, nombre: 'Vestido Largo', precio: 'Q 300.00' },
    { img: producto3, nombre: 'Vestido Cafe', precio: 'Q 500.00' },
    { img: producto4, nombre: 'Vestido de Lona', precio: 'Q 400.00' },
    { img: producto5, nombre: 'Pieza de vestido', precio: 'Q 700.00' },
    { img: producto10, nombre: 'Vestido Negro', precio: 'Q 500.00' },
  ].filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProductsAccesorios = [
    { img: producto2, nombre: 'Bolso Azul', precio: 'Q 250.00' },
    { img: producto6, nombre: 'Collar de Estrella', precio: 'Q 300.00' },
    { img: producto7, nombre: 'Bolso Blanco', precio: 'Q 250.00' },
    { img: producto8, nombre: 'Bolso Amarillo', precio: 'Q 250.00' },
    { img: producto9, nombre: 'Bolso de Lona', precio: 'Q 300.00' },
  ].filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className='Busqueda'>
        <div className="icono">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="rectangle">
          <input
            type="text"
            className="textbox"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar producto..."
          />
        </div>
        <div className="filtros">
          Filtros
          <div className="iconoF">
            <FontAwesomeIcon icon={faFilter} />
          </div>
        </div>
      </div>
      <div className="Vestidos">
        <h1>Vestidos</h1>
        <div className="product-container">
          {filteredProductsVestidos.map((product, index) => (
            <div className={`product${index + 1}`} key={index}>
              <ProductCard img={product.img} nombre={product.nombre} precio={product.precio} />
            </div>
          ))}
        </div>
      </div>
      <div className="Accesorios">
        <h1>Accesorios</h1>
        <div className="product-container">
          {filteredProductsAccesorios.map((product, index) => (
            <div className={`product${index + 1}`} key={index}>
              <ProductCard img={product.img} nombre={product.nombre} precio={product.precio} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
