import React from "react";
import "./Feature.css";

const Feature = (props) => {
  return (
    <div className="featureContainer">
      <div className="iconContainer">
        <img src={props.Icon} alt={props.iconAlt} className="icon" />
      </div>
      <h3 className="h3">{props.heading}</h3>
      <p className="p">{props.description}</p>
    </div>
  );
};

export default Feature;
