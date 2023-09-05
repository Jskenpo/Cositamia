import React from 'react';

import './NavBar.css';

import { Link } from 'react-router-dom';

import Logo from '../../assets/imas/Logo_personal.png';

function NavBar() {

  return (
    <div id="containerNavBar">

      <div className="navbar-brand">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" /> 
        </Link>
      </div>

      <div id='margins'>

        <nav className="navbar navbar-expand-lg navbar-transparent" id='miNavBar'>
        
          <div className="navbar-nav" style={{flex: 1, paddingLeft: '6px', fontSize: '22px', fontWeight:'bold', color: 'black'}}>

            <Link className={`nav-item nav-link`} to="/catalogo">
              CATALOGO
            </Link>

          </div>

          <div className="vertical-line" style={{height: '40px', width: '3px', backgroundColor: 'black'}}></div>
          
          <div className="navbar-nav" style={{flex: 1, paddingRight: '6px', fontSize: '22px', fontWeight:'bold', color: 'black'}}>

            <Link className={`nav-item nav-link`} to="/acerca">
              ACERCA DE NOSOTROS
            </Link>
            
          </div>

          <div className="vertical-line" style={{height: '40px', width: '3px', backgroundColor: 'black'}}></div>
          
          <div className="navbar-nav" style={{flex: 1, paddingRight: '6px', fontSize: '22px', fontWeight:'bold', color: 'black'}}>

            <Link className={`nav-item nav-link`} to="/carrito">
              CARRITO
            </Link>
            
          </div>
        
        </nav>

      </div>

    </div>
  );

}

export default NavBar;