import React from "react";
import "../Style/Page/Skills.css";
import gambar1 from "../Assets/17350097_5812026.jpg";
import gambar2 from "../Assets/26432583_backend_1.jpg";

const Skills = () => {
  return (
    <article className="skills" id="skills">
      <div className="skill-judul">SKILLS</div>
      <div className="skill-container">
        <div className="skill-content">
            <img src={gambar1} alt="UI/UX" />
          <div className="skill-description">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem
              unde harum repudiandae praesentium cupiditate.
            </p>
          </div>
        </div>
        <div className="skill-content">
            <img src={gambar2} alt="Front-End" />
          <div className="skill-description">
            <h3>Front-End Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              earum impedit saepe quasi dolorem commodi?
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;
