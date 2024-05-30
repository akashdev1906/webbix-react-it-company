import React from 'react'
import {logo} from './../assets/images/index.js';
import { navLinks, services, socialLinks } from "../constants";


const Footer = () => {
  return (
   <>
   <>
  {/* Footer Start */}
  <footer className="main-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Mega Footer Start */}
          <div className="mega-footer">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                {/* Footer About Start */}
                <div className="footer-about">
                  <figure>
                    <img src={logo} alt="" />
                  </figure>
                  <p>Transforming Ideas into Reality</p>
                  <ul>
                    <li>
                      <a href="#">Company@info.com</a>
                    </li>
                    <li>
                      <a href="#">(+91) 966 449 9247</a>
                    </li>
                  </ul>
                </div>
                {/* Footer About End */}
              </div>
              <div className="col-lg-2 col-md-4">
                {/* Footer Links Start */}
                <div className="footer-links">
                  <h2>pages</h2>
                  <ul>
                  {navLinks.map((nav, index) => (
          <li
            key={nav.id}
          >
            <a href={`#${nav.id}`} >{nav.title}</a>
          </li>
        ))}

                  </ul>
                </div>
                {/* Footer Links End */}
              </div>
              <div className="col-lg-2 col-md-4">
                {/* Footer Links Start */}
                <div className="footer-links">
                  <h2>Socials</h2>
                  <ul>
                  {socialLinks.map((nav, index) => (
          <li
            key={nav.id}
          >
            <a href={`#${nav.id}`} >{nav.title}</a>
          </li>
        ))}

                  </ul>
                </div>
                {/* Footer Links End */}
              </div>
              <div className="col-lg-2 col-md-4">
                {/* Footer Links Start */}
                <div className="footer-links">
                  <h2>services</h2>
                  <ul>
                  {services.map((nav, index) => (
          <li
            key={nav.id}
          >
            <a href={`${nav.id}`} >{nav.title}</a>
          </li>
        ))}
                  </ul>
                </div>
                {/* Footer Links End */}
              </div>
            </div>
          </div>
          {/* Mega Footer End */}
          {/* Copyright Footer Start */}
          <div className="footer-copyright">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* Footer Copyright Content Start */}
                <div className="footer-copyright-text">
                  <p>Copyright © 2024 Company. All rights reserved.</p>
                </div>
                {/* Footer Copyright Content End */}
              </div>
              <div className="col-lg-6">
                {/* Footer Policy Links Start */}
                <div className="footer-policy-links">
                  <ul>
                    <li>
                      <a href="#">privacy policy</a>
                    </li>
                    <li>
                      <a href="#">terms of service</a>
                    </li>
                    {/* <li className="highlighted">
                      <a href="#top">go to top</a>
                    </li> */}
                  </ul>
                </div>
                {/* Footer Policy Links End */}
              </div>
            </div>
          </div>
          {/* Copyright Footer End */}
        </div>
      </div>
    </div>
  </footer>
  {/* Footer End */}
</>

   </>
  )
}

export default Footer