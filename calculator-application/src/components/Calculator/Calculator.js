import React from "react";

import OutputComponent from "components/Output/Output";
import KeypadComponent from "components/Keypad/Keypad";

import "./Calculator.scss"

const CalculatorComponent = (props) => {
  const {} = props;

  return (
    <div className="content-component">
      <OutputComponent />
      <KeypadComponent />
    </div>
  );
};

export default CalculatorComponent;
