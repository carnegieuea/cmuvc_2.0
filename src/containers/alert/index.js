import React from "react";
import { Alert } from "reactstrap";

const AlertMsg = ({display}) => {
  return (
    <Alert color="primary" className={`${!display && "d-none"} mb-0 my-auto text-center`}>
      CMU Venture Challenge will be moving completely virtual for 2020-2021. Applications will open shortly.
    </Alert>
  );
};

export default AlertMsg;
