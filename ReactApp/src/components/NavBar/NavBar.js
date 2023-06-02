import React, { useState } from 'react';
import './NavBar.css';

import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

import Login from '../Login/Login.js';

function NavBar() {
  const [active, setActive] = useState('');

  const handleClick = (clickedItem) => {
    setActive(clickedItem);
  };

  return (
    <div id='containerNavBar'>
      <div id='margenes'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Cositamía
          </a>
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
              <a
                className={`nav-item nav-link ${active === 'home' ? 'active' : ''}`}
                href="#"
                onClick={() => handleClick('home')}
              >
                Catalogo
              </a>
              <a
                className={`nav-item nav-link ${active === 'features' ? 'active' : ''}`}
                href="#"
                onClick={() => handleClick('features')}
              >
                Acerca de nosotros
              </a>
              <a
                className={`nav-item nav-link ${active === 'pricing' ? 'active' : ''}`}
                href="#"
                onClick={() => handleClick('pricing')}
              >
                Contactanos
              </a>
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
