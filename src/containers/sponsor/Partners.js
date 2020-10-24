import React, { Fragment } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SEQUOIA from "../../assets/partners/sequoia.jpeg";
import GGV from "../../assets/partners/ggv.png";
import MUSLAW from "../../assets/partners/muslaw.jpeg";
import ACCEL from "../../assets/partners/accel.png";
import GENERALCATALYST from "../../assets/partners/generalcatalyst.jpg";
import ACG from "../../assets/partners/acg.png";
import DRAPER from "../../assets/partners/draper-triangle.jpg";
import ALPHALAB from "../../assets/partners/alpha_lab.png";
import BLUETREE from "../../assets/partners/blue_tree1.png";
import INNOSPRING from "../../assets/partners/innospring.jpg";
import INNOVATIONWORKS from "../../assets/partners/innovation_works.png";
import SWARTZ from "../../assets/partners/swartz.png";
import DUOLINGO from "../../assets/partners/duolingo.png";
import GROUSERIDGE from "../../assets/partners/grouseridge.jpg";
import CONTRARY from "../../assets/partners/contrary.png";
import SCS from "../../assets/partners/scs1.png";
import PVCA from "../../assets/partners/pvca.jpg";
import DIETRICH from "../../assets/partners/dietrich.png";
import SENATE from "../../assets/partners/senate.jpg";
import CAMPUSVC from "../../assets/partners/campusvc.png";
import SDC from "../../assets/partners/sdc.png";
import DRF from "../../assets/partners/drf.png";
import RDV from "../../assets/partners/rdv.png";
import TEPPER from "../../assets/partners/tepper_logo.png";
import HEROKU from "../../assets/partners/heroku.png";
import CHOOLAAH from "../../assets/partners/choolaah.jpg";
import AIKENHOUSE from "../../assets/partners/AikenHouse_black.png";
import SALESFORCE from "../../assets/partners/salesforce.png";

const PartnersImg = styled.img`
  max-width: 65%;
  max-height: auto;
`;

const SponsorsWrapper = styled.div`
  text-align: center;
`;
const MainPartners = () => {
  return (
    <Fragment>
      <Row className="d-flex flex-row justify-content-around align-items-center py-2">
        <Col md="3">
          <PartnersImg src={SWARTZ} alt="Swartz" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg src={TEPPER} alt="Tepper" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg src={MUSLAW} alt="MUS Law" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg src={ACG} alt="ACG" className="img-fluid" />
        </Col>
      </Row>

      <Row className="d-flex flex-row justify-content-around align-items-center py-2">
        <Col md="3">
          <PartnersImg src={HEROKU} alt="HEROKU" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg
            src={SALESFORCE}
            alt="SALESFORCE"
            className="img-fluid"
          />
        </Col>
        <Col md="3">
          <PartnersImg
            src={AIKENHOUSE}
            alt="AIKEN HOUSE"
            className="img-fluid"
          />
        </Col>
        <Col md="3">
          <PartnersImg src={CHOOLAAH} alt="CHOOLAAH" className="img-fluid" />
        </Col>
      </Row>
    </Fragment>
  );
};

const OtherPartners = () => {
  return (
    <Fragment>
      <Row className="d-flex flex-row justify-content-around align-items-center py-2">
        <Col md="3">
          <PartnersImg src={SEQUOIA} alt="SEQUOIA" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg src={DUOLINGO} alt="DUOLINGO" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg
            src={DRAPER}
            alt="Draper Triangle"
            className="img-fluid"
          />
        </Col>
        <Col md="3">
          <PartnersImg src={PVCA} alt="PVCA" className="img-fluid" />
        </Col>
      </Row>
      <Row className="d-flex flex-row justify-content-around align-items-center py-2">
        <Col md="3">
          <PartnersImg
            src={CONTRARY}
            alt="Contrary Capital"
            className="img-fluid"
          />
        </Col>
        <Col md="3">
          <PartnersImg src={GGV} alt="GGV" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg src={ACCEL} alt="Accel" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg
            src={GENERALCATALYST}
            alt="General Catalyst"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="d-flex flex-row justify-content-around align-items-center py-2">
        <Col md="3">
          <PartnersImg src={ALPHALAB} alt="Alpha Lab" className="img-fluid" />
        </Col>

        <Col md="3">
          <PartnersImg src={BLUETREE} alt="Blue Tree" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg
            src={INNOSPRING}
            alt="Innospring"
            className="img-fluid"
          />
        </Col>
        <Col md="3">
          <PartnersImg
            src={INNOVATIONWORKS}
            alt="Innovation Works"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="d-flex flex-row justify-content-around align-items-center py-2">
        <Col md="3">
          <PartnersImg
            src={GROUSERIDGE}
            alt="Grouseridge"
            className="img-fluid"
          />
        </Col>
        <Col md="3">
          <PartnersImg
            src={SCS}
            alt="School of Computer Science"
            className="img-fluid"
          />
        </Col>
        <Col md="3">
          <PartnersImg src={DIETRICH} alt="Dietrich" className="img-fluid" />
        </Col>
        <Col className="col-md-3 ">
          <PartnersImg src={SENATE} alt="CMU Senate" className="img-fluid" />
        </Col>
      </Row>

      <Row className="d-flex flex-row justify-content-around align-items-center py-2">
        <Col md="3">
          <PartnersImg src={CAMPUSVC} alt="Campus VC" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg
            src={SDC}
            alt="Student Dormitory Council"
            className="img-fluid"
          />
        </Col>
        <Col md="3">
          <PartnersImg src={DRF} alt="Dorm Room Fund" className="img-fluid" />
        </Col>
        <Col md="3">
          <PartnersImg
            src={RDV}
            alt="Rough Draft Ventures"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Fragment>
  );
};

const Partners = ({ learnMore, displayAll }) => {
  return (
    <Container className="py-md-5 py-3">
      <Row className="py-md-5">
        <Col className="pb-4" lg="8">
          <h1 className="font-weight-bolder">Our sponsors.</h1>
          <p className={`lead font-weight-normal${learnMore ? `` : ` d-none`}`}>
            Want to help launch the generation of innovators?{" "}
            <Link to="/contact" className="text-decoration-none text-muted">
              Contact us
            </Link>{" "}
            for information about sponsoring, judging, and speaking at the CMU
            VC 2021.
          </p>

          <Button
            tag={Link}
            to="/sponsor"
            style={{ borderRadius: "25px" }}
            className={`px-4 shadow${learnMore ? `` : ` d-none`}`}
            color="warning"
          >
            Learn More{" "}
          </Button>
        </Col>
      </Row>
      <SponsorsWrapper>
        <MainPartners />
        {displayAll ? <OtherPartners /> : null}
      </SponsorsWrapper>
    </Container>
  );
};

export default Partners;
