import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardContent = ({ about, text, title, buttonShow, to, linkToTitle }) => {
  
  const sectionRef = useRef(null);

  // ⭐ Scroll Animation Trigger
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("cc-active");
        } else {
          section.classList.remove("cc-active");
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Container ref={sectionRef} className="cc-section">

        <Row className="justify-content-between card-anim-row">

          {/* LEFT SIDE */}
          <Col xs={12} md={12} lg={5}>

            <h3 className="title cc-fade-up">
              {React.createElement("div", {
                dangerouslySetInnerHTML: { __html: title },
              })}
            </h3>

            <div className="cc-fade-in">
              {React.createElement("div", {
                dangerouslySetInnerHTML: { __html: text },
              })}
            </div>

            {buttonShow && (
              <div className="padding-btn cc-zoom-in">
                <Link to={to} className="theme-btn">
                  {linkToTitle}
                </Link>
              </div>
            )}
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col xs={12} md={12} lg={6} className="offset-lg-0">
            <img src={about} className="w-100 img-padding cc-slide-right" />
          </Col>
        </Row>
      </Container>

      {/* ⭐ SCROLL ANIMATION CSS ⭐ */}
      <style>{`
        
        /* Base hidden states */
        .cc-fade-up,
        .cc-fade-in,
        .cc-zoom-in,
        .cc-slide-right {
          opacity: 0;
          transform: translateY(25px);
          transition: 0.8s ease-out;
        }

        /* Different transforms */
        .cc-slide-right {
          transform: translateX(40px);
        }

        .cc-zoom-in {
          transform: scale(0.92);
        }

        /* When Active (scroll visible) */
        .cc-section.cc-active .cc-fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        .cc-section.cc-active .cc-fade-in {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .cc-section.cc-active .cc-zoom-in {
          opacity: 1;
          transform: scale(1);
          transition-delay: 0.4s;
        }

        .cc-section.cc-active .cc-slide-right {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.3s;
        }

      `}</style>
    </React.Fragment>
  );
};

export default CardContent;
