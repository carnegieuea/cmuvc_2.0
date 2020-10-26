import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container className="py-md-5 py-3">
      <Row className="py-md-5 py-2">
        <Col lg="8">
          <h1 className="font-weight-bold pb-md-3">
            We believe in great ideas
          </h1>
          <p className="lead font-weight-normal">
            Student teams that compete at CMU VC are truly offered a unique
            value proposition - exposure, funding, and feedback. Early stage
            companies require significant prototyping funds before a working
            product can materialize. In order to help teams grow from the
            experience, the CMU VC aims to objectively reward innovative teams
            with capital, services, and constructive feedback from experts in a
            variety of technical and legal domains.
          </p>
        </Col>
      </Row>
      <Row className="py-md-2 py-1">
        <Col md="5">
          <h6 className="font-weight-bold">WHERE</h6>
          <h5 className="font-weight-bold text-danger">Virtual Demo Day</h5>
        </Col>
        <Col md="4">
          {" "}
          <h6 className="font-weight-bold">WHEN</h6>
          <h5 className="font-weight-bold text-danger">April 3, 2021</h5>
        </Col>
        <Col md="3" className="text-center">
          <Button
            color="danger"
            outline
            tag={Link}
            to="/details"
            size="lg"
            style={{ borderRadius: "25px" }}
            className="px-4"
          >
            Learn More
          </Button>
        </Col>
      </Row>
      <Row className="py-md-5 py-2">
        <Col className="py-md-5">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              "StrattyX is very, very early-staged, and CMUVC was the perfect
              launchpad for us to learn from others in the space and get
              extremely insightful feedback from the judges. I met other
              undergraduate leaders in the startup space, and learned so much by
              watching others pitch. And having received first place, my startup
              can now purchase tools to build our next MVP and receive legal
              support."
            </p>
            <footer className="blockquote-footer pt-4">
              Kristen Fang @ StrattyX (YC W20) - 1st Place CMU VC 2019
            </footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
