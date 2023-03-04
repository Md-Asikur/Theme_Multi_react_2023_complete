import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <h1 className="h1">
          My|<span>Services</span>
        </h1>
        <div className="services-main">
          <div className="services-card">
            <div>
              <img src="/home.png" alt="" />
            </div>
            <h1>
              Web|<span>Development</span>
            </h1>
            <h4>
              Full-Stack <span>Web Developer,MERN</span>
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            
            </p>
            <button>Learn More|</button>
          </div>
          <div className="services-card">
            <div>
              <img src="/home.png" alt="" />
            </div>
            <h1>
              Web|<span>Bug Solving</span>
            </h1>
            <h4>
              Full-Stack <span>Web Developer,MERN</span>
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            
            </p>
            <button>Learn More|</button>
          </div>
          <div className="services-card">
            <div>
              <img src="/home.png" alt="" />
            </div>
            <h1>
              Web|<span>Design</span>
            </h1>
            <h4>
              Full-Stack <span>Web Developer,MERN</span>
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            
             
            </p>
            <button>Learn More|</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
