import React from 'react'
import './home.css'
import imag_Loct from '../../assets/imas/Loc.JPG'
import Carousel_1 from '../Carousels/carousels.js'
import producto1 from '../../assets/imas/Producto1.jpg';
import producto2 from '../../assets/imas/Producto5.jpg';
import producto3 from '../../assets/imas/Producto3.jpg';
import producto4 from '../../assets/imas/Producto4.jpg';

export default function home() {
  return (
    <div className='Home'>
      <div className='Carrousel'>
        <Carousel_1 />
      </div>

      <div className='Muestra_Cat'>
          <div className='ProductTitle'>
            <h1>VESTIDOS</h1>
          </div>
          <div className='Card'>
            <div className='ProductCard'>
              <img src={producto1} alt='Producto 1' />
              <p>Vestido Largo</p>
            </div>
            <div className='ProductCard'>
              <img src={producto2} alt='Producto 2' />
              <p>Pieza de vestido</p>
            </div>
            <div className='ProductCard'>
              <img src={producto3} alt='Producto 3' />
              <p>Vestido Cafe</p>
            </div>
            <div className='ProductCard'>
              <img src={producto4} alt='Producto 4' />
              <p>Vestido de Lona</p>
            </div>
          </div>
        </div>



      <div className='Direccion'>
        <div className='ImageContainer'>
            <img src={imag_Loct}/>
        </div>
        <div className='Info'>
          <h1>¡Visítanos!</h1>
          <br></br>
          <p>¡Te esperamos en nuestra tienda física!</p> 
          <br></br>
          <p>Horario de atención:</p>
          <p>&nbsp;&nbsp;&nbsp;- Lunes a Viernes de 8:00 a 18:00</p>
          <p>&nbsp;&nbsp;&nbsp;- Sábados de 8:00 a 13:00</p>
          <p>&nbsp;&nbsp;&nbsp;- Domingos de 8:00 a 12:00</p>
          <p>¡Te esperamos!</p>
          <br></br>
          <p>Dirección:</p>
          <p>4ta. Calle 4-14 Zona 1, Quetzaltenango</p>
        </div>
      </div>

      <div className='Foot'></div>

    </div>
  )
}
