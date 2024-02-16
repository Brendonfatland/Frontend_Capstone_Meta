import React from "react";
import About from "./About";
import LargeImageSection from "./LargeImageSection";
import SpecialsSection from "./SpecialsSection";
import RatingsReviewsSection from "./RatingsReviewsSection";

const Home = () => {
  return (
    <>
      <LargeImageSection />
      <SpecialsSection />
      <RatingsReviewsSection />
      <About id="about" />
      </>
  );
};

export default Home;
