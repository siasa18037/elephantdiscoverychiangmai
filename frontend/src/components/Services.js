import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">SERVICES</div>
            <h2>Choose The Service Package<br /> That Suits Your Needs</h2>
          </div>
        </div>
        <div className="allcard">
          <div className="card">
            <Link to="/service/Full program" className="">
              <div className="row no-gutters">
                <div className="card-body">
                  <h3 className="card-title">Full program</h3>
                  <p>A full program of bonding and learning about elephant life!</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className='bx bx-check'></i>
                      <div className="media-body">Bamboo rafting experience</div>
                    </li>
                    <li className="media">
                      <i className='bx bx-check'></i>
                      <div className="media-body">Learn about elephant welfare and Thai culture</div>
                    </li>
                    <li className="media">
                      <i className='bx bx-check'></i>
                      <div className="media-body">Walk, feed, and bathe with elephants in the river</div>
                    </li>
                  </ul>
                  <p className="price">Starting at <span>2,800 Baht</span></p>
                  <button className="btns">Book</button>
                </div>
              </div>
            </Link>
          </div>
          <div className="card">
            <Link to="/service/Half Day" className="">
              <div className="row no-gutters">
                <div className="card-body">
                  <h3 className="card-title">Half Day</h3>
                  <p>A short but heartwarming experience with elephants!</p>
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className='bx bx-check'></i>
                      <div className="media-body">Prepare herbal medicine for elephants</div>
                    </li>
                    <li className="media">
                      <i className='bx bx-check'></i>
                      <div className="media-body">Feed, walk, and bathe with elephants in the river</div>
                    </li>
                  </ul>
                  <p className="price">Starting at <span>1,800 Baht</span></p>
                  <button className="btns">Book</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
