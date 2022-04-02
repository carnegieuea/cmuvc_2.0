import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";

const AlertMsg = ({ display }) => {
  return (
    <Alert
      color="primary"
      className={`${!display && "d-none"} mb-0 my-auto text-center`}
    >
      <span role="img" aria-label="unicorn-emoji">
        🦄
      </span>{" "}
      Watch Demo Day livestream -{" "}
      <Link to="https://www.youtube.com/watch?v=Jhx9OJPJWAc">Click here</Link>
    </Alert>
  );
};

export default AlertMsg;
