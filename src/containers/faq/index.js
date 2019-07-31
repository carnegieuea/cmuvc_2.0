import React from "react";
import { Container, Row, Col } from "reactstrap";
import questions from "./questions.json";

const index = () => {
  console.log(questions);
  return (
    <Container className="py-md-5 py-3">
      <Row>
        <Col>
          <h1 className="font-weight-bold">FAQ</h1>
          <p className="font-weight-normal lead">
            Answers to all your questions regarding the CMU VC.
          </p>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          {questions.length > 0
            ? questions.map(q => (
                <div className="py-3">
                  <h4 className="font-weight-bold">{q.question}</h4>
                  <p>{q.answer}</p>
                </div>
              ))
            : null}
        </Col>
      </Row>
    </Container>
  );
};

export default index;
