import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  CardDeck,
  Card,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle, IoIosCalendar } from "react-icons/io";

const Details = () => {
  return (
    <Fragment>
      <Container className="py-md-5 py-3">
        <Row className="py-md-3">
          <Col className="pb-4" lg="8">
            <h3 className="font-weight-bolder">
              Competition Details
              <Button
                tag={Link}
                to="/contact"
                style={{ borderRadius: "25px" }}
                className={`mx-3 px-4 shadow`}
                color="warning"
              >
                Contact
              </Button>
            </h3>
            <p className="lead font-weight-normal">
              All Dates, Prizes, Requirements, and other details for the CMU VC
              are subject to change. Please check back at this page for the
              latest information.
            </p>
          </Col>
        </Row>
        <Row className="py-3 text-dark">
          <Col>
            <CardDeck>
              <Card className="border-0 bg-light shadow">
                <CardBody>
                  <h5 className="font-weight-bold">Timeline</h5>

                  <p>
                    <IoIosCalendar /> January 15, 2020 - Applications Open
                  </p>
                  <p>
                    <IoIosCalendar /> March 1, 2020 - Application Deadline
                  </p>
                  <p>
                    <IoIosCalendar /> March 15, 2020 - Finalists Announced
                  </p>
                  <p>
                    <IoIosCalendar /> April 4, 2020 - Competition Finals at
                    Carnegie Mellon University
                  </p>
                </CardBody>
              </Card>
              <Card className="border-0 bg-light shadow">
                <CardBody>
                  <h5 className="font-weight-bold">Application Deliverables</h5>
                  <p>
                    {" "}
                    <IoIosCheckmarkCircle /> Preliminary Slide Deck (10 Slides
                    Max)
                  </p>
                  <p>
                    {" "}
                    <IoIosCheckmarkCircle /> Executive Summary (1 Page)
                  </p>
                  <p>
                    {" "}
                    <IoIosCheckmarkCircle /> Basic Company Information
                  </p>
                  <p>
                    <IoIosCheckmarkCircle /> 90 Second Video Pitch
                  </p>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row className="py-3 text-dark">
          <Col>
            <CardDeck>
              <Card className="border-0 bg-light shadow">
                <CardBody>
                  <h5 className="font-weight-bold">Final Round</h5>

                  <p>
                    <IoIosCheckmarkCircle /> 7 Minute Startup Pitch
                  </p>
                  <p>
                    {" "}
                    <IoIosCheckmarkCircle /> 5 Minute Q&A
                  </p>
                  <p>
                    {" "}
                    <IoIosCheckmarkCircle /> Unlimited Slides for Startup Pitch
                  </p>
                  <p>
                    {" "}
                    <IoIosCheckmarkCircle /> Name, Email, School, Year, Major of
                    Participants Pitching
                  </p>
                  <p>
                    {" "}
                    <IoIosCheckmarkCircle /> Short description of startup (1-2
                    sentences)
                  </p>
                </CardBody>
              </Card>
              <Card className="border-0 bg-light shadow">
                <CardBody>
                  <h5 className="font-weight-bold">Eligibility</h5>

                  <p>
                    <IoIosCheckmarkCircle /> Submissions should be submitted by
                    an individual or a team of up to five members.
                  </p>
                  <p>
                    <IoIosCheckmarkCircle /> The student entrepreneurs pitching
                    their startup at the CMU VC MUST be undergraduate students.
                    Teams are allowed to have non-undergraduates, but the main
                    founders must be undergraduates. Teams with member(s) taking
                    a leave of absence are still eligible to participate.
                  </p>
                  <p>
                    <IoIosCheckmarkCircle /> Teams must not have raised more
                    than $1M USD in funding from institutional investors,
                    angels, or competitions.
                  </p>
                  <p>
                    <IoIosCheckmarkCircle /> Participants are NOT required to be
                    Carnegie Mellon students. The CMU VC is open to any and all
                    undergraduate students.
                  </p>
                  <p>
                    <IoIosCheckmarkCircle /> Submissions should be the
                    individual's or team's original work.
                  </p>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row className="py-md-5 py-3">
          <Col md="12" className="py-md-5 py-3">
            <h3 className="font-weight-bolder mb-0">Prizes</h3>
            <small className="pt-0">
              Legal Services Sponsored by Meyer Unkovic Scott
            </small>
          </Col>
          <Col md="4" className="my-md-0 my-3">
            <h6 className="font-weight-bold">FIRST PLACE</h6>
            <h5 className="font-weight-bold text-danger">$6,000 CASH PRIZE</h5>
            <h5 className="font-weight-bold text-dark mb-0">
              $2,500 LEGAL SERVICES
            </h5>
            <h5 className="font-weight-bold text-dark mb-0">
              5000 HEROKU CREDITS
            </h5>
          </Col>
          <Col md="4" className="my-md-0 my-3">
            <h6 className="font-weight-bold">SECOND PLACE</h6>
            <h5 className="font-weight-bold text-danger">$4,000 CASH PRIZE</h5>
            <h5 className="font-weight-bold text-dark mb-0">
              $1,500 LEGAL SERVICES
            </h5>
          </Col>
          <Col md="4" className="my-md-0 my-3">
            <h6 className="font-weight-bold">THIRD PLACE</h6>
            <h5 className="font-weight-bold text-danger">$2,500 CASH PRIZE</h5>
            <h5 className="font-weight-bold text-dark mb-0">
              $1,000 LEGAL SERVICES
            </h5>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Details;
