import React from 'react'
import './home.css'
import imag_Loct from '../../assets/imas/Loc.JPG'
import Carousel_1 from '../Carousels/carousels.js'
import producto1 from '../../assets/imas/Producto9.jpg';
import producto2 from '../../assets/imas/Producto6.jpg';
import producto3 from '../../assets/imas/Producto3.jpg';
import producto4 from '../../assets/imas/Producto4.jpg';
import producto5 from '../../assets/imas/Producto5.jpg';

export default function home() {
  return (
    <div className='Home'>
      <div className='Carrousel'>
        <Carousel_1 />
      </div>

      <div className='Muestra_Cat'>

        <div className='CardContainer'>

          <div className='Card'>
            <img src={producto1} />
            <h1>Bolsas</h1>
            <p className='Description'>Bolsas para dama de la mejor calidad y de varios estilos</p> 
          </div>

          <div className='Card'>
            <img src={producto2} />
            <h1>Collares</h1>
            <p className='Description'>Una infinidad de estilos de collares de la mas alta calidad</p>
          </div>

        </div>

      </div>

      <div className='ProductTitle'>
          <br></br>
          <br></br>
          <h1>VESTIDOS</h1>
        </div>


      <div className='Muestra_Bubble'>
        <div className="Bubble">
          <img src={producto3} />
        </div>

        <div className="Bubble">
          <img src={producto4} />
        </div>

        <div className="Bubble">
          <img src={producto5} />
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