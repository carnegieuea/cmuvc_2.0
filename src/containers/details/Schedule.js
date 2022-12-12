import React from "react";
import { Container, Row, Col } from "reactstrap";

const Schedule = () => {
  return (
    <div className="bg-light py-md-5">
      <Container className="py-md-5 py-3">
        <Row>
          <Col md="8">
            <h1 className="font-weight-bold pb-md-3">2022 Schedule</h1>
            <p className="lead font-weight-normal">
              The CMU Venture Challenge provides a meaningful experience for all
              attendees. Whether you are pitching your startup, a current
              student, a recent grad, or well into your career, the CMU VC
              offers a fun filled day with awesome speakers, an experienced
              panel, engaging startup pitches, a networking session, and great
              food!{" "}
              <span role="img" aria-label="Food">
                🍽️
              </span>
            </p>
          </Col>
          <Col md="4" className="py-md-0 py-5">
            <h6 className="font-weight-bold">2022 SCHEDULE OF EVENTS (EST)</h6>
            <ul className="list-unstyled font-weight-bold text-info">
              <li className="py-1">12pm : Introductions + Keynote</li>
              <li className="py-1">12:30pm : Startup Pitches (Part I)</li>
              <li className="py-1">2:00pm : Lunch Break</li>
              <li className="py-1">2:30pm : Startup Pitches (Part II)</li>
              <li className="py-1">
                4:00pm : Networking Session and Judges Deliberation
              </li>
              <li className="py-1">4:30pm : Awards</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Schedule;
