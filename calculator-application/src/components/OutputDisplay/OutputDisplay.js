import React from "react";

import "./OutputDisplay.scss";

const OutputComponent = (props) => {
  const { displayedValue } = props;
  
  return <div className="output-display-container">{displayedValue}</div>;
};

export default OutputComponent;
