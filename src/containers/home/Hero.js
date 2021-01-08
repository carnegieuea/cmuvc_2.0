import React from "react";
import HeroImage from "../../assets/hero.png";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Button } from "reactstrap";
import styled from "styled-components";

import Accel from "../../assets/partners/accel-white.svg";

const HeroH1 = styled.h1`
  font-size: 2rem;
  line-height: 1;
  font-weight: 800;
  text-transform: uppercase;
  @media only screen and (min-width: 600px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 5rem;
  }
`;

const TransparentBg = styled.div`
  background-image: linear-gradient(
    200deg,
    rgba(0, 117, 207, 0.9),
    rgba(128, 1, 5, 0.9)
  );
  padding: 2rem 0 2rem 0;
  @media only screen and (min-width: 768px) {
    padding: 15rem 0 15rem 0;
  }
`;

export default function Hero() {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        fluid
        className="text-center py-0 my-0"
      >
        <TransparentBg>
          <Container className="text-white">
            <div className="py-md-4">
              <HeroH1>Carnegie Mellon Venture Challenge</HeroH1>
              <h2 className="text-uppercase font-weight-bold">Powered by</h2>
              <img
                src={Accel}
                alt="Accel-Gold-Sponsor"
                style={{ height: "85px", width: "auto" }}
              />
            </div>
            <h4>
              Annual international startup competition to win seed funding,
              legal services, and mentorship. Compete for over $100K in total
              prizes.
            </h4>
            <div className="py-3">
              <Button tag={Link} to="/details" className="mx-2" color="light">
                Competition Details
              </Button>
              <Button tag={Link} to="/apply" className="mx-2" color="warning">
                Apply Now
              </Button>
            </div>

            <div className="text-light mt-3">
              <h4>First Round Applications are Open!</h4>
              <h4>Round 1 Closes on February 26, 2021 @ 11:59pm EST</h4>
              <h4>Demo Day on April 3, 2021</h4>
            </div>
          </Container>
        </TransparentBg>
      </Jumbotron>
    </div>
  );
}
