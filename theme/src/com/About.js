import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-main">
          <div className="about-left">
            <img src="/about.png" alt="Asikur" />
          </div>
          <div className="about-right">
            <h1>
              <span>About</span>| Me
            </h1>
            <h4>
              Full-Stack <span>Web Developer,MERN</span>
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets containing
            </p>
            <button>Learn More|</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
