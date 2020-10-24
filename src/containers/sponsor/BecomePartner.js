import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  CardDeck,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

const BecomePartner = () => {
  return (
    <Fragment>
      <div className="bg-dark">
        <Container className="text-light py-md-5 py-3">
          <Row className="py-md-3">
            <Col className="pb-4" lg="8">
              <h3 className="font-weight-bolder">Become a partner.</h3>
              <p className="lead font-weight-normal">
                Want to help launch the generation of innovators?{" "}
                <Link to="/contact" className="text-decoration-none text-light">
                  Contact us
                </Link>{" "}
                for information about sponsoring, judging, and speaking at our
                Spring 2021 event.
              </p>

              <Button
                tag={Link}
                to="/contact"
                style={{ borderRadius: "25px" }}
                className={`px-4 shadow`}
                color="warning"
              >
                Contact
              </Button>
            </Col>
          </Row>
          <Row className="py-3 text-dark">
            <CardDeck>
              <Card>
                <CardBody>
                  <h5 className="font-weight-bold">Sponsor</h5>
                  <p>
                    Sponsor one of the top prizes or join the total CMU VC fund
                    awarded to the top startups in our competition.
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <h5 className="font-weight-bold">Judge</h5>
                  <p>
                    Be a vital part of the judging panel for the startup pitches
                    providing feedback and asking crucial questions.
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <h5 className="font-weight-bold">Speak</h5>
                  <p>
                    Join our startup panel or join us as a keynote speaker
                    inspring young entrepreneurs from around the nation.
                  </p>
                </CardBody>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default BecomePartner;
