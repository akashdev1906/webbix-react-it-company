import React from 'react'

import { iconpartner1 } from './../assets/images/index.js';
import { iconpartner2 } from './../assets/images/index.js';
import { iconpartner3 } from './../assets/images/index.js';
import { iconpartner4 } from './../assets/images/index.js';

const Partner = () => {
  return (
    <>
    {/* Exclusive Partners Section Start */}
  <div className="exclusive-partners">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">executive partners</h3>
            <h2 className="text-anime-style-3">
              100+ Partners &amp; supporters
            </h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* Partners Logo Start */}
          <div className="partners-logo wow fadeInUp" data-wow-delay="0.2s">
            <img src={iconpartner1} alt="" />
          </div>
          {/* Partners Logo End */}
        </div>
        <div className="col-lg-3 col-6">
          {/* Partners Logo Start */}
          <div className="partners-logo wow fadeInUp" data-wow-delay="0.4s">
            <img src={iconpartner2}alt="" />
          </div>
          {/* Partners Logo End */}
        </div>
        <div className="col-lg-3 col-6">
          {/* Partners Logo Start */}
          <div className="partners-logo wow fadeInUp" data-wow-delay="0.6s">
            <img src={iconpartner3} alt="" />
          </div>
          {/* Partners Logo End */}
        </div>
        <div className="col-lg-3 col-6">
          {/* Partners Logo Start */}
          <div className="partners-logo wow fadeInUp" data-wow-delay="0.8s">
            <img src={iconpartner4} alt="" />
          </div>
          {/* Partners Logo End */}
        </div>
        <div className="col-lg-3 col-6">
          {/* Partners Logo Start */}
          <div className="partners-logo wow fadeInUp" data-wow-delay="1s">
            <img src={iconpartner3} alt="" />
          </div>
          {/* Partners Logo End */}
        </div>
        <div className="col-lg-3 col-6">
          {/* Partners Logo Start */}
          <div className="partners-logo wow fadeInUp" data-wow-delay="1.2s">
            <img src={iconpartner4} alt="" />
          </div>
          {/* Partners Logo End */}
        </div>
        <div className="col-lg-3 col-6">
          {/* Partners Logo Start */}
          <div className="partners-logo wow fadeInUp" data-wow-delay="1.4s">
            <img src={iconpartner3} alt="" />
          </div>
          {/* Partners Logo End */}
        </div>
        <div className="col-lg-3 col-6">
          {/* Partners Logo Start */}
          <div className="partners-logo wow fadeInUp" data-wow-delay="1.6s">
            <img src={iconpartner2} alt="" />
          </div>
          {/* Partners Logo End */}
        </div>
      </div>
    </div>
  </div>
  {/* Exclusive Partners Section End */}
    </>
  )
}

export default Partner