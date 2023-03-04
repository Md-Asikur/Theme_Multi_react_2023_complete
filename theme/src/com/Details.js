import React, { useEffect, useState } from "react";
import "./Services.css";
import { Data } from "./Data";
import { useParams } from "react-router-dom";
const Details = () => {
  const [Filter, setFilter] = useState([]);
    console.log(Filter);
    const {id} = useParams()
    
 useEffect(() => {
     if (id) {
    Data.forEach((f) => {
        if (String(f.id) === id) return setFilter(f); //f.id.toString()
   });
       
 }
 }, [])
 
  return (
    <div className="services" id="services">
      <div className="container">
        <h1 className="h1">
          Details|<span>Portfolio</span>
        </h1>

        <div className="services-main">
          <>
            {" "}
            <div className="services-card" key={Filter.id}>
              <div>
                <img src={Filter.img} alt="" />
              </div>
              <h1>
                <span>{Filter.name}</span>
              </h1>
              <h4>{Filter.cat}</h4>
              <p>{Filter.desc}</p>
              <button>Learn More|</button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Details;
