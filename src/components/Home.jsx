import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoIosArrowRoundDown } from "react-icons/io";
import video from "../assets/img/video-img.png";
import about from "../assets/img/about-img.png";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export default function Home() {
  return (
    <>
      <section className="top-banner">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h5 className="subheading">
                  Connecting Innovators and Investors.
                </h5>
                <h3 className="banner-text">
                  Join the Junction of Vision and Opportunity at{" "}
                  <span className="gradient">Startup Fest</span> Gujarat!
                </h3>
              </div>
            </Col>
            <Col lg="12">
              <div className="banner-btns">
                <button className="theme-btn">Register Now</button>
                <button className="theme-btn-light">
                  <IoIosArrowRoundDown /> Explore More
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <div className=" p-relative">
                <img src={video} className="w-100" />
                <div className="play-btn"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3 className="title">About start up fest</h3>
              <p>
                Welcome to Startup Fest Gujarat, presented by the Snehshilp
                Foundation! Get ready to immerse yourself in a dynamic ecosystem
                where innovation and entrepreneurship converge. With over 300
                startups, visionary investors, and renowned keynote speakers,
                we're setting the stage for an event that celebrates Gujarat's
                thriving business landscape.
              </p>
              <p>
                Join us in Ahmedabad, the heart of entrepreneurial brilliance,
                for an unforgettable experience that amplifies business ideas
                and fosters collaboration. Embrace the future of business at
                Startup Fest Gujarat.
              </p>

              <button className="theme-btn">Learn More</button>
            </Col>
            <Col lg="6">
                <img src={about} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec">
        <Container>
            <Row>
                <Col lg={6}>
                <h3 className="title mb-5">India <span className="gradient">Startup Revolution </span> is here and now!</h3>

                <Row>
                    <Col lg={4}>
                    <div className="box">
                    <MdLocationPin />
                        <h4>Venue</h4>
                        <p>
                        Vigyan Bhavanm, Science 
                        City, Ahmedabad.
                        </p>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="box">
                    {/* <SlCalender /> */}
                    <img src={caleder} width={45}/>
                        <h4>Date</h4>
                        <p>
                        28 & 29 September, 2024
                        </p>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="box">
                    <img src={clock} width={45}/>
                        <h4>Time</h4>
                        <p>
                        10:00 AM TO 10:00 PM
                        </p>
                    </div>
                    </Col>
                </Row>
                </Col>

                <Col lg={6}>
                <div className="counter-box">
                    <Row>
                        <Col lg={6}>
                            <div className="count border-right">
                                <h3>22</h3>
                                <h5 className="subtitle">Days</h5>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="count">
                                <h3>21</h3>
                                <h5 className="subtitle">Hours</h5>
                            </div>
                        </Col>
                    </Row>
                    <hr className="gradient-line"/>
                    <Row>
                    <Col lg={6}>
                            <div className="count border-right">
                                <h3>52</h3>
                                <h5 className="subtitle">Seconds</h5>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="count">
                                <h3>57</h3>
                                <h5 className="subtitle">Minutes</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  );
}
