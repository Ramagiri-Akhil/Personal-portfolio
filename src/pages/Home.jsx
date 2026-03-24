import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Work from "../pages/Work";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/ContactPage";
import ResumeButton from "../components/ResumeButton"

const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Work />
      <About />
      <Skills />
      <Contact />
      <ResumeButton />
    </>
  );
};

export default Home;
