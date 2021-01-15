import React from "react";

import CalculatorComponent from "components/Calculator/Calculator";
import { KeypadButtonConstants } from "common/constants";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      displayedValue: KeypadButtonConstants.NUMBER_ZERO,
    };
  }

  inputDigit(digit) {
    const { displayedValue } = this.state;

    this.setState({
      displayedValue:
        displayedValue === KeypadButtonConstants.NUMBER_ZERO
          ? digit
          : displayedValue + digit,
    });
  }

  clearOutputDisplay() {
    this.setState({
      displayedValue: KeypadButtonConstants.NUMBER_ZERO,
    });
  }

  executeCalculation(calculation) {
    console.log(calculation);
  }

  render() {
    const { displayedValue } = this.state;
    return (
      <div>
        <CalculatorComponent
          displayedValue={displayedValue}
          inputDigit={(digit) => this.inputDigit(digit)}
          clearOutputDisplay={() => this.clearOutputDisplay()}
        />
      </div>
    );
  }
}

export default Calculator;
