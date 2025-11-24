import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import SectionTitle from './SectionTitle';
import testimonialsData from '../data/testimonialsData';

const Testimonial = () => {

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            
            <SectionTitle 
                title="What People Say About Us" 
                subtitle="Hear from our community members and participants"
                className="mb-12 md:mb-16 text-center" 
            />

            <div className="relative">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={40}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 200,
                        modifier: 1.2,
                        slideShadows: true,
                    }}
                    navigation={{
                        nextEl: '.testimonial-button-next',
                        prevEl: '.testimonial-button-prev',
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        reverseDirection: false,
                    }}
                    loop={true}
                    speed={800}
                    slideToClickedSlide={true}
                    watchSlidesProgress={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            coverflowEffect: {
                                rotate: 0,
                                depth: 0,
                                modifier: 1,
                            }
                        },
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                            coverflowEffect: {
                                rotate: 15,
                                depth: 100,
                                modifier: 1,
                            }
                        },
                        768: {
                            slidesPerView: 2.2,
                            spaceBetween: 35,
                            coverflowEffect: {
                                rotate: 20,
                                depth: 150,
                                modifier: 1.1,
                            }
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            coverflowEffect: {
                                rotate: 30,
                                depth: 200,
                                modifier: 1.2,
                            }
                        },
                        1280: {
                            slidesPerView: 3.5,
                            spaceBetween: 45,
                        }
                    }}
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    className="testimonial-swiper"
                >
                    {testimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="testimonial-slide">
                            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 mx-2 text-center transform hover:scale-105 h-full">
                                
                                {/* Author Image */}
                                <div className="mb-4">
                                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-[#003777] shadow-lg">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Author Info */}
                                <div className="mb-4">
                                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs md:text-sm text-gray-600 font-medium">
                                        {testimonial.designation}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {testimonial.company}
                                    </p>
                                </div>

                                {/* Testimonial Content */}
                                <div className="relative">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-2 -left-2 text-4xl text-[#003777] opacity-20">
                                        &quot;
                                    </div>
                                    
                                    <p className="text-gray-700 italic leading-snug text-sm md:text-base relative z-10 font-medium line-clamp-3">
                                        {testimonial.testimonial}
                                    </p>
                                    
                                    {/* Quote Icon */}
                                    <div className="absolute -bottom-4 -right-2 text-4xl text-[#003777] opacity-20 rotate-180">
                                        &quot;
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="flex justify-center mt-4 space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className="w-4 h-4 text-[#003777] fill-current" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                
                                {/* Event Badge */}
                                <div className="text-center mt-4">
                                    <span className="inline-block bg-[#003777] text-white text-xs px-4 py-1 rounded-full font-medium shadow-md">
                                        {testimonial.event}
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

        
            </div>

            {/* Custom Swiper Pagination Styles */}
            <style>{`
                .testimonial-swiper {
                    padding: 0 20px;
                    overflow: visible;
                }
                
                .testimonial-slide {
                    height: auto !important;
                    min-height: 450px;
                    display: flex !important;
                    align-items: stretch;
                }
                
                .testimonial-slide > div {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                

                
                .swiper-slide {
                    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
                    transform-origin: center !important;
                }
                
                .swiper-slide-active {
                    transform: scale(1.1) !important;
                    z-index: 2 !important;
                }
                
                .swiper-slide-next,
                .swiper-slide-prev {
                    transform: scale(0.95) !important;
                    opacity: 0.9 !important;
                    z-index: 2 !important;
                }
                
                .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-next):not(.swiper-slide-prev) {
                    transform: scale(0.85) !important;
                    opacity: 0.7 !important;
                    z-index: 1 !important;
                }
                
                @media (max-width: 768px) {
                    .swiper-slide-active {
                        transform: scale(1.02) !important;
                    }
                    
                    .testimonial-swiper {
                        padding: 0 10px;
                    }
                }
                
                .swiper-wrapper {
                    align-items: stretch !important;
                }
            `}</style>
        </section>
    );
};

export default Testimonial;
