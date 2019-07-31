import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const Apply = () => {
  return (
    <Container className="py-md-5 py-2 text-center">
      <h5 className="pt-md-5 pb-md-3">
        Applications for the 2020 Carnegie Mellon Venture Challenge are
        currently not open. Applications will open in the fall of 2019. If you
        would like to learn more, please visit our competition details page or
        contact us.
      </h5>
      <Button
        tag={Link}
        to="/details"
        color="warning"
        size="sm"
        className="mx-1"
      >
        Details
      </Button>
      <Button tag={Link} to="/contact" color="dark" size="sm" className="mx-1">
        Contact
      </Button>
    </Container>
  );
};

export default Apply;
