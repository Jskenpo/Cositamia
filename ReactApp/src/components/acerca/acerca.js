import React from 'react'
import ReactPlayer from 'react-player'

import tit from '../../assets/imas/tit_img_acerc.jpeg'
import whats from '../../assets/imas/whats_ico.jpg'
import insta from '../../assets/imas/insta_ico.png'
import face from '../../assets/imas/face_ico.png'

import './acerca.css'

/*
Funcion react

Esta funcion estructura el contactanos
*/
export default function acerca() {
  return (
    <div id="containerAcerca">
        <div id='img_acrc'>
            <img id='img_tit' src={tit} />
        </div>

        <h1 id='titulo'>
            Contactanos
        </h1>

        <div id='container_content'>
            <div id = 'tel'>
                <h3>Escribenos en: </h3>
                <a href='https://api.whatsapp.com/send/?phone=50242128000&text&type=phone_number&app_absent=0'>
                    <img src={whats}/>
                </a>
            </div>
            <div id='insta'>
                <h3>Siguenos en Instragram</h3>
                <a href=''>
                    <img src={insta}/>
                </a>
            </div>
            <div id='face'>
                <h3>Siguenos en Facebook </h3>
                <a href=''>
                    <img src={face}/>
                </a>
            </div>
        </div>
        
    </div>
  )
}