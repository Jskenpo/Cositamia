import React, { useState } from 'react';
import ProductCard from '../productCard/productCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './catalogo.css';

import canasta1 from '../../assets/Flores/Canasta/Canasta1.jpeg';
import canasta2 from '../../assets/Flores/Canasta/Canasta2.jpeg';
import canasta3 from '../../assets/Flores/Canasta/Canasta3.jpeg';
import canasta4 from '../../assets/Flores/Canasta/Canasta4.jpeg';

import evento1 from '../../assets/Flores/Eventos/Evento1.jpeg';
import evento2 from '../../assets/Flores/Eventos/Evento2.jpeg';
import evento3 from '../../assets/Flores/Eventos/Evento3.jpeg';

import caja1 from '../../assets/Flores/Caja/Caja1.jpeg';
import caja2 from '../../assets/Flores/Caja/Caja2.jpeg';
import caja3 from '../../assets/Flores/Caja/Caja3.jpeg';

import arreF1 from '../../assets/Flores/ArregloF/ArregloF1.jpeg';
import arreF2 from '../../assets/Flores/ArregloF/ArregloF2.jpeg';
import arreF3 from '../../assets/Flores/ArregloF/ArregloF3.jpeg';

import arreG1 from '../../assets/Flores/ArregloG/Globo1.jpeg';
import arreG2 from '../../assets/Flores/ArregloG/Globo2.jpeg';
import arreG3 from '../../assets/Flores/ArregloG/Globo3.jpeg';

import ramo1 from '../../assets/Flores/Ramo/Ramo1.jpeg';

function Catalogo({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showCategories, setShowCategories] = useState({ Canastas: true, Eventos: true, Cajas: true, ArreglosF: true, ArreglosG: true, Ramos: true }); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShow = (breakpoint, product) => {
    addToCart(product); // Utiliza addToCart en lugar de setCart
    setFullscreen(breakpoint);
    setShow(true);
    setSelectedProduct(product); // Actualiza el producto seleccionado
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleCategory = (category) => {
    setShowCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const filteredProductsCanastas = [
    {img: canasta1, nombre: 'Canasta de Flores', precio: 'Q 300.00', categoria: 'Canastas'},
    {img: canasta2, nombre: 'Canasta de Flores', precio: 'Q 350.00', categoria: 'Canastas'},
    {img: canasta3, nombre: 'Canasta de Flores', precio: 'Q 400.00', categoria: 'Canastas'},
    {img: canasta4, nombre: 'Canasta de Flores', precio: 'Q 450.00', categoria: 'Canastas'},
  ].filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProductsEventos = [
    {img: evento1, nombre: 'Arreglo para Evento', precio: 'Q 500.00', categoria: 'Eventos'},
    {img: evento2, nombre: 'Arreglo para Evento', precio: 'Q 550.00', categoria: 'Eventos'},
    {img: evento3, nombre: 'Arreglo para Evento', precio: 'Q 500.00', categoria: 'Eventos'},
  ].filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProductsCajas = [
    {img: caja1, nombre: 'Caja de Flores', precio: 'Q 200.00', categoria: 'Cajas'},
    {img: caja2, nombre: 'Caja de Flores', precio: 'Q 250.00', categoria: 'Cajas'},
    {img: caja3, nombre: 'Caja de Flores', precio: 'Q 300.00', categoria: 'Cajas'},
  ].filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProductsArreglosF = [
    {img: arreF1, nombre: 'Arreglo de Flores', precio: 'Q 150.00', categoria: 'ArreglosF'},
    {img: arreF2, nombre: 'Arreglo de Flores', precio: 'Q 200.00', categoria: 'ArreglosF'},
    {img: arreF3, nombre: 'Arreglo de Flores', precio: 'Q 250.00', categoria: 'ArreglosF'},
  ].filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProductsArreglosG = [
    {img: arreG1, nombre: 'Arreglo de Globos', precio: 'Q 100.00', categoria: 'ArreglosG'},
    {img: arreG2, nombre: 'Arreglo de Globos', precio: 'Q 150.00', categoria: 'ArreglosG'},
    {img: arreG3, nombre: 'Arreglo de Globos', precio: 'Q 200.00', categoria: 'ArreglosG'},
  ].filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProductsRamos = [
    {img: ramo1, nombre: 'Ramo de Flores', precio: 'Q 100.00', categoria: 'Ramos'},
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
          <button onClick={toggleFilters}><FontAwesomeIcon icon={faFilter} />Filtros</button>
        </div>
      </div>

      {showFilters && (
        <div className="filters-container">
          <h2 style={{marginTop:'1rem'}}>Categorías</h2>
          <label>
            <input
              type="checkbox"
              checked={showCategories.Canastas}
              onChange={() => toggleCategory('Canastas')}
            />
            Canastas
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={showCategories.Eventos}
              onChange={() => toggleCategory('Eventos')}
            />
            Eventos
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={showCategories.Cajas}
              onChange={() => toggleCategory('Cajas')}
            />
            Cajas
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={showCategories.ArreglosF}
              onChange={() => toggleCategory('ArreglosF')}
            />
            Arreglos de Flores
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={showCategories.ArreglosG}
              onChange={() => toggleCategory('ArreglosG')}
            />
            Arreglos de Globos
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={showCategories.Ramos}
              onChange={() => toggleCategory('Ramos')}
            />
            Ramos
          </label>
        </div>
      )}

      <div className="Canastas">
        {showCategories.Canastas && (
          <h1>Canastas de Flores</h1>
        )}
        {showCategories.Canastas && ( // Muestra los productos si la categoría está activa}
        <div className="product-container">
          {filteredProductsCanastas.map((product, index) => (
            <div className={`product${index + 1}`} key={index}>
              <ProductCard
                img={product.img}
                nombre={product.nombre}
                precio={product.precio}
                categoria={product.categoria}
                addToCart={addToCart}
                handleShow={() => handleShow(true, product)} // Pasa el producto y maneja el modal
              />
            </div>
          ))}
        </div>
        )}
      </div>

      <div className="Eventos">
        {showCategories.Eventos && (
          <h1>Arreglos de Eventos</h1>
        )}
        {showCategories.Eventos && ( // Muestra los productos si la categoría está activa}
        <div className="product-container">
          {filteredProductsEventos.map((product, index) => (
            <div className={`product${index + 1}`} key={index}>
              <ProductCard
                img={product.img}
                nombre={product.nombre}
                precio={product.precio}
                categoria={product.categoria}
                addToCart={addToCart}
                handleShow={() => handleShow(true, product)} // Pasa el producto y maneja el modal
              />
            </div>
          ))}
        </div>
        )}
      </div>

      <div className="Cajas">
        {showCategories.Cajas && (
          <h1>Cajas de Flores</h1>
        )}
        {showCategories.Cajas && ( // Muestra los productos si la categoría está activa}
        <div className="product-container">
          {filteredProductsCajas.map((product, index) => (
            <div className={`product${index + 1}`} key={index}>
              <ProductCard
                img={product.img}
                nombre={product.nombre}
                precio={product.precio}
                categoria={product.categoria}
                addToCart={addToCart}
                handleShow={() => handleShow(true, product)} // Pasa el producto y maneja el modal
              />
            </div>
          ))}
        </div>
        )}
      </div>

      <div className="ArreglosF">
        {showCategories.ArreglosF && (
          <h1>Arreglos de Flores</h1>
        )}
        {showCategories.ArreglosF && ( // Muestra los productos si la categoría está activa}
        <div className="product-container">
          {filteredProductsArreglosF.map((product, index) => (
            <div className={`product${index + 1}`} key={index}>
              <ProductCard
                img={product.img}
                nombre={product.nombre}
                precio={product.precio}
                categoria={product.categoria}
                addToCart={addToCart}
                handleShow={() => handleShow(true, product)} // Pasa el producto y maneja el modal
              />
            </div>
          ))}
        </div>
        )}
      </div>

      <div className="ArreglosG">
        {showCategories.ArreglosG && (
          <h1>Arreglos de Globos</h1>
        )}
        {showCategories.ArreglosG && ( // Muestra los productos si la categoría está activa}
        <div className="product-container">
          {filteredProductsArreglosG.map((product, index) => (
            <div className={`product${index + 1}`} key={index}>
              <ProductCard
                img={product.img}
                nombre={product.nombre}
                precio={product.precio}
                categoria={product.categoria}
                addToCart={addToCart}
                handleShow={() => handleShow(true, product)} // Pasa el producto y maneja el modal
              />
            </div>
          ))}
        </div>
        )}
      </div>

      <div className="Ramos">
        {showCategories.Ramos && (
          <h1>Ramos</h1>
        )}
        {showCategories.Ramos && ( // Muestra los productos si la categoría está activa}
        <div className="product-container">
          {filteredProductsRamos.map((product, index) => (
            <div className={`product${index + 1}`} key={index}>
              <ProductCard
                img={product.img}
                nombre={product.nombre}
                precio={product.precio}
                categoria={product.categoria}
                addToCart={addToCart}
                handleShow={() => handleShow(true, product)} // Pasa el producto y maneja el modal
              />
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}

export default Catalogo;