import React from "react";
import { Alert, Button } from "reactstrap";

const AlertMsg = () => {
  return (
    <Alert color="primary" className="mb-0 my-auto text-center">
      CMU Venture Challenge 2020 will be moving online. The YouTube Live starts
      at 12:30pm EST.{" "}
      <Button
        color="primary"
        size="sm"
        href="https://youtu.be/T3liabwLBdM"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-white ml-3 font-weight-bold shadow"
      >
        Link to Watch
      </Button>
    </Alert>
  );
};

export default AlertMsg;
