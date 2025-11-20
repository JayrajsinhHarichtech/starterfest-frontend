import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Offcanvas } from "react-bootstrap";

export default function Header() {
  const [highlightsOpen, setHighlightsOpen] = useState(false);
  const [high2024Open, setHigh2024Open] = useState(false);
  const [high2023Open, setHigh2023Open] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
        }

        .navigation-center a,
        .navbar-nav a,
        .dropdown-menu a {
          color: black !important;
          font-weight: 500;
        }

        .navigation-center a:hover,
        .navbar-nav a:hover,
        .dropdown-menu a:hover,
        .nav-link:hover,
        .dropdown-item:hover {
          color: #003777 !important;
        }

        .dropdown-toggle {
          color: black !important;
          font-weight: 500;
        }

        .dropdown-toggle:hover {
          color: #003777 !important;
        }

        #register .dropdown-item,
        #register .dropdown-item:active,
        #register .dropdown-item:focus,
        #register .dropdown-item:hover {
          background: transparent !important;
          color: white !important;
        }

        .navigation-center *,
        .navbar-nav *,
        .dropdown-menu *,
        .theme-btn *,
        .topbar * {
          font-family: 'Inter', sans-serif !important;
        }

        /* Animation */
        .dropdown-menu {
          display: block !important;
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: 0.25s ease;
        }
        .dropdown-menu.show {
          opacity: 1 !important;
          transform: translateY(0px);
          pointer-events: auto;
        }

        /* MULTI LEVEL MENU FIX */
        .dropdown-submenu {
          position: relative;
        }
        .dropdown-submenu > .dropdown-menu {
          top: 0 !important;
          left: 100% !important;
          margin-left: 4px !important;
          display: block !important;
          opacity: 0;
          pointer-events: none;
          transform: translateX(10px);
          transition: 0.25s ease;
        }
        .dropdown-submenu > .dropdown-menu.show {
          opacity: 1 !important;
          transform: translateX(0px);
          pointer-events: auto;
        }

        /* Register button specific styles */
        .register-dropdown .dropdown-toggle {
          background: #003777 !important;
          padding: 8px 18px !important;
          border-radius: 25px !important;
          color: #fff !important;
          border: none !important;
          font-weight: 500;
        }

        .register-dropdown .dropdown-toggle:hover {
          background: #002a5c !important;
          color: #fff !important;
        }

        .register-dropdown .dropdown-menu {
          background: #003777;
          border: none;
          border-radius: 10px;
        }

        .register-dropdown .dropdown-item {
          color: #fff !important;
        }

        .register-dropdown .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #fff !important;
        }
      `}</style>

      {/* ---------------- TOP BAR ---------------- */}
      <div 
        className="topbar" 
        style={{ 
          padding: "8px 20px", 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span>Don't miss your chance to be part of the event. - Grab Your Passes Now!!</span>

        <div style={{ display: "flex", gap: "18px", alignItems: "center", fontWeight: "500" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FaRegCalendarAlt /> December 13–14, 2025
          </span>

          <span>|</span>

          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <MdLocationPin /> Gujarat University Atal Kalam Building
          </span>
        </div>
      </div>

      {/* ---------------- HEADER ---------------- */}
      <Navbar expand="lg" className="main-header" fixed="top">
        <div className="header-container">
          <Navbar.Brand href="/" className="logo">
            <img 
              src="/logo2.svg" 
              className="logo-header"
              alt="logo" 
              style={{ height: "55px" }} 
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Offcanvas id="navbarScroll" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img src="/logo2.svg" width="180" alt="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="mx-auto navigation-center" navbarScroll>
                <Nav.Link href="/2025-Speakers">2025 Speakers</Nav.Link>

                {/* ---------------- HIGHLIGHTS ---------------- */}
                <NavDropdown
                  title="Highlights"
                  show={highlightsOpen}
                  autoClose={false}
                  onClick={() => setHighlightsOpen(!highlightsOpen)}
                >
                  {/* 2024 */}
                  <NavDropdown
                    title="2024 Highlights"
                    drop="end"
                    className="dropdown-submenu"
                    show={high2024Open}
                    autoClose={false}
                    onClick={(e) => {
                      e.stopPropagation();
                      setHigh2024Open(!high2024Open);
                    }}
                  >
                    <NavDropdown.Item href="/speaker-2024">2024 Moderator & Mentors</NavDropdown.Item>
                    <NavDropdown.Item href="/sharktank-2024">Meet our Sharks</NavDropdown.Item>
                    <NavDropdown.Item href="/pre-series">Pre-Series Pitching</NavDropdown.Item>
                    <NavDropdown.Item href="/shark-teen">Shark Teens 2024</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown.Divider />

                  {/* 2023 */}
                  <NavDropdown
                    title="2023 Highlights"
                    drop="end"
                    className="dropdown-submenu"
                    show={high2023Open}
                    autoClose={false}
                    onClick={(e) => {
                      e.stopPropagation();
                      setHigh2023Open(!high2023Open);
                    }}
                  >
                    <NavDropdown.Item href="/highlights">2023 Highlights</NavDropdown.Item>
                    <NavDropdown.Item href="/speakers">Speakers & Mentors</NavDropdown.Item>
                    <NavDropdown.Item href="/sharkTank">Shark Tank Startups</NavDropdown.Item>
                    <NavDropdown.Item href="/awards">Award Night</NavDropdown.Item>
                    <NavDropdown.Item href="/start-up-showcase">Startup Showcase</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                {/* ---------------- WHY ATTEND ---------------- */}
                <NavDropdown
                  title="Why Attend"
                  show={whyOpen}
                  autoClose={false}
                  onClick={() => setWhyOpen(!whyOpen)}
                >
                  <NavDropdown.Item href="/start-up">For Startups</NavDropdown.Item>
                  <NavDropdown.Item href="/investor-accelator">For Investors</NavDropdown.Item>
                  <NavDropdown.Item href="/sponser">For Sponsors</NavDropdown.Item>
                </NavDropdown>

                {/* ---------------- INFO ---------------- */}
                <NavDropdown
                  title="Info"
                  show={infoOpen}
                  autoClose={false}
                  onClick={() => setInfoOpen(!infoOpen)}
                >
                  <NavDropdown.Item href="/about">About Event</NavDropdown.Item>
                  <NavDropdown.Item href="/activities">Activities</NavDropdown.Item>
                  <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                  <NavDropdown.Item href="/event-flow">Event Flow</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/summary">Summary</Nav.Link>
              </Nav>

              {/* ---------------- REGISTER ---------------- */}
              <NavDropdown
                title="Register"
                className="register-dropdown ms-3"
                show={registerOpen}
                autoClose={false}
                onClick={() => setRegisterOpen(!registerOpen)}
              >
                <NavDropdown.Item href="/register">Exhibitor</NavDropdown.Item>
                <NavDropdown.Item href="/register">Visitor</NavDropdown.Item>
                <NavDropdown.Item href="/register">Investor</NavDropdown.Item>
                <NavDropdown.Item href="/register">Sponsors</NavDropdown.Item>
              </NavDropdown>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    </>
  );
}