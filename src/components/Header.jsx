import React from "react";
import logo from "../assets/img/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdLocationPin } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";


export default function Header() {
  return (
    <div className="header">
      <Navbar expand="lg" className="menubar">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} md={10} xs={12}>
              <div className="flex">

                <Navbar.Brand href="/" className="logo">
                  <img src={logo} className="logo-header" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Offcanvas
                  id="navbarScroll"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                      <img src={logo} className="logo-offcanvas" width="200" />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="mobile-menu" >
                    <Nav className="me-auto my-2 my-lg-0 navbar-item" navbarScroll>
                      <NavDropdown title="2024 Highlights" id="navbarScrollingDropdown">

                        <NavDropdown.Item href="/speaker-2024">
                          2024 Moderator And Mentors
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/sharktank-2024">
                          Meet our Sharks
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/pre-series">
                          Pitching of Pre-series (ask for more than 1 crore)
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/shark-teen">
                          Shark Teens 2024
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="2023 Highlights" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/highlights">
                          2023 Highlights
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/speakers">
                          2023 Speaker And Mentors
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/sharkTank">
                          Shark Tank Featured Startups
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/awards">Award Night</NavDropdown.Item>
                        <NavDropdown.Item href="/start-up-showcase">
                          2023 Startup Showcase
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Why Attend"
                        id="navbarScrollingDropdown"
                      >
                        <NavDropdown.Item href="/start-up">
                          For Startups
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/investor-accelator">
                          For Investors And Accelerators
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/sponser">
                          For Sponsors
                        </NavDropdown.Item>
                        {/* <NavDropdown.Item href="/guest-speakers">
                  2024 Guest & Speakers
                </NavDropdown.Item>
                <NavDropdown.Item href="/sponser-2024">
                  2024 Sponsors
                </NavDropdown.Item> */}
                      </NavDropdown>

                      <NavDropdown title="Info" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/about">About Event</NavDropdown.Item>

                        <NavDropdown.Item href="/activities">Activities</NavDropdown.Item>
                        <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                        <NavDropdown.Item href="/event-flow">Event Flow</NavDropdown.Item>
                      </NavDropdown>

                      <Nav.Link href="/contact">Contact</Nav.Link>

                      <Nav.Link href="/summary">Summary</Nav.Link>

                      <NavDropdown title="Register" id="navbarScrollingDropdown">

                        <NavDropdown.Item href="/register">
                          Exhibitor
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/register">
                          Visitor
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/register">
                         Investor
                        </NavDropdown.Item>
                        
                      </NavDropdown>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </div>
            </Col>
            <Col lg={4} md={2} xs={12} className="right-header">
              <div className="menubar left">
                <ul className="navbar-item-left mr-3">
                  <li>
                    <Link href="/"> <FaRegCalendarAlt />December 13-14,2025</Link>
                  </li>
                  {/* <li>
                    <Link to="https://maps.app.goo.gl/p7vsywPPdDFeGUcF6" target="_blank">
                      <MdLocationPin />
                      Science City
                    </Link>
                  </li> */}
                </ul>
                {/* <Link to="/register" className="theme-btn">
                  Register Now
                </Link> */}
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}
