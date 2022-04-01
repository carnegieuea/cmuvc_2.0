import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { IoMdMail } from "react-icons/io";
import AvikaImg from "../../assets/avatars/Avika.jpg";
import AngelaImg from "../../assets/avatars/angela.jpg";
import ArleenImg from "../../assets/avatars/Arleen.jpg";

const people = [
  // {
  //   name: "Snehita Sana",
  //   email: "ssana@andrew.cmu.edu",
  //   avatar: SnehitaImg,
  //   role: "Lead Director",
  // },
  {
    name: "Avika Bansal",
    email: "avikab@andrew.cmu.edu",
    avatar: AvikaImg,
    role: "Director",
  },
  {
    name: "Angela Sun",
    email: "angelasu@andrew.cmu.edu",
    avatar: AngelaImg,
    role: "Director",
  },
  {
    name: "Arleen Liu",
    email: "arleenl@andrew.cmu.edu",
    avatar: ArleenImg,
    role: "Director",
  },
  // {
  //   name: "Samarth Gowda",
  //   email: "sgowda@andrew.cmu.edu",
  //   avatar: SamarthImg,
  //   role: "President UEA",
  // },
  // {
  //   name: "Eric Liang",
  //   email: "esliang@andrew.cmu.edu",
  //   avatar: EricImg,
  //   role: "Executive Board UEA",
  // },
];

const Contact = () => {
  return (
    <Fragment>
      <Container className="py-5">
        <Row className="text-center">
          <Col className="pb-4">
            <h1 className="display-5 font-weight-bolder text-black">
              Contact Us.
            </h1>

            <p className="lead">
              The best way to reach out to us for any questions is to contact us
              directly. Please feel free to reach out at any time regarding
              details, application questions, and sponsorship inquiries.
            </p>
          </Col>
        </Row>
        <Row>
          {people &&
            people.map((p, index) => {
              return (
                <Col sm="12" md="6" lg="4" key={index}>
                  <Card className="p-0 mb-4 shadow">
                    <img
                      className="card-img-top shadow"
                      src={p.avatar}
                      alt={p.name}
                    />
                    <CardBody>
                      <CardTitle>
                        <h6>
                          {p.name} | {p.role}
                        </h6>
                      </CardTitle>

                      <a href={`mailto:${p.email}`}>
                        <Button color="warning" size="sm">
                          <IoMdMail /> Contact
                        </Button>
                      </a>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Contact;
