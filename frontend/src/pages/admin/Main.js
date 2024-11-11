import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/admin/Main.css';
import Swal from 'sweetalert2';
import BACKEND_URL from '../../config';

const expectedValue = 'hee';

const base64Decode = (str) => {
  return decodeURIComponent(
    atob(str)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
};

const decodeJWT = (token) => {
  try {
    const [, payload] = token.split('.');
    const decodedPayload = JSON.parse(base64Decode(payload));
    return decodedPayload;
  } catch (error) {
    console.error('Failed to decode JWT:', error);
    return null;
  }
};

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

const AdminMainpage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (token) {
      const decoded = decodeJWT(token);
      if (!decoded || decoded.value !== expectedValue) {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [token, navigate]);

  const fetchStats = useCallback(async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/booking/`);
      const sortedData = response.data.sort((a, b) => new Date(b.date_checkin) - new Date(a.date_checkin));
      setBookingData(sortedData);
      setFilteredData(sortedData);
    } catch (error) {
      console.error('Error fetching stats:', error);
      Toast.fire({
        icon: 'error',
        title: 'Failed to fetch booking data'
      });
    }
  }, []);

  useEffect(() => {
    fetchStats();
    const intervalId = setInterval(fetchStats, 30000);
    return () => clearInterval(intervalId);
  }, [fetchStats]);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const getCheckinStatusColor = (checkinDate) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const checkin = new Date(checkinDate).setHours(0, 0, 0, 0);

    if (checkin === today) return 'yellow';
    if (checkin > today) return 'green';
    return 'red';
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filtered = bookingData.filter(
        (booking) =>
          booking.bookingId.toLowerCase().includes(query) ||
          booking.firstName.toLowerCase().includes(query) ||
          booking.lastName.toLowerCase().includes(query) ||
          booking.email.toLowerCase().includes(query) ||
          booking.phone.toLowerCase().includes(query)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(bookingData);
    }
  };

  const totalBookings = bookingData.length;
  const totalPersons = bookingData.reduce((sum, booking) => sum + (parseInt(booking.person) || 0), 0);

  const exportToJson = () => {
    const dataStr = JSON.stringify(filteredData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bookings.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="AdminMainpage">
      <h2>Booking List</h2>
      <p>All booking: {totalBookings} | All person: {totalPersons}</p>
      <div>
        <input
          type="text"
          placeholder="Search bookings..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <button onClick={exportToJson} className="form-control-submit-button">Export JSON</button>
      </div>
      <ul className="booking-list">
        {filteredData.map((booking) => (
          <li key={booking.bookingId} className="booking-card">
            <div
              className="booking-summary"
              onClick={() => toggleExpand(booking.bookingId)}
              style={{
                borderLeft: `10px solid ${getCheckinStatusColor(booking.date_checkin)}`,
              }}
            >
              <div className="booking-info">
                <p><strong>Booking ID:</strong> {booking.bookingId}</p>
                <p><strong>Name:</strong> {booking.firstName} {booking.lastName}</p>
                <p><strong>Check-in Date:</strong> {formatDate(booking.date_checkin)}</p>
              </div>
            </div>
            {expandedId === booking.bookingId && (
              <div className="booking-details">
                <p><strong>Booking time:</strong> {booking.date_booking}</p>
                <p><strong>Email:</strong> {booking.email}</p>
                <p><strong>Phone:</strong> {booking.phone}</p>
                <p><strong>Message:</strong> {booking.message}</p>
                <p><strong>Package:</strong> {booking.package} - {booking.person} person(s)</p>
                <p><strong>Amount:</strong> {booking.amount} THB</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMainpage;
