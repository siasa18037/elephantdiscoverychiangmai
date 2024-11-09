import React from 'react';
import { useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDateInput = ({ value, onClick }) => {
    const inputRef = useRef(null);

    return (
        <div className="custom-date-input" onClick={onClick}>
            <input
                ref={inputRef}
                value={value}
                readOnly
                className="form-control-input"
                required
            />
            <i className='bx bx-calendar' onClick={() => inputRef.current.focus()}></i>
        </div>
    );
};

export default CustomDateInput;
