import React from 'react'
import logo from '../assets/img/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdLocationPin } from "react-icons/md";

export default function Header() {
  return (
    <div className="header">
      <Container>
        <Row className='align-items-center'>
          <Col lg={7}>
            <div className="menubar">
              <div className="logo">
                <img src={logo} className="logo-header" />
              </div>
              <ul className="navbar-item">
                <li><a href='/'>2023 Highlights</a></li>
                <li><a href='/'>Reason to participate</a></li>
                <li><a href='/'>Info</a></li>
                <li><a href='/'>Contact Us</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={5}>
          <div className="menubar left">
             
              <ul className="navbar-item-left mr-3">
                <li><a href='/'>Sept 28-29,2024</a></li>
                <li><a href='/'><MdLocationPin />Science City</a></li>
              </ul>
              <button className='theme-btn'>Register Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
