import React from "react";
import Hero from "./Hero";
import About from "./About";
import Explore from "./Explore";
import Partners from "../sponsor/Partners";
import Apply from "./Apply";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Explore />
      <Partners displayAll={false} learnMore={true} />
      <Apply />
    </div>
  );
};

export default Home;
