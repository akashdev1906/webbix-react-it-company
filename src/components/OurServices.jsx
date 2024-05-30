import React from "react";
import { arrow } from "./../assets/images/index.js";
import { services } from "../constants";

const OurServices = () => {
  return (
    <>
      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7 col-md-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-3">What we can offer today</h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5 col-md-5">
              {/* Section Btn Start */}
              <div className="section-btn">
                <a
                  href="#"
                  className="btn-default wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  view all services
                </a>
              </div>
              {/* Section Btn End */}
            </div>
          </div>
          <div className="row">
            {services.map((ser, index) => (
              <div className="col-lg-4 col-md-6" key={ser.id}>
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="service-content">
                    <div className="service-content-title">
                      <h2>{ser.title}</h2>
                      <a href={`${ser.id}`}>
                        <img src={arrow} alt="" />
                      </a>
                    </div>
                    <p>{ser.content}</p>
                  </div>
                  <div className="service-image">
                    <figure className="image-anime">
                      <img src={ser.img} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Services Section End */}
    </>
  );
};

export default OurServices;
