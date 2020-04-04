import React from "react";
import { Alert, Button } from "reactstrap";

const AlertMsg = () => {
  return (
    <Alert color="primary" className="mb-0 my-auto text-center">
      CMU Venture Challenge will be moving online. The YouTube Live starts at
      12:30pm EST on April 4, 2020.{" "}
      <Button
        color="primary"
        size="sm"
        href="https://www.youtube.com/watch?v=J195GeYPf3g"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-white ml-3 font-weight-bold shadow"
      >
        Link to Watch
      </Button>
      <Button
        color="primary"
        size="sm"
        href="https://cmuvc.com/program.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-white ml-3 font-weight-bold shadow"
      >
        View Program
      </Button>
    </Alert>
  );
};

export default AlertMsg;
