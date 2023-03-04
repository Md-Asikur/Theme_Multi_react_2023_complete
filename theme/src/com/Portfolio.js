import React, { useState } from "react";
import "./Services.css";
import {Data} from "./Data"
import { Link } from "react-router-dom";
const Portfolio = () => {
    const [Filter, setFilter] = useState(Data)
    
    const filtered = (e) => {
        const updateFilter = Data.filter((f) => {
            return e===f.cat
        })
        setFilter(updateFilter)
        
    }
  return (
    <div className="services" id="services">
      <div className="container">
        <h1 className="h1">
          My|<span>Portfolio</span>
        </h1>
        <div className="btn-list">
          <button onClick={() => filtered("portfolio")}>Portfolio</button>
          <button onClick={() => filtered("ecommerce")}>Ecommerce</button>
          <button onClick={() => filtered("woo")}>Woo-Commerce</button>
          <button onClick={() => setFilter(Data)}>All</button>
        </div>
        <div className="services-main">
          {Filter.map((e) => {
            return (
              <>
                {" "}
                
                  <div className="services-card" key={e.id}>
                    <div>
                      <img src={e.img} alt="" />
                    </div>
                    <h1>
                      <span>{e.name}</span>
                    </h1>
                    <h4>{e.cat}</h4>
                    <p>{e.desc}</p>
                    <button><Link to={`/portfolio/${e.id}`}>Learn More</Link></button>
                  </div>
               
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
