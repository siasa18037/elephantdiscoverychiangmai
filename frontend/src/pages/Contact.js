import React from 'react';

import '../styles/contact/Contact.css';

import Contact from '../components/Contact';
import Map from '../components/Map';
import Donate from '../components/Donate';

const Contactpage = () => {
  return (
    <div className='Contactpage'>
        <div className='head'></div>
        <Contact/>
        <Map/>
        <div className='line'></div>
        <Donate/>
    </div>
  );
};

export default Contactpage;
