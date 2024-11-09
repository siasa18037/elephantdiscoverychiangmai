import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Slider.css';

const testimonials = [
  {
    image: '/assets/images/reviews/IMG_2335 2.jpg',
    text: "Good I like this trip",
    author: 'Mr.Suppaset',
  },
  {
    image: '/assets/images/reviews/IMG_2341.jpg',
    text: "I purchased their service, and it was worth every bath. Highly recommend!",
    author: 'Ms.Lawale Baigern',
  },
  {
    image: '/assets/images/reviews/image copy.png',
    text: "The staff was friendly, and the experience was unforgettable. Five stars!",
    author: 'Mr.Mike Zuiderduin',
  },
  {
    image: "/assets/images/reviews/IMG_2340.jpg",
    text: "A truly magical experience with the elephants! The guides were knowledgeable and caring.",
    author: "Ms.Pung"
  },
  {
    image: "/assets/images/reviews/IMG_8454.jpg",
    text: "Absolutely incredible! The elephants are well cared for, and the team is amazing.",
    author: "Mr.Panthach and  his younger brother"
  },

];

const Slider = () => {

  return (
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Reviews</h2>
            <p className="p-heading">
            "Your satisfaction is our top priority. We are dedicated to making every moment with us truly special. Discover what our clients have to say about their experiences!"
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="slider-container">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="card-slider"
                breakpoints={{
                  1000: {
                    slidesPerView: 3,
                  },
                  650: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  }
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="card">
                      <img className="card-image" src={testimonial.image} alt="alternative" />
                      <div className="card-body">
                        <div className="testimonial-text">{testimonial.text}</div>
                        <div className="testimonial-author">{testimonial.author}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-next" style={{ 'display': 'none' }}></div>
              <div className="swiper-button-prev" style={{ 'display': 'none' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;