import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { IoMdMail } from "react-icons/io";
import SamarthImg from "../../assets/avatars/samarth.JPG";
import SebastianImg from "../../assets/avatars/sebastian.JPG";
import OscarImg from "../../assets/avatars/oscar.JPG";

const Contact = () => {
  return (
    <Fragment>
      <Container className="py-5">
        <Row className="text-center">
          <Col className="pb-4">
            <h1 className="display-5 font-weight-bolder text-black">
              Contact Us.
              <a href="mailto:sgowda@andrew.cmu.edu;yukaiy@andrew.cmu.edu;otk@andrew.cmu.edu">
                <Button color="dark" size="sm" className="mx-3">
                  <IoMdMail /> Contact All
                </Button>
              </a>
            </h1>

            <p className="lead">
              The best way to reach out to us for any questions is to contact us
              directly. Please feel free to reach out at any time regarding
              details, application questions, and sponsorship inquiries.
            </p>
          </Col>
        </Row>
        <CardDeck className="py-md-5">
          <Card className="col-md-4 p-0 shadow">
            <img
              className="card-img-top shadow"
              src={SamarthImg}
              alt="Samarth"
            />
            <CardBody>
              <CardTitle>
                <h6>Samarth Gowda | Director</h6>
              </CardTitle>

              <a href="mailto:sgowda@andrew.cmu.edu">
                <Button color="warning" size="sm">
                  <IoMdMail /> Contact
                </Button>
              </a>
            </CardBody>
          </Card>
          <Card className="col-md-4 p-0 shadow">
            <img
              className="card-img-top shadow"
              src={SebastianImg}
              alt="Sebastian"
            />
            <CardBody>
              <CardTitle>
                <h6>Sebastian Yang | Director</h6>
              </CardTitle>

              <a href="mailto:yukaiy@andrew.cmu.edu">
                <Button color="warning" size="sm">
                  <IoMdMail /> Contact
                </Button>
              </a>
            </CardBody>
          </Card>
          <Card className="col-md-4 p-0 shadow">
            <img className="card-img-top shadow" src={OscarImg} alt="Oscar" />
            <CardBody>
              <CardTitle>
                <h6>Oscar Kavanagh | Director</h6>
              </CardTitle>

              <a href="mailto:otk@andrew.cmu.edu">
                <Button color="warning" size="sm">
                  <IoMdMail /> Contact
                </Button>
              </a>
            </CardBody>
          </Card>
        </CardDeck>
      </Container>
    </Fragment>
  );
};

export default Contact;
