import React from "react";
import Navbar from "../Component/Navbar";
import Contact from "../Component/Contact";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Tools from "./Tools";
import Project from "./Project";
import Certificate from "./Certificate";
import "../Style/Page/Allcontent.css";
import Footer from "../Component/Footer";

const Allcontent = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Contact />
        <Home />
        <About />
        <Skills />
        <Tools />
        <Project />
        <Certificate />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Allcontent;
