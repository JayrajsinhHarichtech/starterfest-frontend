import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Images
import abhijeet from "../assets/img/Abhijeet-Satani.jpg";
import fenil from "../assets/img/ca.jpeg";
import naman from "../assets/img/NamanAnand.jpeg";
import neil from "../assets/img/Neil.JPEG";
import raul from "../assets/img/Raul.jpeg";
import sonu from "../assets/img/SonuSharma.png";
import tirth from "../assets/img/tirth.jpeg";

const SpeakersChiefGuest = () => {
    const sectionRef = useRef(null);

    // ⭐ Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ⭐ SCROLL ANIMATION OBSERVER (NO ERROR)
    useEffect(() => {
        if (!sectionRef.current) return;
        const sec = sectionRef.current;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) sec.classList.add("speaker-active");
                else sec.classList.remove("speaker-active");
            },
            { threshold: 0.2 }
        );

        obs.observe(sec);
        return () => obs.disconnect();
    }, []);

    // All Speakers Data
    const speakers = [
        {
            img: sonu,
            name: "Sonu Sharma",
            role: "International Motivational Speaker",
        },
        {
            img: raul,
            name: "Raul John Aju",
            role: "India's Young AI Innovator, CEO of Project 47x, TEDX Speaker",
        },
        {
            img: naman,
            name: "Naman Anand",
            role: "Mentalist, Magician",
        },
        {
            img: abhijeet,
            name: "Mr. Abhijeet Satani",
            role: "Scientist",
        },
        {
            img: tirth,
            name: "Mr. Tirth Patel",
            role: "CEO & Director – Anand Innovation Pvt Ltd",
        },
        {
            img: fenil,
            name: "CA. DR. CS. Fenil Shah",
            role: "WIRC Treasurer, Former ICAI Chairperson, TEDX Researcher",
        }
    ];

    return (
        <>
            <section className="container-bg padding-sec speakers-anim-section" ref={sectionRef}   style={{
      paddingTop: "160px",   // ⭐ TOP GAP FIXED
    }}>
                {/* ⭐ Chief Guest */}
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col className="text-center fade-up">
                            <h3 className="title">Chief Guest</h3>
                        </Col>
                    </Row>

                    <Row className="g-4 justify-content-center">
                        <Col lg={4} md={6} xs={12} className="slide-up delay-1">
                            <div className="speaker-card">
                                <img src={neil} alt="Neil Nitin Mukesh" className="w-100" />
                                <div className="speaker-card-div">
                                    <p className="mb-0 fw-bold">Neil Nitin Mukesh</p>
                                    <p className="mb-0 font-sm">
                                        Renowned Indian Actor & Film Producer
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* ⭐ Speakers */}
                <Container className="pt-5">
                    <Row className="d-flex justify-content-center">
                        <Col className="text-center fade-up delay-1">
                            <h3 className="title">Speakers</h3>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {speakers.map((spk, index) => (
                            <Col
                                key={index}
                                lg={4}
                                md={6}
                                xs={12}
                                className={`slide-up delay-${index + 2}`}
                            >
                                <div className="speaker-card">
                                    <img src={spk.img} alt={spk.name} className="w-100" />
                                    <div className="speaker-card-div">
                                        <p className="mb-0 fw-bold">{spk.name}</p>
                                        <p className="mb-0 font-sm">{spk.role}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

                {/* ⭐ Animation CSS */}
                <style>{`
                    .speakers-anim-section {
                        opacity: 0;
                        transform: translateY(40px);
                        transition: 0.9s ease-out;
                    }
                    .speaker-active {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    /* Fade Up */
                    .fade-up {
                        opacity: 0;
                        transform: translateY(25px);
                        transition: 0.9s ease-out;
                    }
                    .speaker-active .fade-up {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    /* Slide Up */
                    .slide-up {
                        opacity: 0;
                        transform: translateY(35px);
                        transition: 0.9s ease-out;
                    }
                    .speaker-active .slide-up {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    /* Stagger Delays */
                    .delay-1 { transition-delay: 0.2s; }
                    .delay-2 { transition-delay: 0.4s; }
                    .delay-3 { transition-delay: 0.6s; }
                    .delay-4 { transition-delay: 0.8s; }
                    .delay-5 { transition-delay: 1s; }
                    .delay-6 { transition-delay: 1.2s; }
                    .delay-7 { transition-delay: 1.4s; }

                    /* Card Hover */
                    .speaker-card {
                        position: relative;
                        overflow: hidden;
                        border-radius: 12px;
                        transition: 0.4s;
                    }
                    .speaker-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                    }
                `}</style>
            </section>
        </>
    );
};

export default SpeakersChiefGuest;
