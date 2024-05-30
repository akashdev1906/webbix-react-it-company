import React from 'react'
import { iconwhyus1 } from './../assets/images/index.js';
import { iconwhyus2 } from './../assets/images/index.js';
import { iconwhyus3 } from './../assets/images/index.js';
import { iconwhyus4 } from './../assets/images/index.js';
import { whychoose } from '../constants/index.js';

const WhyChoose = () => {
  return (
    <>
    {/* Why Choose Us Section Start */}
  <div className="why-choose-us">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-8 col-md-12">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">why choose us</h3>
            <h2 className="text-anime-style-3">Why choose us ?</h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">


      {whychoose.map((why, index) => (
            <div className="col-lg-4 col-md-6"  key={why.id}>
            {/* Why Choose Item Start */}
            <div
              className="why-choose-us-item wow fadeInUp"
              data-wow-delay="0.25s"
            >
              <div className="icon-box">
                <img src={why.img}alt="" />
              </div>
              <h3>{why.title}</h3>
              <p>
                {why.content}
              </p>
            </div>
            {/* Why Choose Item End */}
          </div>
        ))}



     
        

        <div className="col-md-12">
          {/* Why Us Explore Item Start */}
          <div className="why-us-explore-item">
            <div className="row">
              <div className="col-md-12">
                <div className="why-us-section-title">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h2 className="text-anime-style-3">
                      Do you want to explore our outstanding work?
                    </h2>
                  </div>
                  {/* Section Title End */}
                  {/* Explore Item Icon Start */}
                  <div className="explore-item-icon">
                    <img src={iconwhyus4}alt="" />
                  </div>
                  {/* Explore Item Icon End */}
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* Explore Item Content Start */}
                <div
                  className="explore-item-content wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium , totam rem aperiam, eaque ipsa quae
                    ab illo inventore et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit.
                  </p>
                </div>
                {/* Explore Item Content End */}
              </div>
              <div className="col-lg-6">
                {/* Explore Item Content Start */}
                <div
                  className="explore-item-tags wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <ul>
                    <li>
                      <a href="#" className="btn-default">
                        dribbble
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn-default">
                        linkedin
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn-default">
                        contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Explore Item Content End */}
              </div>
            </div>
          </div>
          {/* Why Us Explore Item End */}
        </div>
      </div>
    </div>
  </div>
  {/* Why Choose Us Section End */}
    </>
  )
}

export default WhyChoose