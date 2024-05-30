import React from 'react'
import { contactinfo1, 
    contactinfo2,
    contactinfo3, 
    iconmail,
     iconphone,
      iconlocation
    } from '../assets/images'

const ContactSection = () => {
  return (
 
<>
{/* Page Header Start */}
<div className="page-header">
  <div className="container">
	<div className="row">
	  <div className="col-lg-12">
		{/* Page Header Box Start */}
		<div className="page-header-box">
		  <h1 className="text-anime-style-3">Contact Us</h1>
		  <nav className="wow fadeInUp" data-wow-delay="0.25s">
			<ol className="breadcrumb">
			  <li className="breadcrumb-item">
				<a href="#">home</a>
			  </li>
			  <li className="breadcrumb-item active" aria-current="page">
				contact us
			  </li>
			</ol>
		  </nav>
		</div>
		{/* Page Header Box End */}
	  </div>
	</div>
  </div>
</div>
{/* Page Header End */}
{/* Contact Information Section Start */}
<div className="contact-information">
  <div className="container">
	<div className="row">
	  <div className="col-md-4">
		{/* Contact Item Start */}
		<div className="contact-item wow fadeInUp" data-wow-delay="0.25s">
		  <div className="contact-content">
			<div className="contact-content-title">
			  <h2>address</h2>
			  <a href="#">
				<img src={iconlocation} alt="" />
			  </a>
			</div>
			<p>123, Lorem Ipsum, Street no, City, Country 123456</p>
		  </div>
		  <div className="contact-image">
			<figure className="image-anime">
			  <img src={contactinfo1}alt="" />
			</figure>
		  </div>
		</div>
		{/* Contact Item End */}
	  </div>
	  <div className="col-md-4">
		{/* Contact Item Start */}
		<div className="contact-item wow fadeInUp" data-wow-delay="0.5s">
		  <div className="contact-content">
			<div className="contact-content-title">
			  <h2>call now</h2>
			  <a href="#">
				<img src= {iconphone}alt="" />
			  </a>
			</div>
			<p>(+0) 123 456 789</p>
			<p>(+0) 123 456 789</p>
		  </div>
		  <div className="contact-image">
			<figure className="image-anime">
			  <img src={contactinfo2} alt="" />
			</figure>
		  </div>
		</div>
		{/* Contact Item End */}
	  </div>
	  <div className="col-md-4">
		{/* Contact Item Start */}
		<div className="contact-item wow fadeInUp" data-wow-delay="0.75s">
		  <div className="contact-content">
			<div className="contact-content-title">
			  <h2>email us</h2>
			  <a href="#">
				<img src={iconmail}alt="" />
			  </a>
			</div>
			<p>info@domainname.com</p>
			<p>info@domainname.com</p>
		  </div>
		  <div className="contact-image">
			<figure className="image-anime">
			  <img src={contactinfo3} alt="" />
			</figure>
		  </div>
		</div>
		{/* Contact Item End */}
	  </div>
	</div>
  </div>
</div>
{/* Contact Information Section End */}
{/* Contact Us Section Start */}
<div className="contact-us">
  <div className="container">
	<div className="row align-items-center">
	  <div className="col-lg-6">
		{/* Contact Details Section Start */}
		<div className="contact-details">
		  {/* Section Title Start */}
		  <div className="section-title">
			<h3 className="wow fadeInUp">contact us</h3>
			<h2 className="text-anime-style-3">Get in touch with us today</h2>
		  </div>
		  {/* Section Title End */}
		  {/* Contact Details Body Start */}
		  <div className="contact-detail-body">
			<p className="wow fadeInUp" data-wow-delay="0.25s">
			  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
			  accusantium, totam rem aperiam, eaque ipsa quae ab illo
			  inventore et.
			</p>
			<h3 className="wow fadeInUp" data-wow-delay="0.5s">
			  follow us:
			</h3>
			<ul className="wow fadeInUp" data-wow-delay="0.75s">
			  <li>
				<a href="#">
				  <i className="fa-brands fa-facebook-f" />
				</a>
			  </li>
			  <li>
				<a href="#">
				  <i className="fa-brands fa-instagram" />
				</a>
			  </li>
			  <li>
				<a href="#">
				  <i className="fa-brands fa-linkedin-in" />
				</a>
			  </li>
			  <li>
				<a href="#">
				  <i className="fa-brands fa-twitter" />
				</a>
			  </li>
			</ul>
		  </div>
		  {/* Contact Details Body End */}
		</div>
		{/* Contact Details Section End */}
	  </div>
	  <div className="col-lg-6">
		<div className="contact-form-box wow fadeInUp" data-wow-delay="0.5s">
		  {/* Contact Form Start */}
		  <div className="contact-form">
			<form
			  id="contactForm"
			  action="#"
			  method="POST"
			  data-toggle="validator"
			>
			  <div className="row">
				<div className="form-group col-md-6 mb-4">
				  <input
					type="text"
					name="fname"
					className="form-control"
					id="fname"
					placeholder="first name"
					required=""
				  />
				  <div className="help-block with-errors" />
				</div>
				<div className="form-group col-md-6 mb-4">
				  <input
					type="text"
					name="lname"
					className="form-control"
					id="lname"
					placeholder="last name"
					required=""
				  />
				  <div className="help-block with-errors" />
				</div>
				<div className="form-group col-md-6 mb-4">
				  <input
					type="text"
					name="phone"
					className="form-control"
					id="phone"
					placeholder="Phone"
					required=""
				  />
				  <div className="help-block with-errors" />
				</div>
				<div className="form-group col-md-6 mb-4">
				  <input
					type="email"
					name="email"
					className="form-control"
					id="email"
					placeholder="email"
					required=""
				  />
				  <div className="help-block with-errors" />
				</div>
				<div className="form-group col-md-12 mb-4">
				  <input
					type="text"
					name="subject"
					className="form-control"
					id="subject"
					placeholder="subjects"
					required=""
				  />
				  <div className="help-block with-errors" />
				</div>
				<div className="form-group col-md-12 mb-4">
				  <textarea
					name="msg"
					className="form-control"
					id="msg"
					rows={7}
					placeholder="message"
					required=""
					defaultValue={""}
				  />
				  <div className="help-block with-errors" />
				</div>
				<div className="col-md-12">
				  <button type="submit" className="btn-default">
					send a message
				  </button>
				  <div id="msgSubmit" className="h3 text-left hidden" />
				</div>
			  </div>
			</form>
		  </div>
		  {/* Contact Form End */}
		</div>
	  </div>
	</div>
  </div>
</div>
{/* Contact Us Section End */}

</>


    
  )
}

export default ContactSection