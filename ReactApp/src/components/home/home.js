import React from 'react'
import './home.css'
import Mapa from '../Location/location.js'
import imag_Loct from '../../assets/imas/Loc.JPG'
import Carousel_1 from '../Carousels/carousels.js'
import producto1 from '../../assets/imas/Arreglo_6.jpg';
import producto2 from '../../assets/imas/Arreglo_7.jpg';
import producto3 from '../../assets/imas/Producto3.jpg';
import producto4 from '../../assets/imas/Producto4.jpg';
import producto5 from '../../assets/imas/Producto5.jpg';
import producto6 from '../../assets/imas/Arreglo_1.jpg';
import producto7 from '../../assets/imas/Arreglo_3.jpg';
import producto8 from '../../assets/imas/Arreglo_5.jpg';
import fondo from '../../assets/imas/Fondo.png';

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
            <h1>Arreglos</h1>
            <p className='Description'>Todo tipo de arreglos personalizados</p> 
          </div>

          <div className='Card'>
            <img src={producto2} />
            <h1>Vino</h1>
            <p className='Description'>Arreglos personalizados con botellas de viono o champagne</p>
          </div>

        </div>

      </div>

      <div className='Muestra_Cat_2'>

        <div className='CardContainer_2'>

          <div className='Card'>
            <img src={producto6} />
            <h1>Canastas</h1>
            <p className='Description'>canastas con arreglos florales</p> 
          </div>

          <div className='Card'>
            <img src={producto7} />
            <h1>Cestas</h1>
            <p className='Description'>cestas personalizadas con botella y flores</p>
          </div>

          <div className='Card'>
            <img src={producto8} />
            <h1>Florero</h1>
            <p className='Description'>todo tipo de floreros</p>
          </div>

        </div>

        </div>

      <div className='ProductTitle'>
          <br></br>
          <br></br>
          <h1>Para todas las ocasiones...</h1>
        </div>


      <div className='Muestra_Bubble'>
        <div className="Bubble">
          <img src={fondo} />
          <p className='Informacion_Bubble'>Amor con Globos </p>
        </div>

        <div className="Bubble">
          <img src={fondo} />
          <p className='Informacion_Bubble'>Ocasiones especiales</p>
        </div>

        <div className="Bubble">
          <img src={fondo} />
          <p className='Informacion_Bubble'>Gift Box</p>
        </div>
      </div>

      <div className='Foot'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

    </div>
  )
}