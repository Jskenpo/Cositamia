import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import{faFilter} from "@fortawesome/free-solid-svg-icons";

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
    return (
        <div className="container">
            <div className="icono">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="rectangle">
                <input type="text" className="textbox"/>
            </div>
            <div className="filtros">Filtros
            <div className="iconoF">
            <FontAwesomeIcon icon={faFilter} />
            </div>
            </div>
            <div className="product-container">
                <div className="product1">
                <img src={producto1} alt="Producto 1" />
                    <p className='Texto1'>
                        Vestido Largo
                    </p>
                    <p className='SubTexto1'>
                        Q 300.00
                    </p>
                </div>
                <div className="product2">
                <img src={producto2} alt="Producto 2" />
                <p className='Texto2'>
                        Bolso Azul
                    </p>
                    <p className='SubTexto2'>
                        Q 250.00
                    </p>
                </div>
                <div className="product3">
                <img src={producto3} alt="Producto 3" />
                <p className='Texto3'>
                        Vestido Cafe
                    </p>
                    <p className='SubTexto3'>
                        Q 500.00
                    </p>
                </div>
                <div className="product4">
                <img src={producto4} alt="Producto 4" />
                <p className='Texto4'>
                        Vestido de Lona
                    </p>
                    <p className='SubTexto4'>
                        Q 400.00
                    </p>
                </div>
                <div className="product5">
                <img src={producto5} alt="Producto 5" />
                <p className='Texto5'>
                        Pieza de vestido 
                    </p>
                    <p className='SubTexto5'>
                        Q 700.00
                    </p>
                </div>
                <div className="product6">
                <img src={producto6} alt="Producto 6" />
                <p className='Texto6'>
                        Collar de Estrella
                    </p>
                    <p className='SubTexto6'>
                        Q 300.00
                    </p>
                </div>
                <div className="product7">
                <img src={producto7} alt="Producto 7" />
                <p className='Texto7'>
                        Bolso Blanco
                    </p>
                    <p className='SubTexto7'>
                        Q 250.00
                    </p>
                </div>
                <div className="product8">
                <img src={producto8} alt="Producto 8" />
                <p className='Texto8'>
                        Bolso Amarillo
                    </p>
                    <p className='SubTexto8'>
                        Q 250.00
                    </p>
                </div>
                <div className="product9">
                <img src={producto9} alt="Producto 9" />
                <p className='Texto9'>
                        Bolso de Lona
                    </p>
                    <p className='SubTexto9'>
                        Q 300.00
                    </p>
                </div>
                <div className="product10">
                <img src={producto10} alt="Producto 10" />
                <p className='Texto10'>
                        Vestido Negro
                    </p>
                    <p className='SubTexto10'>
                        Q 500.00
                    </p>
                </div>
            </div>
        </div>

  );
}

export default Catalogo;