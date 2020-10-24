import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const Apply = () => {
  return (
    <Container className="py-5 text-center">
      <h5 className="pt-md-5 pb-md-3">
        Applications for the Carnegie Mellon Venture Challenge 2021 will open
        shortly! Applications will close{" "}
        <strong>March 1, 2021 at 11:59pm EST</strong>. If you would like to
        learn more or have any other questions, please visit our competition
        details page or contact us.
      </h5>

      <Button tag={Link} to="/contact" color="dark" size="lg" className="mx-1">
        Contact
      </Button>
    </Container>
  );
};

export default Apply;
