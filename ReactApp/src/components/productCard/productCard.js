import React from 'react';
import './productCard.css';

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.img} alt="Producto 1" />
      <div id="InfoProduct">
        <p className="Texto1">{props.nombre}</p>
        <p className="SubTexto1">{props.precio}</p>
      </div>
    </div>
  );
}
