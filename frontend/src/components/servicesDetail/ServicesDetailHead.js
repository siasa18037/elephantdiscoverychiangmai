import React, { useState } from 'react';
import '../../styles/servicesDetail/ServicesDetailHead.css';

const ServicesDetailHead = ({ data }) => {
    const [mainImage, setMainImage] = useState(data.images ? data.images[0] : '');
    const [startIndex, setStartIndex] = useState(0);

    const handleImageClick = (imageSrc) => {
        setMainImage(imageSrc);
    };

    const scrollLeft = () => {
        setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const scrollRight = () => {
        setStartIndex((prevIndex) => (prevIndex < (data.images.length - 4)) ? prevIndex + 1 : prevIndex);
    };

    return (
        <div className="ServicesDetailHead">
            <div className="container">
                <div className="images">
                    <div className="main-img">
                        <img src={mainImage} alt="Main" />
                    </div>
                    <div className="small-img-wrapper">
                        <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
                        <div className="small-img">
                            {data.images.slice(startIndex, startIndex + 4).map((image, index) => (
                                <div className="item-img" key={index} onClick={() => handleImageClick(image)}>
                                    <img src={image} alt="Thumbnail" />
                                </div>
                            ))}
                        </div>
                        <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
                    </div>
                </div>
                <div className="detail">
                    <div className="head">
                        <h2>{data.name}</h2>
                        <p>{data.detail}</p>
                    </div>
                    <div className="list-box">
                        {data.icon_detail.map((item, index) => (
                            <div className="list-item" key={index}>
                                <i className={`bx ${item.icon}`}></i> {item.detail}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailHead;
