import React from "react";

const Instruction = (props) => {
  return (
    <div className="instruction">
      <h2 className="heading">{props.heading}</h2>
      <p className="explanation">{props.explanation}</p>
    </div>
  );
};

export default Instruction;
