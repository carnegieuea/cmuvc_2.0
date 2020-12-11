import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div className="bg-dark py-md-5">
      <Container className="py-md-5 py-3 text-white">
        <Row className="py-2">
          <Col md="8">
            <h1 className="font-weight-bold pb-md-3">Apply to CMU VC</h1>
            <p className="lead font-weight-normal">
              CMU VC offers teams a chance at unlocking more of your potential,
              enabling innovators to truly push their creations to the limit.
            </p>
          </Col>
        </Row>
        <Row className="py-md-2 py-1">
          <Col md="4">
            <h6 className="font-weight-bold">TOTAL CASH PRIZE</h6>
            <h5 className="font-weight-bold text-warning">$12,500</h5>
          </Col>
          <Col md="4">
            <h6 className="font-weight-bold">TOTAL OTHER PRIZES</h6>
            <h5 className="font-weight-bold text-warning mb-0">$70,000 +</h5>
            <small className="pt-0">
              Sponsored by Meyer Unkovic Scott and Freshworks
            </small>
          </Col>

          <Col md="4" className="text-center">
            <Button
              color="light"
              tag={Link}
              to="/apply"
              size="lg"
              className="px-4 my-md-0 my-4"
              style={{ borderRadius: "25px" }}
            >
              Apply
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Apply;
