import React from 'react'
import logo from '../assets/img/footer-logo.png'
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import { BiTime, BiCalendar } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-8 sm:mb-6 text-left">
                <img 
                  src={logo} 
                  alt="Startup Fest Gujarat" 
                  className="h-6 sm:h-7 lg:h-8 w-auto mb-4 sm:mb-6 brightness-0 invert" 
                />
              
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3 pl-0">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Participate", path: "/participants" },
                  { name: "2025 Speakers", path: "/2025-speakers" },
                  { name: "Contact Us", path: "/contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-white hover:text-blue-400 transition-all duration-300 inline-block no-underline text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Information */}
            <div className="text-left">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                Event Details
              </h4>
              <ul className="space-y-3 sm:space-y-4 pl-0">
                <li className="">
                  <div className="flex items-start gap-2">
                    <BiTime size={16} className="text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">10:00 AM - 07:00 PM</p>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="flex items-start gap-2">
                    <BiCalendar size={16} className="text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">13 & 14 December 2025</p>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="flex items-start gap-2">
                    <MdLocationPin size={16} className="text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">Gujarat University Atal Kalam Building, Ahmedabad</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="text-left">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                Get In Touch
              </h4>
              <ul className="space-y-3 sm:space-y-4 pl-0">
                <li className="">
                  <div className="flex items-start gap-2">
                    <MdEmail size={16} className="text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Email Us</p>
                      <a href="mailto:info@startupfestgujarat.com" className="text-white hover:text-white transition-colors duration-300 no-underline font-medium text-sm break-all sm:break-normal">
                        info@startupfestgujarat.com
                      </a>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="flex items-start gap-2">
                    <MdPhone size={16} className="text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Call Us</p>
                      <a href="tel:+918849361880" className="text-white hover:text-blue-400 transition-colors duration-300 no-underline font-medium text-sm sm:text-base">
                        +91 88493 61880
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 sm:mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © Copyright 2025 <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-300 no-underline font-medium">Startup Fest Gujarat</Link>. 
                All rights reserved.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Empowering Innovation, Driving Growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS to remove underlines */}
      <style>{`
        a {
          text-decoration: none !important;
        }
        a:hover {
          text-decoration: none !important;
        }
      `}</style>
    </footer>
  )
}