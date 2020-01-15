import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const Apply = () => {
  return (
    <Container className="py-5 text-center">
      <h5 className="pt-md-5 pb-md-3">
        Applications for the 2020 Carnegie Mellon Venture Challenge are
        currently open! Applications will close{" "}
        <strong>March 1, 2020 at 11:59pm</strong>. If you would like to learn
        more or have any other questions, please visit our competition details
        page or contact us.
      </h5>
      <Button
        tag="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeXdz8enFctwy-X19oukQ6bf1L--08he__swcwdXrXw8YZT8A/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-1"
        color="primary"
        size="lg"
      >
        Apply Now!
      </Button>

      <Button tag={Link} to="/contact" color="dark" size="lg" className="mx-1">
        Contact
      </Button>
    </Container>
  );
};

export default Apply;
