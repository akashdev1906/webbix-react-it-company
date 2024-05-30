import React from 'react'
import { ourwork } from '../constants'

const OurWork = () => {
  return (
    <>
     {/* Our Work Section Start */}
  <div className="our-work">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-8 col-md-9">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">our works</h3>
            <h2 className="text-anime-style-3">
              Excellence from concept to completion
            </h2>
          </div>
          {/* Section Title End */}
        </div>
        <div className="col-lg-4 col-md-3">
          {/* Section Btn Start */}
          <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
            <a href="#" className="btn-default">
              all portfolio
            </a>
          </div>
          {/* Section Btn End */}
        </div>
      </div>
      <div className="row">
        
      {ourwork.map((our, index) => (
          <div className="col-md-6">
          {/* Works Item Start */}
          <div className="works-item wow fadeInUp" data-wow-delay="0.25s">
            <div className="works-image">
              <figure className="image-anime">
                <img src={our.img} alt="" />
              </figure>
            </div>
            <div className="works-content">
              <h2>{our.title}</h2>
              <p>
                {our.content}
              </p>
            </div>
          </div>
          {/* Works Item End */}
        </div>
        ))}




       





     
      </div>
    </div>
  </div>
  {/* Our Work Section End */}
    </>
  )
}

export default OurWork