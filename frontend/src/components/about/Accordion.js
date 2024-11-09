import React, { useState } from 'react';
import '../../styles/about/Accordion.css';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(-1); // Default to -1 to keep all closed

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index); // Toggle the clicked item
    };

    return (
        <div id="intro" className="accordion">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="image-container">
                            <img className="img-fluid" src="/assets/images/for ser/image copy 18.png" alt="alternative" />
                        </div> {/* end of image-container */}
                    </div> {/* end of col */}
                    <div className="col-lg-5">
                        <div className="accordion-container" id="accordionOne">
                            <h2>Three frequently asked questions</h2>
                            <div className="item">
                                <div id="headingOne">
                                    <span onClick={() => handleToggle(0)} aria-expanded={activeIndex === 0} aria-controls="collapseOne" role="button">
                                        <span className="circle-numbering">1</span><span className="accordion-title">What will you get from elephantdiscovery</span>
                                    </span>
                                </div>
                                <div id="collapseOne" className={`collapse ${activeIndex === 0 ? 'show' : ''}`} aria-labelledby="headingOne">
                                    <div className="accordion-body">
                                    You will have a great experience from this trip. It will make you love elephants even more.
                                    </div>
                                </div>
                            </div> {/* end of item */}
                            <div className="item">
                                <div id="headingTwo">
                                    <span onClick={() => handleToggle(1)} aria-expanded={activeIndex === 1} aria-controls="collapseTwo" role="button">
                                        <span className="circle-numbering">2</span><span className="accordion-title">Difference between half day and full day</span>
                                    </span>
                                </div>
                                <div id="collapseTwo" className={`collapse ${activeIndex === 1 ? 'show' : ''}`} aria-labelledby="headingTwo">
                                    <div className="accordion-body">
                                    For a full day, you will be immersed in lots of fun and knowledge, but for a half day, you will have a great experience in a short period of time.
                                    </div>
                                </div>
                            </div> {/* end of item */}
                            <div className="item">
                                <div id="headingThree">
                                    <span onClick={() => handleToggle(2)} aria-expanded={activeIndex === 2} aria-controls="collapseThree" role="button">
                                        <span className="circle-numbering">3</span><span className="accordion-title">What to bring</span>
                                    </span>
                                </div>
                                <div id="collapseThree" className={`collapse ${activeIndex === 2 ? 'show' : ''}`} aria-labelledby="headingThree">
                                    <div className="accordion-body">
                                    spare clothes, swimming suit flipflop, insectspay, sneakers, suncream camera and personal medicine.
                                    </div>
                                </div>
                            </div> {/* end of item */}
                        </div> {/* end of accordion-container */}
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div>
    );
};

export default Accordion;
