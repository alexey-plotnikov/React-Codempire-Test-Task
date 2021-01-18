import React from "react";

import CalculatorComponent from "components/Calculator/Calculator";
import { KeypadConstants } from "common/constants";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      displayedValue: KeypadConstants.NUMBER_ZERO,
      value: null,
      operation: null,
      memoryNumber: KeypadConstants.NUMBER_ZERO,
      isOperationActive: false,
    };
  }

  handleDigitInput(digit) {
    const { displayedValue, isOperationActive } = this.state;

    if (isOperationActive) {
      this.setState({
        displayedValue: String(digit),
        isOperationActive: false,
      });
    } else {
      this.setState({
        displayedValue:
          displayedValue === KeypadConstants.NUMBER_ZERO
            ? String(digit)
            : displayedValue + digit,
      });
    }
  }

  handleSignChange() {
    const { displayedValue } = this.state;
    const result = parseFloat(displayedValue) * -1;

    this.setState({
      displayedValue: String(result),
    });
  }

  handleNumberPercentage() {
    const { displayedValue } = this.state;
    const nextValue = parseFloat(displayedValue);

    if (nextValue === KeypadConstants.NUMBER_ZERO) {
      return;
    } else {
      let result = parseFloat(displayedValue) / 100;

      result = parseFloat(result.toFixed(7));

      this.setState({
        displayedValue: String(result),
      });
    }
  }

  handleFloatingPointInput() {
    const { displayedValue } = this.state;

    if (!displayedValue.includes(KeypadConstants.FLOATING_POINT_SIGN)) {
      this.setState({
        displayedValue: displayedValue + KeypadConstants.FLOATING_POINT_SIGN,
        isOperationActive: false,
      });
    }
  }

  handleMemoryNumberOperations(memoryOperation, prevValue, nextValue) {
    switch (memoryOperation) {
      case KeypadConstants.MEMORY_NUMBER_RECALL_SIGN: {
        return prevValue;
      }
      case KeypadConstants.MEMORY_NUMBER_PLUS_SIGN: {
        return prevValue + nextValue;
      }
      case KeypadConstants.MEMORY_NUMBER_MINUS_SIGN: {
        return prevValue - nextValue;
      }
      case KeypadConstants.MEMORY_NUMBER_CLEAR_SIGN: {
        return KeypadConstants.NUMBER_ZERO;
      }
    }
  }

  handleMemoryNumberInput(currentMemoryOperation) {
    const { displayedValue, memoryNumber } = this.state;
    const nextValue = parseFloat(displayedValue);
    const prevValue = parseFloat(memoryNumber);

    let result = this.handleMemoryNumberOperations(
      currentMemoryOperation,
      prevValue,
      nextValue
    );

    result = parseFloat(result.toFixed(7));

    if (currentMemoryOperation === KeypadConstants.MEMORY_NUMBER_RECALL_SIGN) {
      this.setState({
        displayedValue: String(result),
      });
    }

    this.setState({
      memoryNumber: String(result),
    });
  }

  mathOperations(operation, prevValue, nextValue) {
    switch (operation) {
      case KeypadConstants.PLUS_SIGN: {
        return prevValue + nextValue;
      }
      case KeypadConstants.MINUS_SIGN: {
        return prevValue - nextValue;
      }
      case KeypadConstants.TIMES_SIGN: {
        return prevValue * nextValue;
      }
      case KeypadConstants.DIVISION_SIGN: {
        return prevValue / nextValue;
      }
      case KeypadConstants.EQUALS_SIGN: {
        return nextValue;
      }
    }
  }

  executeCalculation(currentOperation) {
    const { displayedValue, value, operation, isOperationActive } = this.state;
    const nextValue = parseFloat(displayedValue);

    if (!isOperationActive) {
      if (value == null) {
        this.setState({
          value: nextValue,
        });
      } else {
        const prevValue = value;
        let result = this.mathOperations(operation, prevValue, nextValue);
        result = parseFloat(result.toFixed(7));

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

  clearAll() {
    this.setState({
      displayedValue: KeypadConstants.NUMBER_ZERO,
      value: null,
      operation: null,
      isOperationActive: false,
    });
  }

  clearOutputDisplay() {
    this.setState({
      displayedValue: KeypadConstants.NUMBER_ZERO,
    });
  }

  render() {
    const { displayedValue } = this.state;
    return (
      <div>
        <CalculatorComponent
          displayedValue={displayedValue}
          handleDigitInput={(digit) => this.handleDigitInput(digit)}
          handleSignChange={() => this.handleSignChange()}
          handleNumberPercentage={() => this.handleNumberPercentage()}
          handleFloatingPointInput={() => this.handleFloatingPointInput()}
          handleMemoryNumberInput={(memoryOperation) =>
            this.handleMemoryNumberInput(memoryOperation)
          }
          executeCalculation={(currentOperation) =>
            this.executeCalculation(currentOperation)
          }
          clearOutputDisplay={() => this.clearOutputDisplay()}
          clearAll={() => this.clearAll()}
        />
      </div>
    );
  }
}

export default Calculator;
