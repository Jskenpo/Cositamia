import React, { useState } from 'react';
import './NavBar.css';

import { Link, useLocation } from 'react-router-dom';

import Login from '../Login/Login.js';

import Logo from '../../assets/imas/cositamiaLogo.png'

function NavBar() {
  const [active, setActive] = useState('');

  const handleClick = (clickedItem) => {
    setActive(clickedItem);
  };

  return (
    <div id='containerNavBar'>
      <div id='margenes'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='miNavBar'>
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width="90px"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse show" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className={`nav-item nav-link ${active === 'home' ? 'active' : ''}`}
                to="/catalogo"
                onClick={() => handleClick('home')}
              >
                Catalogo
              </Link>
              <Link
                className={`nav-item nav-link ${active === 'features' ? 'active' : ''}`}
                to="/acerca"
                onClick={() => handleClick('features')}
              >
                Acerca de nosotros
              </Link>
              <Link
                className={`nav-item nav-link ${active === 'pricing' ? 'active' : ''}`}
                to="/contacto"
                onClick={() => handleClick('pricing')}
              >
                Contactanos
              </Link>
            </div>
            <div id='login'>
              <Login />
            </div> 
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
