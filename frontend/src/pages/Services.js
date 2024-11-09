import React from 'react';
import '../styles/services/Service.css';
import Services from '../components/Services';
import Slider from '../components/Slider';

const Service = () => {
  return (
    <div className='service'>
      <div className='head'>
        <section className="service-grid pb-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center mb-4">
                <div className="service-title">
                  <h4>Our Elephant Experience</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center mb-3">
                <div className="service-wrap">
                  <div className="service-icon">
                    <i class='bx bxl-postgresql' ></i>
                  </div>
                  <h4>Elephant Welfare Standards</h4>
                  <p>The camp maintains high standards for elephant welfare, ensuring safe and healthy living conditions.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center mb-3">
                <div className="service-wrap">
                  <div className="service-icon">
                    <i class='bx bx-shield-plus'></i>
                  </div>
                  <h4>Experienced Care</h4>
                  <p>With over 10 years of experience, the team deeply understands each elephant’s needs and preferences.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center mb-3">
                <div className="service-wrap">
                  <div className="service-icon">
                    <i class='bx bxs-tree'></i>
                  </div>
                  <h4>Supporting Conservation</h4>
                  <p>Hosting elephants here helps protect them from dangers in the wild and promotes their conservation.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center mb-3">
                <div className="service-wrap">
                  <div className="service-icon">
                    <i class='bx bx-run'></i>
                  </div>
                  <h4>Interactive Activities</h4>
                  <p>Engage in feeding, walking, and bathing the elephants for an up-close, meaningful experience.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center mb-3">
                <div className="service-wrap">
                  <div className="service-icon">
                    <i class='bx bx-alarm'></i>
                  </div>
                  <h4>Full and Half-Day Options</h4>
                  <p>Choose between a full-day or half-day experience, both offering unique, immersive interactions.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center mb-3">
                <div className="service-wrap">
                  <div className="service-icon">
                    <i class='bx bxs-book'></i>
                  </div>
                  <h4>Commitment to Education</h4>
                  <p>The camp aims to inspire others to treat elephants with respect and compassion.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Services />
      <Slider />
    </div>
  );
};

export default Service;
