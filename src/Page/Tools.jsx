import React from "react";
import "../Style/Page/Tools.css";
import figma from "../Assets/1667px-Figma-logo.svg.png";
import js from "../Assets/JavaScript-logo.png";
import react from "../Assets/1611079.png";
import bootstrap from "../Assets/Bootstrap_logo.svg.png";
import tailwind from "../Assets/Tailwind_CSS_Logo.svg.png";

const Tools = () => {
  let tools = [
    { image: figma, id: "figma", title: "FIGMA" },
    { image: js, title: "JAVASCRIPT" },
    { image: react, title: "REACTJS" },
    { image: bootstrap, title: "BOOTSTRAP" },
    { image: tailwind, title: "TAILWIND CSS" },
  ];
  return (
    <section className="tools" id="tools">
      <div className="tools-title">TOOLS</div>
      <div className="tools-container">
        {tools.map((item) => {
          return (
            <div className="tools-card">
              <div className="face front">
                <img src={item.image} alt="" id={item.id} />
              </div>
              <div className="face back">
                <h2>{item.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
