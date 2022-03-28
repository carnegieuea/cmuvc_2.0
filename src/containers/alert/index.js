import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";

const AlertMsg = ({ display }) => {
  return (
    <Alert
      color="primary"
      className={`${!display && "d-none"} mb-0 my-auto text-center`}
    >
      Finalists Will be Announced on Tuesday, March 29.
      {/* CMU Venture Challenge Demo Day will start on April 3 @ 12pm EST.{" "}
      <Link to="/demo-day">Watch Demo Day</Link> */}
    </Alert>
  );
};

export default AlertMsg;
