import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function RegisterYourself() {

  const sectionRef = useRef(null);

  // ⭐ SCROLL ANIMATION TRIGGER
  useEffect(() => {
    const sec = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sec.classList.add("ry-active");
        } else {
          sec.classList.remove("ry-active");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="padding-sec ry-section" ref={sectionRef}>
      <Container>

        <Row className="align-items-center">

          <Col lg={8} md={9} xs={6} className="ry-item">
            <h3 className="title" style={{ color: "#000" }}>Register Yourself</h3>
          </Col>

          <Col lg={4} md={3} xs={6} className="text-end ry-item delay-1">
            <Link to="/register" className="theme-btn">
              Register Now
            </Link>
          </Col>

          <Col lg={6} xs={12} className="ry-item delay-2">
            <h5 className="para">
              People who register for the Start-Up Fest will be allotted a
              5-minute time slot to present their startup in front of
              potential investors.
            </h5>
          </Col>

        </Row>

        {/* CARDS */}
        <div className="justify-content-between row-margin row">

          <div className="col-lg-3 col-md-3 col-12 ry-item delay-1">
            <a className="no-design card-link-wrapper" href="/register">
              <div className="col-card">
                <div className="name-line pitcher-card-div">
                  <h3 className="card-title">Exhibitor</h3>
                </div>
                <p>
                  Exhibitors will get a 3 by 3 stall and a chance to{" "}
                  <span className="yellow-bg">present their project/idea/</span>
                  startup on stage in front of all the investors.
                </p>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-3 col-12 ry-item delay-2">
            <a className="no-design card-link-wrapper" href="/register">
              <div className="col-card">
                <div className="name-line pitcher-card-div">
                  <h3 className="card-title">Visitor</h3>
                </div>
                <p>
                  Visitors get a chance to connect with exhibitors, explore innovative startups, and{" "}
                  <span className="yellow-bg">discover new business opportunities</span>
                  across multiple industries.
                </p>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-3 col-12 ry-item delay-3">
            <a className="no-design card-link-wrapper" href="/register">
              <div className="col-card">
                <div className="name-line pitcher-card-div">
                  <h3 className="card-title">Investors</h3>
                </div>
                <p>
                  Investors get access to all startups and an opportunity to{" "}
                  <span className="yellow-bg">multiply their money by 2–3x.</span>
                </p>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-3 col-12 ry-item delay-4">
            <a className="no-design card-link-wrapper" href="/register">
              <div className="col-card">
                <div className="name-line pitcher-card-div">
                  <h3 className="card-title">Sponsors</h3>
                </div>
                <p>
                  Sponsors get{" "}
                  <span className="yellow-bg">premier visibility and direct access</span>
                  to high-growth founders & capital-ready investors.
                </p>
              </div>
            </a>
          </div>

        </div>

      </Container>

      {/* ⭐ SCROLL ANIMATION CSS ⭐ */}
      <style>{`
      
        .ry-section {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s ease-out;
        }

        .ry-section.ry-active {
          opacity: 1;
          transform: translateY(0);
        }

        .ry-item {
          opacity: 0;
          transform: translateY(25px);
          transition: 0.8s ease-out;
        }

        .ry-section.ry-active .ry-item {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.2s; }
        .delay-2 { transition-delay: 0.4s; }
        .delay-3 { transition-delay: 0.6s; }
        .delay-4 { transition-delay: 0.8s; }

      `}</style>

    </section>
  );
}
