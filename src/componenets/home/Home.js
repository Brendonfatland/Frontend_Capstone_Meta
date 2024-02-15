import React from "react";
import About from "./About";
import LargeImageSection from "./LargeImageSection";
import SpecialsSection from "./SpecialsSection";

const Home = () => {
  return (
    <>
      <LargeImageSection />
      <SpecialsSection />
      <About id="about" />
      </>
  );
};

export default Home;
