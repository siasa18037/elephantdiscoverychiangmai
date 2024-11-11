// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'boxicons/css/boxicons.min.css';

// style
import './App.css';

// component
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop'; 

// page
import HomePage from './pages/HomePage';
import About from './pages/About';
import Service from './pages/Services';
import Book from './pages/Book';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ServicesDetail from './pages/ServicesDetail';
import NewBooking from './pages/book/New';
import Booking from './pages/book/Booking';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';

// page admin
import AdminMainpage from './pages/admin/Main';


const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* ใช้ ScrollToTop */}
      <div className="App">
        <HeaderWrapper />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path='/service/:nameproduct' element={<ServicesDetail />} />
            <Route path="/book" element={<Book />} />
            <Route path='/book/new' element={<NewBooking />} />
            <Route path='/book/booking/:id_booking' element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* admin */}
            <Route path="/admin/:token" element={<AdminMainpage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

const HeaderWrapper = () => {
  const location = useLocation();
  const headerType = location.pathname === '/' ? 'no' : 'show';
  return <Header type={headerType} />;
}

export default App;
