import React from 'react';
import '../styles/about/about.css'

import Description3Item from '../components/about/Description3Item'
import Introcard from '../components/about/Intro-card'
import Accordion from '../components/about/Accordion'
import Map from '../components/Map'
import Contact from '../components/Contact'
import Donate from '../components/Donate';
import ImgSlider3 from '../components/ImgSlider3';


const About = () => {
  return (
    <div>
      <div className='About'>
          <Introcard/>
          <Description3Item/>
          <Accordion/>
          <ImgSlider3/>
          <Map/>
          <Contact/>
          <Donate/>
      </div>
    </div>
  );
};

export default About;
