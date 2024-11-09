import React, { useState } from 'react';
import '../styles/Gallery.css';

// Dynamically import all images from the gallery folder
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../public/assets/images/gallery', false, /\.(png|jpe?g|svg|JPG)$/));

const Gallery = () => {
  const imagesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const totalImages = Object.keys(images).length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const getPaginatedImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return Object.keys(images).slice(startIndex, endIndex);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='Gallery'>
      <div className="container">
        <h2 className='tittle'>Gallery</h2>
        <div className='galleryall'>
          {getPaginatedImages().map((imageName, index) => (
            <div className='item-img' key={index} onClick={() => openModal(images[imageName])}>
              <img src={images[imageName]} alt={imageName} />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className='pagination'>
            {/* <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button> */}
            {renderPageNumbers()}
            {/* <button  onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button> */}
          </div>
        )}
      </div>    
      {modalImage && (
        <div className='modal' onClick={closeModal}>
          <span className='close'>&times;</span>
          <img className='modal-content' src={modalImage} alt="modal" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
