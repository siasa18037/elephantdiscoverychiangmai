import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Slider.css';

const testimonials = [
  {
    image: '/assets/images/reviews/1.jpg',
    text: "A day to remember, unforgettable moments, feeding the elephants, natural medicine, bathing with elephants and much more!",
    author: 'babi_nazareth',
    link: 'https://www.tripadvisor.ca/ShowUserReviews-g293917-d5561734-r982052089-Elephant_Discovery_Chiang_Mai_Day_Tours-Chiang_Mai.html',
  },
  {
    image: '/assets/images/reviews/2.jpg',
    text: "What an amazing experience!!! Small group (9 people), friendly staff who care with love of the beautiful Elephants.",
    author: 'Maurits v',
    link: 'https://www.tripadvisor.ca/ShowUserReviews-g293917-d5561734-r910012671-Elephant_Discovery_Chiang_Mai_Day_Tours-Chiang_Mai.html',
  },
  {
    image: "/assets/images/reviews/5.jpg",
    text: "This was a great tour with an outfit that rescues elephants and treats them well. No elephant rides here! Highly recommended!",
    author: "Stephen Marks",
    link: 'https://www.tripadvisor.ca/ShowUserReviews-g293917-d5561734-r880739931-Elephant_Discovery_Chiang_Mai_Day_Tours-Chiang_Mai.html',
  },
  {
    image: '/assets/images/reviews/3.jpg',
    text: "This is an awesome, amazing, great, wonderful, loving heart full place my heart stayed behind I would definitely go back.",
    author: 'Elizabeth L',
    link: 'https://www.tripadvisor.ca/ShowUserReviews-g293917-d5561734-r891130479-Elephant_Discovery_Chiang_Mai_Day_Tours-Chiang_Mai.html',
  },
  {
    image: "/assets/images/reviews/4.jpg",
    text: "In my opinion one of the best experiences I've had in the last few years and I travel a lot. Highly recommend. A must do if you visit Chiang Mai",
    author: "יאן",
    link: 'https://www.tripadvisor.ca/ShowUserReviews-g293917-d5561734-r885269154-Elephant_Discovery_Chiang_Mai_Day_Tours-Chiang_Mai.html',
  },
  
];

const linkToUrl = (url) => {
  if (url) {
    window.open(url, '_blank'); // Open the URL in a new tab
  } else {
    console.warn('No URL provided for this testimonial.');
  }
};

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Reviews</h2>
            <p className="p-heading">
              Here’s a review from one of our happy customers on{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tripadvisor.ca/Attraction_Review-g293917-d5561734-Reviews-Elephant_Discovery_Chiang_Mai_Day_Tours-Chiang_Mai.html"
              >
                Tripadvisor
              </a>
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
                  },
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="card"
                      onClick={() => linkToUrl(testimonial.link)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        className="card-image"
                        src={testimonial.image}
                        alt="alternative"
                      />
                      <div className="card-body">
                        <div className="testimonial-text">{testimonial.text}</div>
                        <div className="testimonial-author">
                          {testimonial.author}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-next" style={{ display: 'none' }}></div>
              <div className="swiper-button-prev" style={{ display: 'none' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
