import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="bg-light py-md-5">
      <Container className="py-md-5 py-3">
        <Row className="py-md-5 py-2">
          <Col md="8">
            <h1 className="font-weight-bold pb-md-3">Explore CMU VC</h1>
            <p className="lead font-weight-normal">
              For each of the finalists, the CMU VC brings together a strong
              network of resources, including mentorship from serial
              entrepreneurs, venture capitalists, attorneys, and the opportunity
              to present and pitch to a panel of judges and the city of
              Pittsburgh.
            </p>
            <Button
              style={{ borderRadius: "25px" }}
              tag={Link}
              to="/details"
              outline
              color="dark"
              className="my-md-3 px-4"
            >
              Learn More
            </Button>
          </Col>
          <Col md="4" className="py-md-0 py-5">
            <h6 className="font-weight-bold">SCHEDULE OF EVENTS</h6>
            <ul className="list-unstyled font-weight-bold text-info">
              <li className="py-1">Introductions</li>
              <li className="py-1">Startup Pitches</li>
              <li className="py-1">Lunch with Choolaah Indian BBQ</li>
              <li className="py-1">Keynote Speaker</li>
              <li className="py-1">Elevator Pitches</li>
              <li className="py-1">Startup Panel</li>
              <li className="py-1">Networking Session + Judges Deliberation</li>
              <li className="py-1">Awards</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Explore;
