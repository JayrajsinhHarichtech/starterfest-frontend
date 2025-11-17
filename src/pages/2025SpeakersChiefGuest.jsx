import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import Sandeep from "../assets/img/Abhijeet-Satani.jpg"; 
import ca from "../assets/img/ca.jpeg";
import naman from "../assets/img/NamanAnand.jpeg";
import neil from "../assets/img/Neil.JPEG";
import raul from "../assets/img/Raul.jpeg";
import sonu from "../assets/img/SonuSharma.png";  
import tirth from "../assets/img/tirth.jpeg";

const SpeakersChiefGuest = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ===================== DATA =====================
    const sections = [
        {
            title: "Panelists",
            data: [
                {
                    name: "Abhijeet Satani",
                    // subtitle: "Managing Director, Astral Limited",
                    image: Sandeep,
                     lg: 4,
                },
                {
                    name: "CA Fenil Shah",
                     image: ca,
                    lg: 4,
                },
                {
                    name: "Naman Anand",
                     image: naman,
                    lg: 4,
                },
                {
                    name: "Neil Nitin Mukesh",
                     image: neil,
                    lg: 4,
                },
                {
                    name: "Raul",
                     image: raul,
                    lg: 4,
                },
                {
                    name: "Sonu Sharma",
                     image: sonu,
                    lg: 4,
                },
                {
                    name: "Tirth Patel",
                     image: tirth,
                    lg: 4,
                },
            ],
        },
        
     
    ];

    // ===================== RENDER =====================
    return (
        <>
        {/* <section class=""><img src={panel} className="w-100"/></section> */}
        <section className="container-bg padding-sec">
            {sections.map((section, i) => (
                <Container key={i} className={i !== 0 ? "pt-5" : ""}>
                     
                    <Row className="g-4">
                        {section.data.map((person, index) => (
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
                </Container>
            ))}
        </section>
        </>
    );
};

export default SpeakersChiefGuest;
