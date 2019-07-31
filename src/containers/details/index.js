import React, { Fragment } from "react";
import Map from "./Map";
import Hero from "./Hero";
import Details from "./Details";
import Policies from "./Policies";
import Schedule from "./Schedule";
import Apply from "./Apply";

const index = () => {
  return (
    <Fragment>
      <Hero />
      <Details />
      <Schedule />
      <Policies />
      <Map />
      <Apply />
    </Fragment>
  );
};

export default index;
