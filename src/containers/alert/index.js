import React from "react";
import { Alert } from "reactstrap";

const AlertMsg = ({ display }) => {
  return (
    <Alert
      color="primary"
      className={`${!display && "d-none"} mb-0 my-auto text-center`}
    >
      Finalists Will be Announced on Tuesday, March 29.
    </Alert>
  );
};

export default AlertMsg;
