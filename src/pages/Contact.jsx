import React, { useState } from "react";
import axios from "axios";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TabContent } from "reactstrap";

function Contact() {
  const [formData, setFormData] = useState({
    contactPersonName: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Replace this with your backend URL
      const apiURL = process.env.REACT_APP_URL || "http://localhost:5000";

      const response = await axios.post(`${apiURL}/api/auth/contact`, formData);

      if (response.status === 200) {
        alert("Form submitted successfully!");
        setFormData({
          contactPersonName: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setErrorMessage("Error submitting the form. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="">
        <Row style={{ overflow: "hidden" }}>
          <Col lg={6}>
            <div className="form-padding pb-4">
              <h3 className="title mt-4 mb-1 pt-4">
                Get In Touch For Event Inquiries
              </h3>
              <h5 className="para-custom">
                For any questions or inquiries about the event, please
                <br />
                fill out the form below. Our team will be delighted to
                <br /> assist you. Contact us now and be a part of an
                <br /> extraordinary experience.
              </h5>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1458120123953!2d73.14790037488885!3d22.310324579679392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9a3e3743327%3A0x6f57e791de3dc0be!2sHarmonY%20ShivaaY!5e0!3m2!1sen!2sin!4v1726032528168!5m2!1sen!2sin"
                width="700"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col lg={6}>
            <div className="form-padding pb-4">
              <TabContent>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 mt-5">
                    <label className="f-13 fw-bold" htmlFor="contactPersonName">
                      Name
                    </label>
                    <input
                      type="text"
                      name="contactPersonName"
                      className="form-control bg-light"
                      placeholder="Your Name"
                      value={formData.contactPersonName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light"
                      placeholder="Your@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="number">
                      Phone number
                    </label>
                    <input
                      type="number"
                      name="number"
                      className="form-control bg-light"
                      placeholder="Phone number"
                      value={formData.number}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control bg-light"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="message">
                      Your Message <span>(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      className="form-control bg-light"
                      style={{ height: 100 }}
                      placeholder="Tell us a little more..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                  )}
                  <div>
                    <Button
                      type="submit"
                      color="primary"
                      className="mt-3 register-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </TabContent>
            </div>
          </Col>
        </Row>
      </div>

      <section className="padding-sec" style={{ overflow: "hidden" }}>
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className="title mb-5">
                India <span className="gradient">Startup Revolution </span> is
                here and now!
              </h3>

              <Row>
                <Col lg={4}>
                  <div className="box">
                    <MdLocationPin />
                    <h4>Venue</h4>
                    <p>Vigyan Bhavanm, Science City, Ahmedabad.</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="box">
                    <img src={caleder} width={45} />
                    <h4>Date</h4>
                    <p>28 & 29 September, 2024</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="box">
                    <img src={clock} width={45} />
                    <h4>Time</h4>
                    <p>10:00 AM TO 10:00 PM</p>
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
                <hr className="gradient-line" />
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

export default Contact;
