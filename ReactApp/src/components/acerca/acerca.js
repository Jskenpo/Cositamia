import React from 'react'
import ReactPlayer from 'react-player'

import Video from '../../assets/videos/acerca.mp4'
import Mision from '../../assets/imas/ropa.jpg'
import Vision from '../../assets/imas/ropa1.jpg'

import './acerca.css'

export default function acerca() {
  return (
    <div id="containerAcerca">
        <video
            id="video"
            src={Video}
            autoPlay
            loop
            muted
        />
        
        <div id='logo'>
            <h1>¿Quienes somos?</h1>
            <p id='somostxt'>
                En nuestro corazón, somos una empresa dedicada a realzar la belleza y el cuidado personal. Nuestro enfoque es proporcionar productos de alta calidad que te hagan sentir único. Estamos comprometidos en ofrecerte una experiencia satisfactoria y duradera en cada compra.
            </p>
        </div>
        <div id='Mision'>
            <div className='contentAcerca'>
                <h1>Misión</h1>
                <p className='txtContent'>
                    Ofrecer productos de alta calidad que realcen la belleza y el cuidado personal de nuestros clientes, brindando una experiencia satisfactoria y duradera en cada compra.
                </p>
            </div>
            <img id='imgMision' src={Mision}/>
            
        </div>
        <div id='Mision'>
            <img id='imgVision' src={Vision}/>
            <div className='contentAcerca'>
                <h1>Visión</h1>
                <p className='txtContent'>
                    Ser una empresa líder en el mercado de la belleza y el cuidado personal, reconocida por la calidad de sus productos y la satisfacción de sus clientes.
                </p>
            </div>
            
        </div>
    </div>
  )
}