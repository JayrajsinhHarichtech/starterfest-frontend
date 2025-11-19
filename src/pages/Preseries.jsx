import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import pre from "../assets/img/pre.webp";
import pre2 from "../assets/img/pre2.webp";
import pre3 from "../assets/img/pre3.webp";
import pre4 from "../assets/img/pre4.webp";
import pre5 from "../assets/img/pre5.webp";




const PreSeries = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ===================== DATA =====================
    const section = [

        {
            image: pre,
        },
        {
            image: pre2,
        },
        {
            image: pre3,
        },
        {
            image: pre4,
        },
        {
            image: pre5,

        },
       
    ]


    // ===================== RENDER =====================
    return (
        <>
            {/* ======= INTRO SECTION ======= */}
            <section className="padding-sec">
                <Container>

                    

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
                                         className="w-100"
                                    />
                                     
                                </div>
                            </Col>
                        ))}
                    </Row>
                  
                </Container>
            </section>


        </>
    );
};

export default PreSeries;
