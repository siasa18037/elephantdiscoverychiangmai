import React from 'react';

import '../styles/book/Book.css'

import Services from '../components/Services'
import ImgSlider3 from '../components/ImgSlider3'

const Book = () => {
  return (
    <div className='Book'>
      <Services/>
      <ImgSlider3 />
    </div>
  );
};

export default Book;
