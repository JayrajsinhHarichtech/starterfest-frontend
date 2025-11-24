import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Timer from "../components/Timer";
import ContactSuccessModal from "../components/ContactSuccessModal";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaSpinner } from "react-icons/fa";

function Contact() {
  const sectionRef = useRef(null);
  // Fix API URL configuration for production
  const apiURL = import.meta.env.VITE_APP_URL || (
    window.location.hostname === 'localhost' 
      ? 'http://localhost:3000' 
      : 'https://startupfestgujarat.com'
  );
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  // ⭐ Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⭐ Map error handling
  useEffect(() => {
    // Set a fallback timer to show fallback if map doesn't load
    const timer = setTimeout(() => {
      setMapLoaded(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // ⭐ SCROLL ANIMATION OBSERVER
  useEffect(() => {
    if (!sectionRef.current) return;

    const sec = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sec.classList.add("contact-active");
        else sec.classList.remove("contact-active");
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  // ⭐ FORM LOGIC
  const formik = useFormik({
    initialValues: {
      contactPersonName: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      contactPersonName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      number: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Please enter exactly 10 digits")
        .length(10, "Phone number must be exactly 10 digits"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string(),
    }),

    onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
      setSubmitting(true);
      try {
        // Add headers for CORS and content type
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          // Add withCredentials for CORS if needed
          withCredentials: false,
        };

        const res = await axios.post(`${apiURL}/auth/contact`, values, config);
        if (res.status === 200 || res.status === 201) {
          setShowSuccessModal(true);
          resetForm();
        }
      } catch (error) {
        console.error('Contact form error:', error);
        
        // Better error handling for different scenarios
        if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
          setErrors({ 
            submit: "Network error. Please check your connection and try again, or contact us directly." 
          });
        } else if (error.response) {
          // Server responded with error status
          const status = error.response.status;
          if (status === 500) {
            setErrors({ 
              submit: "Server error. We've received your request but couldn't process it. We'll contact you directly." 
            });
          } else if (status === 404) {
            setErrors({ 
              submit: "Service temporarily unavailable. Please try again later or contact us directly." 
            });
          } else if (status >= 400 && status < 500) {
            setErrors({ 
              submit: "Invalid request. Please check your information and try again." 
            });
          } else {
            setErrors({ 
              submit: "Unexpected error occurred. Please try again or contact us directly." 
            });
          }
        } else {
          // No response received (CORS, timeout, etc.)
          setErrors({ 
            submit: "Connection failed. Please try again later or contact us directly at info@startupfestgujarat.com" 
          });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" ref={sectionRef}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 contact-title leading-tight" style={{ color: '#003777' }}>
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed" style={{ color: '#003777', opacity: 0.8 }}>
              Have questions about Startup Fest Gujarat? We're here to help! 
              Reach out to us for event inquiries, partnerships, or any assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Left Side - Contact Info & Map */}
          <div className="space-y-8 contact-info fade-up">
            
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Location Card */}
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="bg-gray-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl" style={{ color: '#003777' }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base mb-1" style={{ color: '#003777' }}>Event Location</h3>
                    <p className="text-xs sm:text-sm break-words" style={{ color: '#003777', opacity: 0.7 }}>Gujarat University<br />Atal Kalam Building, Ahmedabad</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="bg-gray-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <FaEnvelope className="text-xl" style={{ color: '#003777' }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base mb-1" style={{ color: '#003777' }}>Email Us</h3>
                    <p className="text-xs sm:text-sm break-words" style={{ color: '#003777', opacity: 0.7 }}>info@startupfestgujarat.com<br />support@startupfest.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 slide-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center" style={{ color: '#003777' }}>
                <FaMapMarkerAlt className="mr-2 sm:mr-3" style={{ color: '#003777' }} />
                <span className="text-sm sm:text-xl">Find Us Here</span>
              </h3>
              <div className="map-container relative">
                {/* Interactive Map */}
                <div className="h-60 sm:h-80 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden shadow-md relative">
                  <iframe
                    ref={mapRef}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.542750117322!2d72.54009267509234!3d23.040555279161175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ead1103329%3A0x1a907f7fee8b2b7f!2sGujarat%20University%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1732498800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gujarat University Location"
                    className="google-map transition-opacity duration-300"
                    onLoad={() => setMapLoaded(true)}
                    onError={() => setMapLoaded(false)}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="slide-right mt-8 lg:mt-0">
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 border border-gray-200">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#003777' }}>Send Us a Message</h2>
                <p className="text-sm sm:text-base" style={{ color: '#003777', opacity: 0.7 }}>Fill out the form below and we'll get back to you soon!</p>
              </div>

              <form onSubmit={formik.handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#003777' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="contactPersonName"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${
                      formik.touched.contactPersonName && formik.errors.contactPersonName 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white`}
                    style={{ color: '#003777' }}
                    placeholder="Enter your full name"
                    {...formik.getFieldProps("contactPersonName")}
                  />
                  {formik.touched.contactPersonName && formik.errors.contactPersonName && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.contactPersonName}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#003777' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${
                      formik.touched.email && formik.errors.email 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white`}
                    style={{ color: '#003777' }}
                    placeholder="your@email.com"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#003777' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="number"
                    maxLength="10"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${
                      formik.touched.number && formik.errors.number 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white`}
                    style={{ color: '#003777' }}
                    placeholder="Number"
                    value={formik.values.number}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 10) {
                        formik.setFieldValue('number', value);
                      }
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.number && formik.errors.number && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.number}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#003777' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border ${
                      formik.touched.subject && formik.errors.subject 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white`}
                    style={{ color: '#003777' }}
                    placeholder="What's this about?"
                    {...formik.getFieldProps("subject")}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#003777' }}>
                    Your Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white resize-none"
                    style={{ color: '#003777' }}
                    placeholder="Tell us more about your inquiry..."
                    {...formik.getFieldProps("message")}
                  />
                </div>

                {/* Error Message */}
                {formik.errors.submit && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="mb-2">{formik.errors.submit}</p>
                    <p className="text-sm">
                      Alternative: Send us an email directly at{' '}
                      <a 
                        href={`mailto:info@startupfestgujarat.com?subject=${encodeURIComponent(formik.values.subject || 'Contact Form')}&body=${encodeURIComponent(`Name: ${formik.values.contactPersonName}\nPhone: ${formik.values.number}\nEmail: ${formik.values.email}\n\nMessage:\n${formik.values.message}`)}`}
                        className="text-[#003777] underline hover:no-underline"
                      >
                        info@startupfestgujarat.com
                      </a>
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#003777' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#002555'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#003777'}
                >
                  {formik.isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Timer Section */}
      <div className="py-8 sm:py-12 lg:py-16 bg-white">
        
          <Timer />
      </div>

      {/* Success Modal */}
      <ContactSuccessModal 
        show={showSuccessModal} 
        onHide={() => setShowSuccessModal(false)} 
      />
      



      {/* Animation & Custom Styles */}
      <style>{`
        .contact-title {
          animation: fadeInUp 0.8s ease-out;
        }

        .contact-info {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
        }

        .slide-left {
          opacity: 0;
          transform: translateX(-40px);
          animation: slideInLeft 0.9s ease-out 0.4s forwards;
        }

        .slide-right {
          opacity: 0;
          transform: translateX(40px);
          animation: slideInRight 0.9s ease-out 0.5s forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .map-fallback {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
        }

        /* Smooth focus transitions for form inputs */
        input:focus, textarea:focus {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f8f9fa;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #6b7280;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

export default Contact;
