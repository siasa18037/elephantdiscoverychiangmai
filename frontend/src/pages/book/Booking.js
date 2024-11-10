import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BACKEND_URL from '../../config';
import '../../styles/book/Booking.css';

const Booking = () => {
    const { id_booking } = useParams();
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [retryCount, setRetryCount] = useState(0);

    const fetchBookingData = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);
            const response = await axios.get(`${BACKEND_URL}/api/booking/${id_booking}`);
            setBookingData(response.data);
        } catch (error) {
            console.error('Error fetching booking data:', error);
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [id_booking]);

    useEffect(() => {
        if (retryCount < 2 && !bookingData) {
            const timer = setInterval(() => {
                fetchBookingData();
                setRetryCount(prev => prev + 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [fetchBookingData, retryCount, bookingData]);

    if (loading) {
        return (
            <div className="bookingpage">
                <div className="loading_2"></div>
            </div>
        );
    }

    if (error || !bookingData) {
        return (
            <div className="bookingpage">
                {error ? (
                    <div className="error-message">Error loading booking details. Booking ID not found.</div>
                ) : (
                    <div className="loading_2"></div>
                )}
            </div>
        );
    }

    return (
        <div className="bookingpage">
            <div className="success-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="#4CAF50"/>
                </svg>
            </div>
            <h2>Reservation request sent successfully</h2>
            <p>Please wait for booking approval via email within 24 hours.</p>
            {bookingData && (
                <div className="booking-details">
                    <div className="detail">
                        <span>Booking ID:</span>
                        <span>{bookingData.bookingId}</span>
                    </div>
                    <div className="detail">
                        <span>Booking time:</span>
                        <span>{new Date(bookingData.date_booking).toLocaleString()}</span>
                    </div>
                    <div className="detail">
                        <span>Name:</span>
                        <span>{bookingData.firstName} {bookingData.lastName}</span>
                    </div>
                    <div className="detail">
                        <span>Email:</span>
                        <span>{bookingData.email}</span>
                    </div>
                    <div className="detail">
                        <span>Phone:</span>
                        <span>{bookingData.phone}</span>
                    </div>
                    <div className="detail">
                        <span>Check-in date:</span>
                        <span>
                            {new Date(bookingData.date_checkin).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </span>
                    </div>
                    <div className="detail">
                        <span>Package:</span>
                        <span>{bookingData.package} X {bookingData.person}</span>
                    </div>
                    <div className="detail">
                        <span>Amount:</span>
                        <span>{bookingData.amount} Baht</span>
                    </div>
                </div>
            )}
            <button onClick={() => navigate('/')}>Return to Homepage</button>
        </div>
    );
};

export default Booking;
