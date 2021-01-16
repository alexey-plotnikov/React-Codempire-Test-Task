import React from "react";

import CalculatorComponent from "components/Calculator/Calculator";
import { KeypadButtonConstants } from "common/constants";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      displayedValue: KeypadButtonConstants.NUMBER_ZERO,
      value: null,
      operation: null,
      isOperationActive: false,
    };
  }

  inputDigit(digit) {
    const { displayedValue, isOperationActive } = this.state;

    if (isOperationActive) {
      this.setState({
        displayedValue: String(digit),
        isOperationActive: false,
      });
    } else {
      this.setState({
        displayedValue:
          displayedValue === KeypadButtonConstants.NUMBER_ZERO
            ? String(digit): displayedValue + digit,
      });
    }
  }

  clearOutputDisplay() {
    this.setState({
      displayedValue: KeypadButtonConstants.NUMBER_ZERO,
    });
  }

  mathOperations(operation, prevValue, nextValue) {
    switch (operation) {
      case KeypadButtonConstants.PLUS_SIGN: {
        return prevValue + nextValue;
      }
      case KeypadButtonConstants.MINUS_SIGN: {
        return prevValue - nextValue;
      }
      case KeypadButtonConstants.TIMES_SIGN: {
        return prevValue * nextValue;
      }
      case KeypadButtonConstants.DIVISION_SIGN: {
        return prevValue / nextValue;
      }
      // case KeypadButtonConstants.PERCENTAGE_SIGN: {
      //   return prevValue / nextValue;
      // }
    }
  }

  executeCalculation(currentOperation) {
    const {
      displayedValue,
      value,
      operation,
      isOperationActive,
    } = this.state;
    const nextValue = parseFloat(displayedValue);

    if (!isOperationActive) {
      if (value == null) {
        this.setState({
          value: nextValue,
        });
      } else if (operation) {
        const prevValue = value;
        const result = this.mathOperations(
          operation,
          prevValue,
          nextValue
        );

        this.setState({
          value: result,
          displayedValue: String(result),
        });
      }
    }

    this.setState({
      operation: currentOperation,
      isOperationActive: true,
    });
  }

  render() {
    const { displayedValue } = this.state;
    return (
      <div>
        <CalculatorComponent
          displayedValue={displayedValue}
          inputDigit={(digit) => this.inputDigit(digit)}
          clearOutputDisplay={() => this.clearOutputDisplay()}
          executeCalculation={(currentOperation) =>
            this.executeCalculation(currentOperation)
          }
        />
      </div>
    );
  }
}

export default Calculator;
