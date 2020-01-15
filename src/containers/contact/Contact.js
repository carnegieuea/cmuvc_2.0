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
import SnehitaImg from "../../assets/avatars/Snehita.jpg";
import EricImg from "../../assets/avatars/Eric.jpg";
import AvikaImg from "../../assets/avatars/Avika.jpg";

const Contact = () => {
  return (
    <Fragment>
      <Container className="py-5">
        <Row className="text-center">
          <Col className="pb-4">
            <h1 className="display-5 font-weight-bolder text-black">
              Contact Us.
              <a href="mailto:samarthgowda@cmu.edu,esliang@andrew.cmu.edu,ssana@andrew.cmu.edu,avikab@andrew.cmu.edu">
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
          <Card className="col-md-3 p-0 shadow">
            <img
              className="card-img-top shadow"
              src={SamarthImg}
              alt="Samarth"
            />
            <CardBody>
              <CardTitle>
                <h6>Samarth Gowda | Director</h6>
              </CardTitle>

              <a href="mailto:samarthgowda@cmu.edu">
                <Button color="warning" size="sm">
                  <IoMdMail /> Contact
                </Button>
              </a>
            </CardBody>
          </Card>
          <Card className="col-md-3 p-0 shadow">
            <img
              className="card-img-top shadow"
              src={SnehitaImg}
              alt="Snehita"
            />
            <CardBody>
              <CardTitle>
                <h6>Snehita Sana | Director</h6>
              </CardTitle>

              <a href="mailto:ssana@andrew.cmu.edu">
                <Button color="warning" size="sm">
                  <IoMdMail /> Contact
                </Button>
              </a>
            </CardBody>
          </Card>
          <Card className="col-md-3 p-0 shadow">
            <img className="card-img-top shadow" src={EricImg} alt="Eric" />
            <CardBody>
              <CardTitle>
                <h6>Eric Liang | Director</h6>
              </CardTitle>

              <a href="mailto:esliang@andrew.cmu.edu">
                <Button color="warning" size="sm">
                  <IoMdMail /> Contact
                </Button>
              </a>
            </CardBody>
          </Card>
          <Card className="col-md-3 p-0 shadow">
            <img className="card-img-top shadow" src={AvikaImg} alt="Avika" />
            <CardBody>
              <CardTitle>
                <h6>Avika Bansal | Director</h6>
              </CardTitle>

              <a href="mailto:avikab@andrew.cmu.edu">
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
