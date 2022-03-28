import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const Apply = () => {
  return (
    <Container className="py-5 text-center">
      <h5 className="pt-md-5 pb-md-3">
        Applications for the Carnegie Mellon Venture Challenge have closed. <br></br>
        {/* Applications will close{" "}
        <strong>Monday, March 14, 2022 at 11:59pm EST</strong>. Applications will
        take place on the Pralent platform. Click on the Begin Application
        button below to get started.  */} 
        If you would like to learn more or have any
        other questions, please visit our{" "}
        <Link to="/details">competition details</Link> page or{" "}
        <Link to="/contact">contact us</Link>.
      </h5>

      {/* <Button
        tag="a"
        href="https://www.pralent.com/c/cmuuea/programs/cmuvc-2022"
        color="warning"
        size="lg"
        className="mx-1"
        target="_blank"
        rel="noreferrer noopener"
      >
        Begin Application
      </Button> */}
    </Container>
  );
};

export default Apply;
