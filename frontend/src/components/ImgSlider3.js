import React, { useState, useEffect } from 'react';
import '../styles/ImgSlider3.css';

const images = [
  '/assets/images/gallery/image copy 2.png',
  '/assets/images/gallery/image copy 8.png',
  '/assets/images/gallery/image copy 7.png',
  '/assets/images/gallery/image copy 3.png',
  '/assets/images/gallery/image copy 4.png'
];

const ImgSlider3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    let visibleImages = [];
    for (let i = 0; i < 3; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

  return (
    <div className='img-slider'>
      {getVisibleImages().map((image, index) => (
        <div key={index} className='slide'>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImgSlider3;
