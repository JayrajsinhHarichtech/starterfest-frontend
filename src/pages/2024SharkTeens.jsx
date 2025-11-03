import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import st from "../assets/img/st.jpg";
import st1 from "../assets/img/st-1 (1).JPG";
import st2 from "../assets/img/st-1 (2).JPG";
import st3 from "../assets/img/st-1 (3).JPG";
// import user from "../assets/img/st-1.JPG";

const Sharkteen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ===================== DATA =====================
    const section = [

        {
            image: st1,
        },
        {
            image: st2,
        },
        {
            image: st3,
        },

        {
            image: st,
        },

    ]

    return (
        <>
            <section className="padding-sec">
                <Container>
                    <Row className="g-4 mt-4 justify-content-center">
                        {section.map((person, index) => (
                            <Col
                                key={index}
                                lg={person.lg || 3}
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

export default Sharkteen;
