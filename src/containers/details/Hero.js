import React from "react";
import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <div className="bg-dark py-md-5 shadow">
      <Container className="py-md-5 py-3 text-white">
        <Row className="py-2 text-center">
          <Col>
            <h1 className="font-weight-bold display-4 pb-md-3">
              Get the most out of CMU VC
            </h1>
            <p className="lead font-weight-normal px-md-5">
              Join us for the annual gathering of student entrepreneurs. CMU VC
              brings together a strong network of resources, including
              mentorship from serial entrepreneurs, venture capitalists,
              attorneys, and business leaders. Don't miss out on this awesome
              event.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
