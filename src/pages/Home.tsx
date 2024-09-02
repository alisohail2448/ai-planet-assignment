import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Challenges from "../components/Challenges";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Challenges />
    </div>
  );
};

export default Home;
