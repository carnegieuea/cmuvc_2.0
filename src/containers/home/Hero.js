import React from "react";
import HeroImage from "../../assets/hero.png";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Button } from "reactstrap";
import styled from "styled-components";

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
            <HeroH1 className="py-md-4">
              Carnegie Mellon Venture Challenge
            </HeroH1>
            <h4>
              Annual international startup competition to win seed funding,
              legal services, and mentorship.
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
              <h4>First round applications will open shortly</h4>
              {/* Date */}
              <h4>Demo Day on April 3, 2021</h4>
            </div>
          </Container>
        </TransparentBg>
      </Jumbotron>
    </div>
  );
}
