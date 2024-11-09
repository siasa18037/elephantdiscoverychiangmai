import React from 'react';
import '../../styles/servicesDetail/ServicesDetailDocument.css';

const ServicesDetailDocument = ({ data }) => {
    return (
        <div className="ServicesDetailDocument">
            <div className='container'>
            {data.document.map((item => (
                <div className='item'>
                    <h5>{item.head}</h5>
                    <p>{item.detail}</p>
                </div>
            )))}
            </div>
        </div>
    );
};

export default ServicesDetailDocument;
