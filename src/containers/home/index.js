import React from "react";
import Hero from "./Hero";
import About from "./About";
import Explore from "./Explore";
import Partners from "../sponsor/Partners";
import Apply from "./Apply";
import Speaker from "./Speaker";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Speaker />
      <Explore />
      <Partners displayAll={false} learnMore={true} />
      <Apply />
    </div>
  );
};

export default Home;
