import React, { useEffect } from 'react';
import '../styles/Map.css';

const Services = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.number-count');
    const counterContainer = document.querySelector('.counter');
    let hasRun = false; // To ensure animation runs only once

    const updateCount = (counter) => {
      const target = +counter.getAttribute('data-count');
      const speed = 1000; // 2 seconds
      const increment = target / (speed / 100);

      const countUp = () => {
        const currentCount = +counter.innerText;
        if (currentCount < target) {
          counter.innerText = Math.ceil(currentCount + increment);
          setTimeout(countUp, 100);
        } else {
          counter.innerText = target;
        }
      };

      countUp();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasRun) {
          counters.forEach(counter => {
            updateCount(counter);
          });
          hasRun = true;
        }
      });
    }, { threshold: 0.1 });

    if (counterContainer) {
      observer.observe(counterContainer);
    }

    return () => {
      if (counterContainer) {
        observer.unobserve(counterContainer);
      }
    };
  }, []);

  return (
    <>
      <div id="map" className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-6">
              <div className="text-container">
                <h2>Map</h2>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="bx bx-check"></i>
                    <div className="media-body">Transportation from Chiang Mai to the location available upon request</div>
                  </li>
                  <li className="media">
                    <i className="bx bx-check"></i>
                    <div className="media-body">Flexible pickup and drop-off points in Chiang Mai city center</div>
                  </li>
                  <li className="media">
                    <i className="bx bx-check"></i>
                    <div className="media-body">Guided travel assistance for international visitors</div>
                  </li>
                  <li className="media">
                    <i className="bx bx-check"></i>
                    <div className="media-body">Enjoy a scenic 49-km journey from Chiang Mai</div>
                  </li>
                  <li className="media">
                    <i className="bx bx-check"></i>
                    <div className="media-body">Enjoy a scenic 122-km journey from Lampang</div>
                  </li>
                </ul>

                {/* Counter */}
                <div id="counter">
                  <div className="cell">
                    <div className="counter-value number-count" data-count="49">1</div>
                    <div className="counter-info">Km.<br />From Chiang Mai</div>
                  </div>
                  <div className="cell">
                    <div className="counter-value number-count" data-count="122">1</div>
                    <div className="counter-info">Km.<br />From Lampang</div>
                  </div>
                </div>
                {/* end of counter */}
              </div> {/* end of text-container */}
            </div> {/* end of col */}
            <div className="col-lg-5 col-xl-6">
              <div className="image-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.682770283992!2d98.69412829999999!3d18.6405992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dbb7f99f4ed0e5%3A0xd42dc00f8a8c5b8f!2sElephant%20Discovery%20Chiang%20Mai!5e1!3m2!1sth!2sth!4v1720494332293!5m2!1sth!2sth"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elephant Discovery Chiang Mai Map">
                </iframe>
              </div> {/* end of image-container */}
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div> {/* end of counter */}
    </>
  );
};

export default Services;
