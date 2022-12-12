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
import TWOSIGMA from "../../assets/partners/two-sigma-ventures.png";
import FRESHWORKS from "../../assets/partners/freshworks-logo.png";

const PartnersImg = styled.img`
  max-width: 65%;
  max-height: auto;
`;

const SponsorsWrapper = styled.div`
  text-align: center;
`;

const MAIN_PARTNERS = [
  {
    src: SWARTZ,
    alt: "SWARTZ"
  },
  {
    src: TEPPER,
    alt: "TEPPER"
  },
  {
    src: ACCEL,
    alt: "ACCEL"
  },
  {
    src: MUSLAW,
    alt: "MUSLAW"
  },
  {
    src: ACG,
    alt: "ACG"
  },
  {
    src: PVCA,
    alt: "PVCA"
  },
  {
    src: AIKENHOUSE,
    alt: "AIKENHOUSE"
  },
  {
    src: TWOSIGMA,
    alt: "TWOSIGMA"
  },
  {
    src: FRESHWORKS,
    alt: "FRESHWORKS"
  },
  {
    src: CHOOLAAH,
    alt: "CHOOLAAH"
  },
  {
    src: HEROKU,
    alt: "HEROKU"
  },
  {
    src: SCS,
    alt: "SCS"
  }
];

const OTHER_PARTNERS = [
  {
    src: SEQUOIA,
    alt: "SEQUOIA"
  },
  {
    src: DUOLINGO,
    alt: "DUOLINGO"
  },

  {
    src: DRAPER,
    alt: "DRAPER"
  },

  {
    src: CONTRARY,
    alt: "CONTRARY"
  },
  {
    src: GGV,
    alt: "GGV"
  },

  {
    src: SALESFORCE,
    alt: "SALESFORCE"
  },
  {
    src: GENERALCATALYST,
    alt: "GENERALCATALYST"
  },
  {
    src: ALPHALAB,
    alt: "ALPHALAB"
  },
  {
    src: BLUETREE,
    alt: "BLUETREE"
  },
  {
    src: INNOSPRING,
    alt: "INNOSPRING"
  },
  {
    src: INNOVATIONWORKS,
    alt: "INNOVATIONWORKS"
  },
  {
    src: GROUSERIDGE,
    alt: "GROUSERIDGE"
  },
  {
    src: DIETRICH,
    alt: "DIETRICH"
  },
  {
    src: SENATE,
    alt: "SENATE"
  },
  {
    src: CAMPUSVC,
    alt: "CAMPUSVC"
  },
  {
    src: SDC,
    alt: "SDC"
  },
  {
    src: DRF,
    alt: "DRF"
  },
  {
    src: RDV,
    alt: "RDV"
  }
];

const DisplayPartners = ({ partners: PARTNERS }) => {
  return (
    <Fragment>
      <Row className="d-flex flex-row justify-content-around align-items-center py-2">
        {PARTNERS &&
          PARTNERS.map((partner, index) => {
            return (
              <Col md="3" key={index}>
                <PartnersImg
                  src={partner.src}
                  alt={partner.alt}
                  className="img-fluid"
                />
              </Col>
            );
          })}
      </Row>
    </Fragment>
  );
};

const Partners = ({ learnMore, displayAll }) => {
  return (
    <Container className="py-md-5 py-3">
      <Row className="py-md-5">
        <Col className="pb-4" lg="8">
          <h1 className="font-weight-bolder">Our past sponsors.</h1>
          <p className={`lead font-weight-normal${learnMore ? `` : ` d-none`}`}>
            Want to help launch the generation of innovators?{" "}
            <Link to="/contact" className="text-decoration-none text-muted">
              Contact us
            </Link>{" "}
            for information about sponsoring, judging, and speaking at the CMU
            VC 2023.
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
        <DisplayPartners partners={MAIN_PARTNERS} />
        {displayAll ? <DisplayPartners partners={OTHER_PARTNERS} /> : null}
      </SponsorsWrapper>
    </Container>
  );
};

export default Partners;
