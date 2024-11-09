import React from 'react';
import '../../styles/about/Intro-card.css';

const Introcard = () => {
  return (
    <>
      <div id="intro" className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="text-container">
                {/* <div className="section-title">INTRO</div> */}
                <h2>WE CREATE TO CHANGE</h2>
                <p>I've spent 10 years working closely with elephants and learned so much from them along the way. During this time, I’ve witnessed different approaches to elephant care across various camps, many of which differed from what I do now. Deep down, I always knew there was a better way to treat these incredible animals, and I wanted to make a real difference in their lives. Today, I focus on improving their welfare, living, and working conditions in the tourism industry. My goal is to inspire others to treat elephants with the same respect and care that we do. Thank you for being part of this change and supporting our mission. I truly hope that today’s experience with these wonderful creatures leaves a lasting impression on your life.</p>
                <p>My goal is to improve the treatment of elephants, and I hope our efforts inspire others. Thank you for supporting this change, and I hope you have a memorable experience</p>
                <div className="testimonial-author">Liger & Whale - CEO</div>
              </div> {/* end of text-container */}
            </div> {/* end of col */}
            <div className="col-lg-7">
              <div className="image-container">
                <img className="img-fluid" src="/assets/images/gallery/image.png" alt="alternative" />
              </div> {/* end of image-container */}
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div> {/* end of basic-1 */}
    </>
  );
};


export default Introcard;
