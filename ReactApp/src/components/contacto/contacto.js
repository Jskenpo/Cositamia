import React from 'react'

import './contacto.css'

export default function contacto() {
  return (
    <div id='containerContacto'>
        <h1>Contactos</h1>
        <div className='titContacto'>
            <h3>Redes sociales</h3>
        </div>
        <div className='contentContacto'>
            <a href='https://www.facebook.com/cositamia.com.co' className='link'>
                <img src='https://img.icons8.com/ios-filled/50/000000/facebook.png' className='icoContacto'/>
            </a>
            <a href='https://www.instagram.com/cositamia_gt/' className='link'>
                <img src='https://img.icons8.com/ios-filled/50/000000/instagram.png' className='icoContacto'/>
            </a>
        </div>
        <div className='titContacto'>
            <h3>Contacto directo</h3>
        </div>
        <div className='contentContacto'>
            <div className='contactoDirecto'>
                <img src='https://img.icons8.com/ios-filled/50/000000/mail.png' className='icoContacto'/>
                <div>
                    <h5>Correo electronico</h5>
                    Correo electronico
                </div>
            </div>
            <div className='contactoDirecto'>
                <img src='https://img.icons8.com/ios-filled/50/000000/whatsapp.png' className='icoContacto'/>
                <div>
                    <h5>Solo whatsapp</h5>
                    +502 3061 3957
                </div>
            </div>
        </div>
    </div>
  )
}
