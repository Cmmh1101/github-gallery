import React from "react";
import ReposList from "../repos/ReposList";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ReposList />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
