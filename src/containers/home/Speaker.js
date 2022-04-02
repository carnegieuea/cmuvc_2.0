import React from "react";
import { Container, Row, Col } from "reactstrap";
import timzheng from "../../assets/avatars/timzheng.jpeg";

const Speaker = () => {
  return (
    <div className="bg-dark text-white">
      <Container className="py-md-5 py-3">
        <Row className="py-md-5 py-2">
          <Col lg="7">
            <p className="lead text-uppercase">2022 Keynote Speaker</p>
            <h1 className="font-weight-bold">Tim Zheng</h1>
            <p className="lead text-uppercase">CEO and Co-founder of Apollo</p>
            <p className="font-weight-normal">
              Tim Zheng is the CEO and Co-Founder of Apollo.io. Apollo, a
              YCombinator alumni, recently announced a Series C led by Sequoia
              Capital of $110 million, bringing their total funding to over $150
              million. Before launching Apollo in 2015, the Massachusetts-born
              entrepreneur founded, built and sold e-learning platform
              BrainGenie. Zheng graduated from MIT in 2011, where he studied
              Math and CS.
            </p>
          </Col>
          <Col lg="5">
            <img
              src={timzheng}
              alt="tim-zheng-apollo"
              className="rounded-circle d-block w-75 mx-auto"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Speaker;
