import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaRegCalendarAlt, FaBars } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Navbar = ({ onMobileMenuToggle }) => {
  const navigate = useNavigate();
  const [highlightsOpen, setHighlightsOpen] = useState(false);
  const [high2024Open, setHigh2024Open] = useState(false);
  const [high2023Open, setHigh2023Open] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Hover timers for smooth dropdown experience
  const [hoverTimers, setHoverTimers] = useState({});

  // Function to handle navigation
  const handleNavigation = (path) => {
    if (path === '/register') {
      // Open external registration page in new tab
      window.open('http://register.startupfestgujarat.com/', '_blank', 'noopener,noreferrer');
    } else {
      navigate(path);
    }
    // Close all dropdowns
    setHighlightsOpen(false);
    setHigh2024Open(false);
    setHigh2023Open(false);
    setWhyOpen(false);
    setInfoOpen(false);
    setRegisterOpen(false);
  };

  // Hover handlers for dropdown functionality
  const handleMouseEnter = (dropdown) => {
    // Clear any existing timer for this dropdown
    if (hoverTimers[dropdown]) {
      clearTimeout(hoverTimers[dropdown]);
    }

    // Open dropdown immediately on hover
    switch (dropdown) {
      case 'highlights': setHighlightsOpen(true); break;
      case 'high2024': setHigh2024Open(true); break;
      case 'high2023': setHigh2023Open(true); break;
      case 'why': setWhyOpen(true); break;
      case 'info': setInfoOpen(true); break;
      case 'register': setRegisterOpen(true); break;
    }
  };

  const handleMouseLeave = (dropdown) => {
    // Set timer to close dropdown after delay
    const timer = setTimeout(() => {
      switch (dropdown) {
        case 'highlights':
          setHighlightsOpen(false);
          setHigh2024Open(false);
          setHigh2023Open(false);
          break;
        case 'high2024': setHigh2024Open(false); break;
        case 'high2023': setHigh2023Open(false); break;
        case 'why': setWhyOpen(false); break;
        case 'info': setInfoOpen(false); break;
        case 'register': setRegisterOpen(false); break;
      }
    }, 150); // 150ms delay before closing

    setHoverTimers(prev => ({ ...prev, [dropdown]: timer }));
  };

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setHighlightsOpen(false);
        setHigh2024Open(false);
        setHigh2023Open(false);
        setWhyOpen(false);
        setInfoOpen(false);
        setRegisterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Cleanup timers on unmount
      Object.values(hoverTimers).forEach(timer => clearTimeout(timer));
    };
  }, [hoverTimers]);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed hidden md:block top-0 left-0 w-full bg-[#003777] text-white py-2 px-5 z-[1100] text-sm font-semibold">
        <div className="flex justify-between items-center max-w-full mx-10 mx-auto">
          <span>Don't miss your chance to be part of the event. - Grab Your Passes Now!!</span>
          <div className="hidden md:flex gap-1 items-center font-medium">
            <span className="flex items-center gap-1">
              <FaRegCalendarAlt /> December 13–14, 2025
            </span>
            <span>|</span>
            <a
              href="https://maps.google.com/maps?ll=23.040536,72.542625&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=1914170029072132991"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline cursor-pointer text-white"
            >
              <MdLocationPin /> Gujarat University Atal Kalam Building
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="fixed top-[0px] md:top-[32px] left-0 w-full bg-white shadow-md z-[1099] py-4">
        <div className="w-[90%] mx-auto h-full flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigation('/')} className="block bg-transparent border-none">
            <img
              src="/logo2.svg"
              alt="Startup Fest Gujarat Logo"
              className="h-16 w-auto cursor-pointer" // Ya h-16 for bigger size
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 mx-auto">
            <button
              onClick={() => handleNavigation('/2025-Speakers')}
              className="text-black text-[15px] font-medium hover:text-[#003777] no-underline transition-colors bg-transparent border-none cursor-pointer relative group"
            >
              2025 Speakers
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
            </button>

            {/* Highlights Dropdown */}
            <div
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter('highlights')}
              onMouseLeave={() => handleMouseLeave('highlights')}
            >
              <button
                className="text-black text-[15px] font-medium hover:text-[#003777] no-underline flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer relative group"
                onClick={() => setHighlightsOpen(!highlightsOpen)}
              >
                Highlights <FiChevronDown className={`transition-transform ${highlightsOpen ? 'rotate-180' : ''}`} />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
              </button>
              {highlightsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[200px] opacity-100 translate-y-0 transition-all duration-250 animate-fadeIn">
                  {/* 2024 Submenu */}
                  <div
                    className="relative group/sub"
                    onMouseEnter={() => handleMouseEnter('high2024')}
                    onMouseLeave={() => handleMouseLeave('high2024')}
                  >
                    <button
                      className="w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 flex items-center justify-between bg-transparent border-none cursor-pointer relative group transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHigh2024Open(!high2024Open);
                      }}
                    >
                      <span className="relative flex items-center justify-between w-full">
                        2024 Highlights <FiChevronDown className="rotate-[-90deg]" />
                        <div className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                      </span>
                    </button>
                    {high2024Open && (
                      <div className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg min-w-[220px] animate-slideInRight">
                        <button onClick={() => handleNavigation('/speaker-2024')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                          <span className="relative">
                            2024 Moderator & Mentors
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                          </span>
                        </button>
                        <button onClick={() => handleNavigation('/sharktank-2024')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                          <span className="relative">
                            Meet our Sharks
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                          </span>
                        </button>
                        <button onClick={() => handleNavigation('/pre-series')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                          <span className="relative">
                            Pre-Series Pitching
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                          </span>
                        </button>
                        <button onClick={() => handleNavigation('/shark-teen')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                          <span className="relative">
                            Shark Teens 2024
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                          </span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 my-1"></div>

                  {/* 2023 Submenu */}
                  <div
                    className="relative group/sub"
                    onMouseEnter={() => handleMouseEnter('high2023')}
                    onMouseLeave={() => handleMouseLeave('high2023')}
                  >
                    <button
                      className="w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 flex items-center justify-between bg-transparent border-none cursor-pointer relative group transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHigh2023Open(!high2023Open);
                      }}
                    >
                      <span className="relative flex items-center justify-between w-full">
                        2023 Highlights <FiChevronDown className="rotate-[-90deg]" />
                        <div className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                      </span>
                    </button>
                    {high2023Open && (
                      <div className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg min-w-[200px] animate-slideInRight">
                        <button onClick={() => handleNavigation('/highlights')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                          <span className="relative">
                            2023 Highlights
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                          </span>
                        </button>
                        <button onClick={() => handleNavigation('/speakers')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                          <span className="relative">
                            Speakers & Mentors
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                          </span>
                        </button>
                        <button onClick={() => handleNavigation('/sharkTank')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                          <span className="relative">
                            Shark Tank Startups
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                          </span>
                        </button>
                        <button onClick={() => handleNavigation('/awards')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                          <span className="relative">
                            Award Night
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                          </span>
                        </button>
                        <button onClick={() => handleNavigation('/start-up-showcase')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                          <span className="relative">
                            Startup Showcase
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Why Attend Dropdown */}
            <div
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter('why')}
              onMouseLeave={() => handleMouseLeave('why')}
            >
              <button
                className="text-black text-[15px] font-medium hover:text-[#003777] no-underline flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer relative group"
                onClick={() => setWhyOpen(!whyOpen)}
              >
                Why Attend <FiChevronDown className={`transition-transform ${whyOpen ? 'rotate-180' : ''}`} />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
              </button>
              {whyOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[180px] animate-fadeIn">
                  <button onClick={() => handleNavigation('/start-up')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                    <span className="relative">
                      For Startups
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                    </span>
                  </button>
                  <button onClick={() => handleNavigation('/investor-accelator')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                    <span className="relative">
                      For Investors
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                    </span>
                  </button>
                  <button onClick={() => handleNavigation('/sponser')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                    <span className="relative">
                      For Sponsors
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Info Dropdown */}
            <div
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter('info')}
              onMouseLeave={() => handleMouseLeave('info')}
            >
              <button
                className="text-black text-[15px] font-medium hover:text-[#003777] no-underline flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer relative group"
                onClick={() => setInfoOpen(!infoOpen)}
              >
                Info <FiChevronDown className={`transition-transform ${infoOpen ? 'rotate-180' : ''}`} />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
              </button>
              {infoOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[180px] animate-fadeIn">
                  <button onClick={() => handleNavigation('/about')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                    <span className="relative">
                      About Event
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                    </span>
                  </button>
                  <button onClick={() => handleNavigation('/activities')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                    <span className="relative">
                      Activities
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                    </span>
                  </button>
                  <button onClick={() => handleNavigation('/faq')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                    <span className="relative">
                      FAQ
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                    </span>
                  </button>
                  <button onClick={() => handleNavigation('/event-flow')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 bg-transparent border-none cursor-pointer relative group transition-colors">
                    <span className="relative">
                      Event Flow
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
                    </span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/contact')}
              className="text-black text-[15px] font-medium hover:text-[#003777] no-underline transition-colors bg-transparent border-none cursor-pointer relative group"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => handleNavigation('/summary')}
              className="text-black text-[15px] font-medium hover:text-[#003777] no-underline transition-colors bg-transparent border-none cursor-pointer relative group"
            >
              Summary
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003777] group-hover:w-full transition-all duration-300"></div>
            </button>
          </div>

          {/* Register Button */}
          <div
            className="hidden lg:block relative ml-3 dropdown-container"
            onMouseEnter={() => handleMouseEnter('register')}
            onMouseLeave={() => handleMouseLeave('register')}
          >
            <button
              className="bg-[#003777] hover:bg-[#002a5c] text-white text-[15px] font-medium px-5 py-2 !rounded-3xl transition-colors flex items-center gap-1 border-none cursor-pointer"
              onClick={() => setRegisterOpen(!registerOpen)}
            >
              Register <FiChevronDown className={`transition-transform ${registerOpen ? 'rotate-180' : ''}`} />
            </button>
            {registerOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#003777] shadow-lg rounded-lg min-w-[150px] animate-fadeIn">
                <button onClick={() => handleNavigation('/register')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 bg-transparent border-none cursor-pointer relative group transition-colors">
                  <span className="relative">
                    Exhibitor
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                  </span>
                </button>
                <button onClick={() => handleNavigation('/register')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 bg-transparent border-none cursor-pointer relative group transition-colors">
                  <span className="relative">
                    Visitor
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                  </span>
                </button>
                <button onClick={() => handleNavigation('/register')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 bg-transparent border-none cursor-pointer relative group transition-colors">
                  <span className="relative">
                    Investor
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                  </span>
                </button>
                <button onClick={() => handleNavigation('/register')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 bg-transparent border-none cursor-pointer relative group transition-colors">
                  <span className="relative">
                    Sponsors
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-[#003777] bg-transparent border-none cursor-pointer p-2"
            onClick={onMobileMenuToggle}
          >
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;