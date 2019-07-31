import React, { Fragment } from "react";
import Partners from "./Partners";
import BecomePartner from "./BecomePartner";

const Sponsor = () => {
  return (
    <Fragment>
      <BecomePartner />

      <Partners learnMore={false} displayAll={true} />
    </Fragment>
  );
};

export default Sponsor;
