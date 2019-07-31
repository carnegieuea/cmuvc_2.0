import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div className="bg-dark py-md-5">
      <Container className="py-md-5 py-3 text-white text-center">
        <Row className="py-2 px-md-5">
          <Col>
            <h1 className="font-weight-bold pb-md-3">
              Apply to CMU Venture Challenge
            </h1>
            <p className="lead font-weight-normal">
              CMU VC offers teams a chance at unlocking more of your potential,
              enabling innovators to truly push their creations to the limit.
            </p>{" "}
            <Button
              color="warning"
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
