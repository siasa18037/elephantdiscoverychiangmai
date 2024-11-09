import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          {/* Description Section */}
          <div className="col-sm-12 col-md-5">
            <h6>Elephant Discovery</h6>
            <p className="text-justify">Urban expansion has left elephants with limited safe spaces. Caring for them in a controlled environment ensures their safety and provides a positive experience for people.</p>
            <p className="text-justify">TAT License : 23/03616</p>
          </div>

          {/* Map Section */}
          <div className="col-xs-6 col-md-4">
            <h6>Map</h6>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.682770283992!2d98.69412829999999!3d18.6405992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dbb7f99f4ed0e5%3A0xd42dc00f8a8c5b8f!2sElephant%20Discovery%20Chiang%20Mai!5e1!3m2!1sth!2sth!4v1720494332293!5m2!1sth!2sth"
                style={{ border: 0, width: "100%", height: "200px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elephant Discovery Chiang Mai Map">
              </iframe>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/book">Book</a></li>
              <li><a href="/service">Service</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Copyright and Social Icons */}
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
              <a href="/"> Elephant Discovery</a>.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="social-icon">
              <span className="fa-stacks "><a href="https://www.facebook.com/elephantdiscovery"><i class='bx bxl-facebook' ></i></a></span>
              <span className="fa-stacks "><a href="https://www.instagram.com/edcm_thailand/"><i class='bx bxl-instagram' ></i></a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
