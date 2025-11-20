import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Testimonial.css';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list/testimonialMaster`);
            // Filter only active testimonials
            const activeTestimonials = response.data.filter(testimonial => testimonial.isActive);
            setTestimonials(activeTestimonials);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="testimonial-loading">
                <div className="loading-spinner"></div>
                <p>Loading testimonials...</p>
            </div>
        );
    }

    // Don't render anything if no testimonials
    if (testimonials.length === 0) {
        return null;
    }

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2 className="section-title">What People Say About Us</h2> 
                    <p className="section-subtitle">Hear from our community members and participants</p>
                </div>

                <div className="testimonials-slider">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={{
                            nextEl: '.testimonial-button-next',
                            prevEl: '.testimonial-button-prev',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={testimonial._id} className="testimonial-slide">
                                <div className="testimonial-card text-center">
                                    <div className="author-image">
                                        <img
                                            src={`${process.env.REACT_APP_URL}/${testimonial.image}`}
                                            alt={testimonial.title}
                                            onError={(e) => {
                                                e.target.src = '/default-avatar.png'; // Fallback image
                                            }}
                                        />

                                    </div>
                                    <div className="testimonial-author">

                                        <div className="author-info">
                                            <h4 className="author-name">{testimonial.title}</h4>
                                            {/* <p className="author-designation">{testimonial.designation}</p> */}
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        

                                        <div className="testimonial-text">
                                            <p>"{testimonial.description}"</p>
                                        </div>


                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="testimonial-navigation">
                        <button className="testimonial-button-prev">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="testimonial-button-next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
