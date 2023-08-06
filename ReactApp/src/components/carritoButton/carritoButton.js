import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './CarritoButton.css';
import Cart from '../../assets/imas/cart.jpg';
import DarkCart from '../../assets/imas/cart_black.png';

function CarritoButton() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div id='carritoButton'>
            <Link to="/carrito">
                <Button
                    variant="outline-light"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        id='carrito'
                        src={isHovered ? DarkCart : Cart}
                        alt="Carrito de compras"
                    />
                </Button>
            </Link>
        </div>
    );
}

export default CarritoButton;