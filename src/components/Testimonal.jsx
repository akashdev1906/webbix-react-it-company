import React from 'react'
import { iconstar } from './../assets/images/index.js';
import { author1 } from './../assets/images/index.js';
import { author2 } from './../assets/images/index.js';
import { author3 } from './../assets/images/index.js';

const Testimonal = () => {
  return (
    <>
      
  {/* Clients Testimonials Section Start */}
  <div className="clients-testimonials">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-8 col-md-12">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">client testimonials</h3>
            <h2 className="text-anime-style-3">Our customers love us.</h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Testimonial Slider Start */}
          <div className="testimonial-slider">
            <div className="swiper">
              <div className="swiper-wrapper">
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="testimonial-rating">
                      <img src={iconstar}alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since.
                      </p>
                    </div>
                    <div className="testimonial-body">
                      <figure className="image-anime">
                        <img src={author1} alt="" />
                      </figure>
                      <div className="testimonial-author-title">
                        <h2>John Doe</h2>
                        <p>Acme Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="testimonial-rating">
                      <img src={iconstar} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since.
                      </p>
                    </div>
                    <div className="testimonial-body">
                      <figure className="image-anime">
                        <img src={author2} alt="" />
                      </figure>
                      <div className="testimonial-author-title">
                        <h2>Arita Banson</h2>
                        <p>Delta Innovation</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="testimonial-rating">
                      <img src={iconstar} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since.
                      </p>
                    </div>
                    <div className="testimonial-body">
                      <figure className="image-anime">
                        <img src={author3} alt="" />
                      </figure>
                      <div className="testimonial-author-title">
                        <h2>Banson Doe</h2>
                        <p>Horizon Ventures</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="testimonial-rating">
                      <img src={iconstar} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since.
                      </p>
                    </div>
                    <div className="testimonial-body">
                      <figure className="image-anime">
                        <img src={author2} alt="" />
                      </figure>
                      <div className="testimonial-author-title">
                        <h2>John Doe</h2>
                        <p>Omega Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slide End */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          {/* Testimonial Slider End */}
        </div>
      </div>
    </div>
  </div>
  {/* Clients Testimonials Section End */}
    </>
  )
}

export default Testimonal