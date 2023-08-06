import React from "react";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './carritoButton.css';
import Cart from '../../assets/imas/cart.jpg';

function CarritoButton() {
    return (
        <div id='carritoButton'>
            <Link to="/carrito">
                <Button variant="outline-light"><img id='carrito' src={Cart}/></Button>
            </Link>
        </div>
    );
}

export default CarritoButton;