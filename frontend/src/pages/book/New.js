import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactDatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/book/NewBooking.css'; 
import CustomDateInput from '../../components/book/CustomDateInput';
import BACKEND_URL from '../../config';
import NotFound from '../NotFound';

const NewBooking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const id_package = queryParams.get('id_package');
    const person = queryParams.get('person');

    const [selectedPackage, setSelectedPackage] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading_first, setLoadingFirst] = useState(true); 

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    const fetchStats = useCallback(async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/data/product`);
            setProductData(response.data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        } finally {
            setLoadingFirst(false);  // เปลี่ยนค่าเป็น false เมื่อดึงข้อมูลเสร็จ
        }
    }, []);

    useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    useEffect(() => {
        if (productData.length > 0) {
            const findPackage = () => {
                for (const product of productData) {
                    const pkg = product.package.find(pkg => pkg.id_package === id_package);
                    if (pkg) {
                        return { pkg, product };
                    }
                }
                return null;
            };

            const result = findPackage();
            if (result) {
                setSelectedPackage(result.pkg);
                setSelectedProduct(result.product);
            }
        }
    }, [id_package, productData]);


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const package_text = `${selectedProduct.name} | ${selectedPackage.name}`;
    
        const newBooking = {
            firstName: e.target['first-name'].value,
            lastName: e.target['last-name'].value,
            email: e.target['email'].value,
            phone: e.target['phone'].value,
            message: e.target['message'].value,
            date_checkin: selectedDate,
            package_id: selectedPackage.id_package,
            package: package_text,
            person: person,
            amountPerPerson: selectedPackage.amount,
            amount: selectedPackage.amount * person,
        };
    
        setLoading(true);
    
        try {
            const response = await axios.post(`${BACKEND_URL}/api/booking`, newBooking);
            const bookingId = response.data.Booking.bookingId;
    
            navigate(`/book/booking/${bookingId}`);
        } catch (error) {
            console.error('Error submitting booking:', error);
            Toast.fire({
                icon: 'error',
                title: 'Error Please try again'
            });
        } finally {
            setLoading(false);
        }
    };
    

    if (loading_first) {
        return <div className="loading_2">Loading...</div>;
    }

    if (!selectedPackage) {
        return <NotFound />;
    }

    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    return (
        <div className='NewBooking'>
            <div className='container'>
                <h2>Booking Detail</h2>
                {loading && <div className="loading"></div>} 
                <form onSubmit={handleSubmit}>
                    <div className='head'>
                        <div className='container'>
                            <div className='detail'>
                                <p>{selectedProduct.name} | {selectedPackage.name} X {person} Person</p>
                            </div>
                        </div>
                    </div>
                    <div className='form'>
                        <div className="form-group">
                            <div className='date-input'>
                                <ReactDatePicker
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    customInput={<CustomDateInput />}
                                    id="date"
                                    required
                                    minDate={new Date()} 
                                />
                            </div>
                            <label className="label-control" htmlFor="date">
                                Date (m,d,y) - Selected: {formattedDate}
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="first-name" required />
                            <label className="label-control" htmlFor="first-name">First Name</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="last-name" required />
                            <label className="label-control" htmlFor="last-name">Last Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="email" required />
                            <label className="label-control" htmlFor="email">Email</label>
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control-input" id="phone" required />
                            <label className="label-control" htmlFor="phone">Phone</label>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="message"></textarea>
                            <label className="label-control" htmlFor="message">Your Message</label>
                        </div>
                    </div>
                    <div className='summary'>
                        <div className='container'>
                            <div className='detail'>
                                <h5>{selectedProduct.name} | {selectedPackage.name} X {person}</h5>
                            </div>
                            <div className='amount'>
                                <p>{selectedPackage.amount} X {person}</p>
                                <h5>{selectedPackage.amount * person} Bath</h5>
                            </div>
                        </div>
                    </div>
                    <div className='submit'>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">
                                {loading ? 'Loading...' : 'Booking'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewBooking;
