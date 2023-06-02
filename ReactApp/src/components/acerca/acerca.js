import React from 'react'

import './acerca.css'

export default function acerca() {
  return (
    <div id="containerAcerca">
        <h1>Acerca de nosotros</h1>
        <div className='titAcerca'>
            <h3>¿Quienes somos?</h3>
        </div>
        <div className='txtAcerca'>
            <p>
                Somos una empresa dedicada a la venta de ropa y accesorios para dama, con el objetivo de brindarle a nuestros clientes una experiencia de compra única y satisfactoria.
            </p>
        </div>
        <div className='titAcerca'>
            <h3>¿Que ofrecemos?</h3>
        </div>
        <div className='txtAcerca'>
            <p>
                Ofrecemos una gran variedad de productos de la mejor calidad y a los mejores precios, con el objetivo de que nuestros clientes puedan encontrar todo lo que necesitan en un solo lugar.
            </p>
        </div>
        <div className='titAcerca'>
            <h3>¿Por que elegirnos?</h3>
        </div>
        <div  className='txtAcerca'>
            <p>
                Porque somos una empresa comprometida con nuestros clientes, ofreciendo productos de la mejor calidad y a los mejores precios, con el objetivo de que nuestros clientes puedan encontrar todo lo que necesitan en un solo lugar.
            </p>
        </div>

    </div>
  )
}
