import React from "react";
import About from "./About";
import Contact from "./Contact";
import "./home.css"
import Portfolio from "./Portfolio";
import Services from "./Services";
const Home = () => {
  return (
    <>
    <div className="home">
      <div className="container">
        <div className="home-main">
          <div className="home-left">
            <h3>
              Hello,<span>I`Am</span>
            </h3>
            <h1>
              <span>Md Asikur</span>| Rahman
            </h1>
            <p>
              Full-Stack <span>Web Developer,MERN</span>
            </p>
            <button type="">Download Cv</button>
          </div>
          <div className="home-right">
            <img src="/home.png" alt="Asikur" />
          </div>
        </div>
      </div>
      </div>
      <About />
      <Services />
      <Contact />
      <Portfolio/>
      </>
  );
};

export default Home;
