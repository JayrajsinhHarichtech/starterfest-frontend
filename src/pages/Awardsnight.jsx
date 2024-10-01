import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import img1 from "../assets/img/awards.png";

function Awardsnight() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
  
      <section className="">
        <Row className="m-0 p-0">

            <h2
            style={{
              fontWeight: "bold",
              paddingTop: "40px",
              paddingBottom: "40px",
              textAlign: "center",
            }}
          >
            Startup Fest Award Night 2023
          </h2>
          <Col lg={12} className="p-0">
            <div className="p-relative">
              <img
                src={img1}
                className="w-100"
                style={{ objectFit: "cover", height: "auto" }}
                alt="Responsive Image"
              />
            </div>
          </Col>

          <div style={{marginTop:70}}>

          </div>
        </Row>
      </section>
    </>
  )
}

export default Awardsnight