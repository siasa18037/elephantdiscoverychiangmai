import React, { useState } from 'react';
import '../../styles/servicesDetail/ServicesDetailPackage.css';

const ServicesDetailPackage = ({ data }) => {
    const [peopleCount, setPeopleCount] = useState(1);

    const handleIncrease = () => {
        setPeopleCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () => {
        setPeopleCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
    };

    const handleBook = (packId) => {
        const url = `/book/new?id_package=${packId}&person=${peopleCount}`;
        window.location.href = url;
    };

    return (
        <div className="ServicesDetailPackage">
            <div className='head'>
                <h2>Choses your package</h2>
            </div>
            <div className='container'>
                {data.package.map((pack) => ( 
                <div className='item-box' key={pack.id}>
                    <div className='main'>
                        <div className='detail'>
                            <h1>{pack.name}</h1>
                            <p>{pack.detail}</p>
                        </div>
                        <div className='amount'>
                            <h2>{pack.amount} <span>Bath</span></h2>
                            <p>Per person</p>
                        </div>
                    </div>
                    <div className='booking'>
                        <div className='booking-input'>
                            <div className='container'>
                                <button onClick={handleDecrease} className='input-btn'>-</button>
                                <input type="number" value={peopleCount} readOnly className='input-field'/>
                                <button onClick={handleIncrease} className='input-btn'>+</button>
                            </div>
                        </div>
                        <button className='book-btn' onClick={() => handleBook(pack.id_package)}>Book</button>
                    </div>
                </div>
               ))}
            </div>  
        </div>
    );
};

export default ServicesDetailPackage;
