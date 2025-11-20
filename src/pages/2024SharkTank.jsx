import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import user from "../assets/img/user.png";
import tanuj from "../assets/img/Tanuj.jpg";
import yash from "../assets/img/yash.jpg";
import devansh from "../assets/img/Devansh.jpg";
import Ronak from "../assets/img/ronak.jpg";
import arnav from "../assets/img/arnav.jpg";
import panel from "../assets/img/startuppanel.JPG";

const STFS2024 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ===================== DATA =====================
    const section = [

        {
            image: tanuj,
            subtitle: "CEO of Gallops Group",
            name: "Mr. Tanuj Pugalia",

        },
        {
            image: yash,
            subtitle: "CEO and Founder of The Address and True Value",
            name: "Mr. Yash Shah",
        },
        {
            image: devansh,
            subtitle: "Family Office, Urmin Group",
            name: "Mr. Devansh Majetiya",
        },
        {
            image: Ronak,
            subtitle: "Director of Chiripal Group",
            name: "Mr. Ronak Chiripal",
        },
        {
            image: arnav,
            subtitle: "Founder of Ambassador Fintech",
            name: "Mr. Arnav Patel",
        },
    ]


    // ===================== RENDER =====================
    return (
        <>
                <section className=""  style={{
      paddingTop: "120px",   // ⭐ TOP GAP FIXED
    }}><img src={panel} className="w-100"/></section>
        
            {/* ======= INTRO SECTION ======= */}
            <section className="padding-sec">
                <Container>

                    <Row
                        className="justify-content-center align-items-center"
                    >
                        <Col lg={12} xs={12}>
                            <h4 style={{ fontWeight: 'bolder' }} >The Startup Shark Panel brought together some of Gujarat’s most influential investors and entrepreneurs for an electrifying live pitching experience.
                                Startups presented their ideas to leading industry figures who shared insights,
                                offered mentorship, and explored real-time investment opportunities.</h4>
                        </Col>

                    </Row>

                    <Row className="g-4 mt-4 justify-content-center">
                        {section.map((person, index) => (
                            <Col
                                key={index}
                                lg={person.lg || 4}
                                md={6}
                                xs={12}
                            >
                                <div className="speaker-card">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-100"
                                    />
                                    <div className="speaker-card-div">
                                        <div>
                                            <p className="mb-0">{person.name}</p>
                                            {person.subtitle && (
                                                <p className="mb-0 font-sm">{person.subtitle}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Row
                        className="justify-content-center align-items-center mt-5"
                    >
                        <Col lg={12} xs={12}>
                            <h4 style={{ fontWeight: 'bolder' }} >The session created an inspiring space where innovation met opportunity, empowering startups to connect, collaborate, and grow with the guidance of Gujarat’s leading business visionaries.</h4>
                        </Col>

                    </Row>
                </Container>
            </section>


        </>
    );
};

export default STFS2024;
