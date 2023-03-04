import React from "react";
import "./contact.css";
const Common = (props) => {
  return (
    <div className="common" id="common">
      <div className="container">
        <h1 className="h1" style={{color:"red"}}>
                  {props.title}
        </h1>
    
      </div>
    </div>
  );
};

export default Common;
