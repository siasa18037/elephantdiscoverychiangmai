import React from 'react';

import VideoBg from '../components/homepage/VideoBg'
import Introcard from '../components/homepage/Intro-card'
import Description3Item from '../components/homepage/Description3Item'
import Services from '../components/Services'
import Slider from '../components/Slider'
import Map from '../components/Map'
import Contact from '../components/Contact'
import Donate from '../components/Donate';

const HomePage = () => {
  return (
    <div>
      <VideoBg/>
      <Introcard/>
      <Description3Item/>
      <Services/>
      <Slider/>
      <Map/>
      <Contact/>
      <Donate/>
    </div>
  );
};

export default HomePage;
