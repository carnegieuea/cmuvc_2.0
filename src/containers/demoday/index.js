import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const DemoDay = () => {
  return (
    <>
      <Container className="py-5 text-center">
        <Row className="text-center">
          <Col className="pb-4">
            <h1 className="display-5 font-weight-bolder text-black">
              Demo Day 2022
            </h1>
          </Col>
        </Row>
      </Container>
      <div className="pb-4 text-center">
        <iframe
          title="cmuvc-demo-day"
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=Jhx9OJPJWAc"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="text-center pb-4">
        <Button
          tag="a"
          href="https://www.youtube.com/watch?v=Jhx9OJPJWAc"
          color="warning"
          size="md"
          className="mx-1"
          target="_blank"
          rel="noreferrer noopener"
        >
          View Demo Day
        </Button>
      </div>
      <div>
        <Container className="pt-4 text-center">
          <h6 className="font-weight-bold">SCHEDULE OF EVENTS (EST)</h6>
          <ul className="list-unstyled font-weight-bold text-info">
            <li className="py-1">
              12pm : Introductions + Keynote with Tim Zheng
            </li>
            <li className="py-1">12:30pm : Startup Pitches (Part I)</li>
            <li className="py-1">2:00pm : Lunch Break</li>
            <li className="py-1">2:30pm : Startup Pitches (Part II)</li>
            <li className="py-1">
              4:00pm : Networking Session and Judges Deliberation
            </li>
            <li className="py-1">4:30pm : Awards</li>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default DemoDay;
