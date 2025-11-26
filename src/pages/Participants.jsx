import React, { useEffect } from "react";
import parti1 from "../assets/img/participants1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import arrow from "../assets/img/hurry-arrow.png";

export default function Participants() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <style>{`
        a {
          text-decoration: none !important;
        }
        a:hover {
          text-decoration: none !important;
        }
      `}</style>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Pitch Your Startup <br />
                to Investors
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Pitchers will not only have a dedicated 3 by 3 stall to showcase
                their projects, ideas, or startups, but they will also have a
                unique opportunity to captivate and engage with a large audience
                of potential investors on a grand stage. This platform allows
                pitchers to present their visions, demonstrate their passion,
                and persuade investors to join them on their entrepreneurial
                journey.
              </p>
              <div>
                <a 
                  href="http://register.startupfestgujarat.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#003777] hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl no-underline"
                >
                  Register Now
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src={parti1} className="w-full h-auto rounded-2xl shadow-lg" alt="Participants" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Grab Your Tickets
              </h3>
              <img src={arrow} alt="Arrow" className="w-8 h-8" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Investor Pass
              </h3>
              <div className="mb-6">
                <h3 className="text-lg text-gray-500 line-through mb-2">
                  ₹4,000
                </h3>
                <div className="flex justify-center">
                  <h2 className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-xl">
                    ₹499
                  </h2>
                </div>
              </div>
              <a 
                href="http://register.startupfestgujarat.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="no-underline"
              >
                <div className="bg-[#003777] hover:bg-blue-900 text-white rounded-lg p-4 flex items-center justify-between transition-colors duration-300">
                  <h5 className="text-lg font-semibold mb-0">Register Now</h5>
                  <FaArrowRightLong className="w-5 h-5" />
                </div>
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visitor Pass
              </h3>
              <div className="mb-6">
                <h3 className="text-lg text-gray-500 line-through mb-2">
                  ₹1,000
                </h3>
                <div className="flex justify-center">
                  <h2 className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-xl">
                    ₹99
                  </h2>
                </div>
              </div>
              <a 
                href="http://register.startupfestgujarat.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="no-underline"
              >
                <div className="bg-[#003777] hover:bg-blue-900 text-white rounded-lg p-4 flex items-center justify-between transition-colors duration-300">
                  <h5 className="text-lg font-semibold mb-0">Register Now</h5>
                  <FaArrowRightLong className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-20">
              Exhibit Your Startup
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Silver
                  </h3>
                  <h3 className="text-3xl font-bold text-[#003777] mb-4">
                    ₹15,000
                  </h3>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    2X2 Meter Stall
                  </h3>
                  <div className="mb-4">
                    <img 
                      src="/2x2.jpg"
                      alt="2x2 Meter Stall Layout" 
                      className="w-full h-auto rounded-lg mb-2"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 font-semibold mb-4">This package includes:</p>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>Chair</li>
                    <li>1 Table</li>
                    <li>Food Phases and Visitor Passes</li>
                    <li>Front Fascia Branding</li>
                    <li>Access to Meeting Rooms and Investor Zone</li>
                    <li>Ideal for early stage startups looking for a cost-effective way to showcase their innovations and connect with potential investors.</li>
                  </ul>
                </div>
                <div className="text-center mt-6">
                  <a 
                    href="http://register.startupfestgujarat.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-[#003777] hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl no-underline"
                  >
                    Register Now
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full border-2 border-yellow-400">
                <div className="text-center mb-6">
                  <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-2">POPULAR</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Gold
                  </h3>
                  <h3 className="text-3xl font-bold text-[#003777] mb-4">
                    ₹30,000
                  </h3>
                 
                  <h3 className="text-xl font-semibold text-gray-700">
                    3x3 Meter Stall
                  </h3>
                    <div className="mb-4">
                    <img 
                      src="/3x3.jpg"
                      alt="3x3 Meter Stall Layout" 
                      className="w-full h-auto rounded-lg  mb-2"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 font-semibold mb-4">This package includes:</p>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>4 Chairs</li>
                    <li>Tables</li>
                    <li>4 Food Phases and Visitor Passes</li>
                    <li>Front Fascia Branding</li>
                    <li>Access to Meeting Rooms and Investor Zones</li>
                    <li>Opportunity to Pitch to Angel Investors and Sharks at the Main Stage (Terms and Conditions Apply)</li>
                    <li>Perfect for startups ready to make an impression and engage directly with investors, offering enhanced visibility and pitching opportunities.</li>
                  </ul>
                </div>
                <div className="text-center mt-6">
                  <a 
                    href="http://register.startupfestgujarat.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl no-underline"
                  >
                    Register Now
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-xl p-8 flex flex-col h-full text-white">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">PREMIUM</div>
                  <h3 className="text-2xl font-bold mb-4">
                    Platinum
                  </h3>
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                    ₹1,00,000
                  </h3>
                  <h3 className="text-xl font-semibold text-gray-300">
                    Sponsorship Stall
                  </h3>
                    <div className="mb-4">
                    <img 
                      src="/SponsorshipStall.jpg"
                      alt="SponsorshipStall Layout" 
                      className="w-full h-auto rounded-lg mb-2"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 font-semibold mb-4">This package includes:</p>
                  <ul className="text-gray-200 space-y-2 list-disc list-inside">
                    <li>4 Chairs</li>
                    <li>Tables</li>
                    <li>6 Food Phases and Visitor Passes</li>
                    <li>Front Fascia Branding</li>
                    <li>Access to VIP Area, Meeting Rooms, and Investor Zones</li>
                    <li>Branding at the Venue (Logo placement in the backdrop and throughout the venue)</li>
                    <li>High Visibility Stall Location near the Main Stage, where VIPs and Investors will be seated</li>
                    <li>Direct Opportunity to Pitch to Angel Investors and Sharks</li>
                  </ul>
                </div>
                <div className="text-center mt-6">
                  <a 
                    href="http://register.startupfestgujarat.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl no-underline"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <RegisterYourself /> */}

      {/* <section className="register-sec dark-bg padding-sec">
        <Container>
          <div className="w-70 m-auto">
            
          </div>
          <Row>
            <Col lg={8}>
            <h3 className="title text-white mb-0">
            Let' s connect to know more!
            </h3>
            </Col>
            <Col lg={4}>
              <div className="banner-btns">
                <a href="http://register.startupfestgujarat.com/" target="_blank" rel="noopener noreferrer" className="theme-btn-light light-border">
                  Register Now
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section className="register-sec dark-bg padding-sec">
        <Container>
          <div className="w-70 m-auto">
            <h3 className="title text-center text-white">
              Be a Part of Gujarat's Largest Startup Fest Setting the Pace for
              Innovation!
            </h3>
          </div>
          <Row>
            <Col lg={12}>
              <div className="banner-btns">
                <button className="theme-btn-light light-border">
                  Register Now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
}
