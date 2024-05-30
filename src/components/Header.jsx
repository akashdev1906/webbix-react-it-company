import React from 'react';
import { navLinks } from "../constants";
import {logo} from './../assets/images/index.js';
import { NavLink } from 'react-router-dom';

import './../assets/css/all.css';
import './../assets/css/animate.css';
// import './../assets/css/bootstrap.min.css';
import './../assets/css/custom.css';
import './../assets/css/magnific-popup.css';
import './../assets/css/slicknav.min.css';
import './../assets/css/swiper-bundle.min.css';


const Header = () => {
  return (
  <>
  
   {/* Header Start */}
   <header className="main-header">
    <div className="header-sticky">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo Start */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
          </a>
          {/* Logo End */}
          {/* Main Menu Start */}
          <div className="collapse navbar-collapse main-menu">
            <div className="nav-menu-wrapper">
              <ul className="navbar-nav mr-auto" id="menu">


              {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`nav-item`}
          >
            
            <NavLink exact to={`/${nav.id}`} >
            {nav.title}
            </NavLink>
          </li>
        ))}




                
               
              </ul>
              
            </div>
            {/* Let’s Start Button Start */}
            <div className="header-btn d-inline-flex">
              <a href="contact-us.html" className="btn-default">
                free consultation
              </a>
            </div>
            {/* Let’s Start Button End */}
          </div>
          {/* Main Menu End */}
          <div className="navbar-toggle" />
        </div>
      </nav>
      <div className="responsive-menu" />
    </div>
  </header>
  {/* Header End */}

 
  </>
  )
}

export default Header