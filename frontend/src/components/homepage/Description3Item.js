import React from 'react';
import '../../styles/homepage/Description3Item.css';


const Description3Item = () => {
    return (
      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon"></span>
                  <i className='bx bxl-postgresql'></i>
                </span>
                <div className="card-body">
                  <h4 className="card-title">Elephant</h4>
                  <p>Love and care for elephants as they deserve a life of respect and kindness.</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon"></span>
                  <i class='bx bxs-tree'></i>
                </span>
                <div className="card-body">
                  <h4 className="card-title">Nature</h4>
                  <p>Care for nature, and it will care for us in return.</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon"></span>
                  <i class='bx bxs-map-alt'></i>
                </span>
                <div className="card-body">
                  <h4 className="card-title">Comfort</h4>
                  <p>We’ll take care of your comfort and make this special journey unforgettable for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Description3Item;