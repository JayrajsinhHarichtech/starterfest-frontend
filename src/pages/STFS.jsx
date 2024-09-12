import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import urban from "../assets/img/urban.png";
import jainam from "../assets/img/jainam.png";
import bull from "../assets/img/bull.png";
import dharmil from "../assets/img/dharmil.png";
import harsh from "../assets/img/harsh.png";
import pabi from "../assets/img/pabi.png";
import rabari from "../assets/img/rabari.png";


const STFS = () => {
  return (
    <>
      <section className="padding-sec">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={5} xs={12}>
              <h3 className="title">Shark tank Featured Startup Journey</h3>
            </Col>
            <Col lg={6} xs={12} className="hello offset-lg-1">
              <Row className="align-items-center">
                <Col lg={4} xs={4}>
                  <img src={urban} className="" />
                </Col>
                <Col lg={4} xs={4}>
                  <img src={bull} className="" />
                </Col>
                <Col lg={4} xs={4}>
                  <img src={pabi} className="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container-bg padding-sec img-sec">
        <Container>
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title mb-5">Urban Naps</h3>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} xs={12}>
              <img className="w-100" src={urban} />
            </Col>

            <Col lg={4} xs={12}>
              <div className="relative-img">
                <img className="w-100" src={jainam} />
                <div className="text">
                  <p className="mb-0">Piyalee</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className='pt-5'>
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title mb-5">BullSpree</h3>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} xs={12}>
              <img className="w-100" src={bull} />
            </Col>

            <Col lg={4} xs={12}>
              <div className="relative-img">
                <img className="w-100" src={dharmil} />
                <div className="text">
                  <p className="mb-0">Dharmil Bavishi</p>
                </div>
              </div>
            </Col>

            <Col lg={4} xs={12}>
              <div className="relative-img">
                <img className="w-100" src={harsh} />
                <div className="text">
                  <p className="mb-0">Harsh Dhanawat</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className='pt-5'>
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title mb-5">Pabiben.com</h3>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} xs={12}>
              <div className="bg-img1">
              <img className="w-100" src={pabi} />
              </div>
            </Col>

            <Col lg={4} xs={12}>
              <div className="relative-img">
                <img className="w-100" src={rabari} />
                <div className="text">
                  <p className="mb-0">Ms Pabiben Rabari</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default STFS
