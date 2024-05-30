import React from 'react'
import {logo} from './../assets/images/index.js';
import { heroimg } from './../assets/images/index.js';
import { heroimg2 } from './../assets/images/index.js';

const Hero = () => {
  return (
    <>
    {/* Hero Section Start */}
  <div className="hero">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8">
          {/* Hero Content Start */}
          <div className="hero-content">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">about our Company</h3>
              <h1 className="text-anime-style-3">
                Web Design, SEO &amp; Internet Marketing For{" "}
                <span>Your Business</span>
              </h1>
            </div>
            {/* Section Title End */}
            {/* Hero Body Start */}
            <div className="hero-body">
              <p className="wow fadeInUp" data-wow-delay="0.5s">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo veritatis et quasi architecto beatae vitae dicta
                sunt.
              </p>
            </div>
            {/* Hero Body End */}
            {/* Hero Footer Start */}
            <div className="hero-footer">
              <a
                href="#"
                className="btn-default wow fadeInUp"
                data-wow-delay="0.75s"
              >
                free consultation
              </a>
            </div>
            {/* Hero Footer End */}
          </div>
          {/* Hero Left Content End */}
        </div>
        <div className="col-lg-4">
          {/* Hero Video Image Start */}
          <div className="hero-video-image">
            {/* Hero Slider Start */}
            <div className="hero-slider">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* Hero Slide Start */}
                  <div className="swiper-slide">
                    {/* Slider Image Start */}
                    <div className="hero-slider-image">
                      <img src={heroimg} alt="" />
                    </div>
                    {/* Slider Image End */}
                  </div>
                  {/* Hero Slide End */}
                  {/* Hero Slide Start */}
                  <div className="swiper-slide">
                    {/* Slider Image Start */}
                    <div className="hero-slider-image">
                      <img src={heroimg2} alt="" />
                    </div>
                    {/* Slider Image End */}
                  </div>
                  {/* Hero Slide End */}
                  {/* Hero Slide Start */}
                  <div className="swiper-slide">
                    {/* Slider Image Start */}
                    <div className="hero-slider-image">
                      <img src={heroimg} alt="" />
                    </div>
                    {/* Slider Image End */}
                  </div>
                  {/* Hero Slide End */}
                  {/* Hero Slide Start */}
                  <div className="swiper-slide">
                    {/* Slider Image Start */}
                    <div className="hero-slider-image">
                      <img src={heroimg2}alt="" />
                    </div>
                    {/* Slider Image End */}
                  </div>
                  {/* Hero Slide End */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="hero-play-button">
              <a
                href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                className="popup-video"
              >
                <i className="fa-solid fa-play" />
              </a>
            </div>
          </div>
          {/* Hero Video Image End */}
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End */}
    </>
  )
}

export default Hero