import React from "react";
import { Container, Row, Col } from "reactstrap";

const Schedule = () => {
  return (
    <div className="bg-light py-md-5">
      <Container className="py-md-5 py-3">
        <Row>
          <Col md="8">
            <h1 className="font-weight-bold pb-md-3">Schedule</h1>
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
            <h6 className="font-weight-bold">SCHEDULE OF EVENTS (Tentative)</h6>
            <ul className="list-unstyled font-weight-bold text-info">
              <li className="py-1">12pm : Introductions + Keynote Speaker</li>
              <li className="py-1">12:30pm : Lunch with Choolaah Indian BBQ</li>
              <li className="py-1">1:15pm : Startup Pitches</li>
              <li className="py-1">
                2:30pm : MUS Law - Startup Legalities 101
              </li>
              <li className="py-1">3pm : Startup Pitches</li>
              <li className="py-1">4:45pm : Entrepreneurs Panel</li>
              <li className="py-1">4:45pm: Judges Deliberation</li>
              <li className="py-1">5:15pm : Awards</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Schedule;
