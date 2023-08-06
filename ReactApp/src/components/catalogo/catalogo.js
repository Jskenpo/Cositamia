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
    { img: producto1, nombre: 'Vestido Largo', precio: 'Q 300.00', descripcion: ["Vestido largo con estampado floral.",
    "Mangas cortas.",
    "Tela suave y cómoda de alta calidad.",
    "Ideal para ocasiones formales y casuales.",
    "Disponible en varias tallas y colores."], categoria: 'Vestidos' },

    { img: producto3, nombre: 'Vestido Cafe', precio: 'Q 500.00', descripcion: ["Vestido corto color café.",
    "Mangas cortas.",
    "Tela suave y cómoda de alta calidad.",
    "Ideal para ocasiones formales y casuales.",
    "Disponible en varias tallas y colores."], categoria: 'Vestidos' },
    
    { img: producto4, nombre: 'Vestido de Lona', precio: 'Q 400.00', descripcion: ["Vestido corto de lona.",
    "Mangas cortas.",
    "Tela suave y cómoda de alta calidad.",
    "Ideal para ocasiones formales y casuales.",
    "Disponible en varias tallas y colores."], categoria: 'Vestidos' },
    
    { img: producto5, nombre: 'Pieza de vestido', precio: 'Q 700.00', descripcion: ["Pieza de vestido.",
    "Mangas cortas.",
    "Tela suave y cómoda de alta calidad.",
    "Ideal para ocasiones formales y casuales.",
    "Disponible en varias tallas y colores."], categoria: 'Vestidos' },
    
    { img: producto10, nombre: 'Vestido Negro', precio: 'Q 500.00', descripcion: ["Vestido largo color negro.",
    "Mangas cortas.",
    "Tela suave y cómoda de alta calidad.",
    "Ideal para ocasiones formales y casuales.",
    "Disponible en varias tallas y colores."], categoria: 'Vestidos' },
  ].filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProductsAccesorios = [
    { img: producto2, nombre: 'Bolso Azul', precio: 'Q 250.00', descripcion: ["Bolso de color azul.",
    "Correa ajustable para llevar al hombro o cruzado.",
    "Bolsillos internos y externos para mayor organización.",
    "Elegante diseño para uso diario o eventos especiales.",
    "Disponible en diferentes colores y tamaños."], categoria: 'Accesorios' },
    
    { img: producto6, nombre: 'Collar de Estrella', precio: 'Q 300.00', descripcion: ["Collar de estrella de oro de alta calidad.",
    "Diseño elegante y único.",
    "Cadena ajustable para diferentes longitudes.",
    "Ideal para combinar con diferentes estilos.",
    "Un accesorio llamativo para cualquier ocasión."], categoria: 'Accesorios' },
    
    { img: producto7, nombre: 'Bolso Blanco', precio: 'Q 250.00', descripcion: ["Bolso de color blanco.",
    "Correa ajustable para llevar al hombro o cruzado.",
    "Bolsillos internos y externos para mayor organización.",
    "Elegante diseño para uso diario o eventos especiales.",
    "Disponible en diferentes colores y tamaños."], categoria: 'Accesorios' },
    
    { img: producto8, nombre: 'Bolso Amarillo', precio: 'Q 250.00', descripcion: ["Bolso de color amarillo.",
    "Correa ajustable para llevar al hombro o cruzado.",
    "Bolsillos internos y externos para mayor organización.",
    "Elegante diseño para uso diario o eventos especiales.",
    "Disponible en diferentes colores y tamaños."], categoria: 'Accesorios' },
    
    { img: producto9, nombre: 'Bolso de Lona', precio: 'Q 300.00', descripcion: ["Bolso de lona.",
    "Correa ajustable para llevar al hombro o cruzado.",
    "Bolsillos internos y externos para mayor organización.",
    "Elegante diseño para uso diario o eventos especiales.",
    "Disponible en diferentes colores y tamaños."], categoria: 'Accesorios' },
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
              <ProductCard img={product.img} nombre={product.nombre} precio={product.precio} descripcion={product.descripcion} categoria={product.categoria}/>
            </div>
          ))}
        </div>
      </div>
      <div className="Accesorios">
        <h1>Accesorios</h1>
        <div className="product-container">
          {filteredProductsAccesorios.map((product, index) => (
            <div className={`product${index + 1}`} key={index}>
              <ProductCard img={product.img} nombre={product.nombre} precio={product.precio} descripcion={product.descripcion} categoria={product.categoria}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
