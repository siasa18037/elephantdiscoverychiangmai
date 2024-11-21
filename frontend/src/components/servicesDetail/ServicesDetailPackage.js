import React, { useState } from 'react';
import '../../styles/servicesDetail/ServicesDetailPackage.css';

const ServicesDetailPackage = ({ data }) => {
    const [peopleCounts, setPeopleCounts] = useState(() => {
        // ตั้งค่าจำนวนเริ่มต้นเป็น 1 สำหรับทุก package
        return data.package.reduce((acc, pack) => {
            acc[pack.id_package] = 1;
            return acc;
        }, {});
    });

    const handleIncrease = (packId) => {
        setPeopleCounts((prevCounts) => ({
            ...prevCounts,
            [packId]: prevCounts[packId] + 1,
        }));
    };

    const handleDecrease = (packId) => {
        setPeopleCounts((prevCounts) => ({
            ...prevCounts,
            [packId]: prevCounts[packId] > 1 ? prevCounts[packId] - 1 : 1,
        }));
    };

    const handleBook = (packId) => {
        const url = `/book/new?id_package=${packId}&person=${peopleCounts[packId]}`;
        window.location.href = url;
    };

    return (
        <div className="ServicesDetailPackage">
            <div className='head'>
                <h2>Choose your package</h2>
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
                                    <button onClick={() => handleDecrease(pack.id_package)} className='input-btn'>-</button>
                                    <input 
                                        type="number" 
                                        value={peopleCounts[pack.id_package]} 
                                        readOnly 
                                        className='input-field'
                                    />
                                    <button onClick={() => handleIncrease(pack.id_package)} className='input-btn'>+</button>
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
