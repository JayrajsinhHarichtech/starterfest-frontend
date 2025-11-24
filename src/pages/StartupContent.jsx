import { useState, useEffect } from "react";
import banner from "../assets/img/pitcher-startup.jpg";
import cal from "../assets/img/calender.png";
import img1 from "../assets/img/shilp-icon.png";
import mainBanner from "../assets/img/banners/home-page.png";
import rePurchase from "../assets/img/review-purchase.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function StartupContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [map, setMap] = useState(false);
  const handleMap = () => setMap(!map);

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <div className="mb-8">
          <img src={mainBanner} className="w-full h-auto rounded-2xl shadow-lg" alt="Startup Fest Banner" />
        </div>

        {/* Date and Ticket Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex-1">
            <h6 className="text-[#003777] text-lg font-semibold">Saturday, 13 December</h6>
          </div>
          <div className="">
            <a 
              href="http://register.startupfestgujarat.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="!no-underline inline-block bg-[#003777] hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Ticket
            </a>
          </div>
        </div>

        {/* Modal */}
        {show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-3">
                  <img src={rePurchase} width="50" className="" alt="Review" />
                  <span className="text-xl font-semibold">Review Purchase</span>
                </div>
                <button 
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <IoClose size={24} />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="p-6">
                <h5 className="text-xl font-semibold mb-2">Friday AfterHours: Sufi Unplugged</h5>
                <h6 className="text-[#003777] text-base mb-4">Friday, September 13</h6>
                <img src={banner} className="w-full rounded-lg mb-4" alt="Event" />
                
                <div className="flex justify-between mb-4">
                  <h5 className="text-lg font-semibold">Amount (₹)</h5>
                  <h5 className="text-lg font-semibold">Quantity</h5>
                </div>
                
                <div className="flex gap-4 mb-4">
                  <input 
                    type="number" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003777]" 
                    placeholder="100" 
                  />
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(0, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:text-[#003777] transition-colors"
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      className="w-16 text-center py-2 border-0 focus:outline-none"
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                      value={quantity}
                      min={0}
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-[#003777] transition-colors"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">Sales end on December 13</p>

                <hr className="mb-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Subtotal</span>
                    <span>₹500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tax</span>
                    <span>₹4.00</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹504.00</span>
                  </div>
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="flex gap-3 p-6 border-t">
                <button 
                  onClick={handleClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-[#003777] text-white rounded-lg hover:bg-blue-900 transition-colors">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Start-Up Fest 3.0 Gujarat by Snehshilp Foundation
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - About Event */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">About Event</h4>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Join us for the second edition of Start-Up Fest Gujarat, a
                    day dedicated to empowering your business journey with
                    unparalleled knowledge, inspiration, and networking
                    opportunities. This event is crafted to uplift and
                    celebrate the dynamic community of small businesses,
                    providing you with key insights and connections to propel
                    your success.
                  </p>

                  <p>
                    At the Start-Up Fest Gujarat, you'll have the opportunity
                    to engage with industry-leading experts, influential
                    speakers, and fellow entrepreneurs who have thrived in the
                    small business arena. Dive deep into invaluable knowledge
                    through keynote presentations, interactive workshops, and
                    panel discussions on a wide array of topics, including
                    marketing strategies, finance and funding, digital
                    transformation, customer experience, and more.
                  </p>

                  <p>
                    Our exhibition hall will be a hub of innovation,
                    showcasing products and services specifically designed to
                    cater to the needs of small businesses. Connect with
                    exhibitors and discover cutting-edge solutions that can
                    streamline your operations, enhance productivity, and
                    drive growth. Explore the latest technological
                    advancements, software applications, marketing tools, and
                    financial services that can revolutionize your business.
                  </p>

                  <p>
                    Whether you're an established business owner or just
                    beginning your entrepreneurial journey, the Small Business
                    Expo is an essential event to fuel your ambitions. Mark
                    your calendars, gather your business cards, and prepare to
                    immerse yourself in a day of inspiration, education, and
                    growth. Don't miss this chance to connect with the
                    brightest minds in the industry and unlock the full
                    potential of your small business.
                  </p>
                  
                  <p>
                    Join us at the Start-Up Fest Gujarat 3.0 and take a
                    monumental step towards realizing your entrepreneurial
                    dreams!
                  </p>
                  
                  <div className="mt-8">
                    <h6 className="text-xl font-semibold text-gray-900 mb-3">Refund Policy</h6>
                    <p>
                      Once registration is confirmed, the fee is non-refundable.
                      IF THE EVENT IS CANCELLED DUE TO ANY UNFORESEEN
                      CIRCUMSTANCES BEYOND THE CONTROL OF THE ORGANIZERS, THE
                      REGISTRATION FEE PAID BY YOU FOR PARTICIPATION WILL BE
                      ADJUSTED TOWARDS YOUR PARTICIPATION ON A NEW DATE. IN THE
                      EVENT OF YOU BEING UNABLE TO PARTICIPATE ON THE NEW DATE,
                      YOU WILL NOT BE ELIGIBLE FOR A REFUND.
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <h6 className="text-xl font-semibold text-gray-900 mb-3">Tickets</h6>
                    <p className="mb-4">
                      Tickets for Start-Up Fest 3.0 Gujarat by Snehshilp
                      Foundation can be booked here.
                    </p>
                    
                    <a 
                      href="http://register.startupfestgujarat.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className=" !no-underline inline-block bg-[#003777] hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Get Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Event Details */}
            <div className="lg:col-span-1 space-y-6">
              {/* Date and Time */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h6 className="text-lg font-semibold text-gray-900 mb-4">Date and Time</h6>
                <div className="flex items-start space-x-4">
                  <img src={cal} className="w-8 h-8 mt-1" alt="Calendar" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Sat Dec 13 2025 at 09:00 am to Sun Dec 14 2025
                      at 11:00 pm (GMT+05:30)
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h6 className="text-lg font-semibold text-gray-900 mb-4">Location</h6>
                <div className="flex items-start space-x-4 mb-4">
                  <MdLocationPin className="text-[#003777] text-xl mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      Gujarat University Atal Kalam Building, Ahmedabad
                    </p>
                    <button 
                      onClick={handleMap}
                      className="flex items-center space-x-2 mt-2 text-[#003777] hover:text-blue-900 transition-colors"
                    >
                      <span className="text-sm font-medium">Show Map</span>
                      <IoIosArrowDown className={`transform transition-transform ${map ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
                
                {map && (
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.54275011732!2d72.54009267509234!3d23.040555279161175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ead1103329%3A0x1a907f7fee8b2b7f!2sGujarat%20University!5e0!3m2!1sen!2sin!4v1763451642149!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="border-0 rounded-lg"
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Hosted By */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h6 className="text-lg font-semibold text-gray-900 mb-4">Hosted By</h6>
                <div className="flex items-center space-x-4">
                  <img src={img1} className="w-12 h-12 object-contain" alt="Snehshilp Foundation" />
                  <div>
                    <h6 className="font-semibold text-gray-900">Snehshilp Foundation</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}