import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/Contact.css';
import BACKEND_URL from '../config';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted
    try {
      await axios.post(`${BACKEND_URL}/api/contact/`, formState);
      Toast.fire({
        icon: 'success',
        title: 'Message sent successfully!'
      });
    } catch (error) {
      console.error('There was an error sending the message:', error);
      Toast.fire({
        icon: 'error',
        title: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setLoading(false); // Reset loading state after request completes
    }

    setFormState({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div id="contact" className="contact">
      <div className="container">
        {loading && <div className="loading"></div>}
        <div className="row">
          <div className="col-lg-6 text-container">
            <div className="section-title">CONTACT</div>
            <h2>Get In Touch Using The Form</h2>
            <p>You can contact us if you have any problems or doubts</p>
            <ul className="list-unstyled li-space-lg">
              <li className="address">
                <i className="bx bxl-facebook"></i>
                <a href="https://www.facebook.com/elephantdiscovery" target="_blank" rel="noopener noreferrer">
                  https://www.facebook.com/elephantdiscovery
                </a>
              </li>
              <li>
                <a href="tel:003024630820">
                  <i className="bx bx-phone"></i>+66 64 336 6553
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/edcm_thailand/">
                  <i className="bx bxl-instagram"></i> elephantdiscovery
                </a>
              </li>
              <li><i className="bx bx-envelope"></i><a href="mailto:elephantdiscovery@gmail.com">elephantdiscovery@gmail.com</a></li>
            </ul>
            <h3>Follow Us On Social Media</h3>
            <div className="social-icon">
              <span className="fa-stack"><a href="https://www.facebook.com/elephantdiscovery"><i className="bx bxl-facebook"></i></a></span>
              <span className="fa-stack"><a href="https://www.instagram.com/edcm_thailand/"><i className="bx bxl-instagram"></i></a></span>
            </div>
          </div>
          <div className="col-lg-6">
            <p>Contact Us</p>
            <form className='contactForm' id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control-input"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
                <label className="label-control" htmlFor="name">Name</label>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control-input"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
                <label className="label-control" htmlFor="email">Email</label>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control-textarea"
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label className="label-control" htmlFor="message">Your message</label>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group checkbox">
                <input type="checkbox" id="terms" value="Agreed-to-Terms" required /> I agree with Elephant Discovery's <a href="privacy-policy.html">Privacy Policy</a>
              </div>
              <div className="form-group">
                <button type="submit" className="form-control-submit-button" disabled={loading}>
                  {loading ? 'Sending...' : 'SUBMIT MESSAGE'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
