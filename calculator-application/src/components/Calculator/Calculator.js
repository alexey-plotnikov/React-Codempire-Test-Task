import React from "react";

import OutputComponent from "components/OutputDisplay/OutputDisplay";
import KeypadComponent from "components/Keypad/Keypad";

import "./Calculator.scss";

const CalculatorComponent = (props) => {
  const { inputDigit, displayedValue, clearOutputDisplay } = props;

  return (
    <div className="content-component">
      <OutputComponent displayedValue={displayedValue} />
      <KeypadComponent
        inputDigit={(digit) => inputDigit(digit)}
        clearOutputDisplay={() => clearOutputDisplay()}
      />
    </div>
  );
};

export default CalculatorComponent;
