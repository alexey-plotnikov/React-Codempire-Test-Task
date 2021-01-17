import React from "react";

import OutputComponent from "components/OutputDisplay/OutputDisplay";
import KeypadComponent from "components/Keypad/Keypad";

import "./Calculator.scss";

const CalculatorComponent = (props) => {
  const {
    handleDigitInput,
    displayedValue,
    clearOutputDisplay,
    clearAll,
    executeCalculation,
    handleSignChange,
    handleNumberPercentage,
    handleFloatingPointInput,
    handleMemoryNumberInput,
  } = props;

  return (
    <div className="content-component">
      <OutputComponent displayedValue={displayedValue} />
      <KeypadComponent
        displayedValue={displayedValue}
        handleDigitInput={(digit) => handleDigitInput(digit)}
        handleSignChange={() => handleSignChange()}
        handleNumberPercentage={() => handleNumberPercentage()}
        handleFloatingPointInput={() => handleFloatingPointInput()}
        handleMemoryNumberInput={(memoryOperation) =>
          handleMemoryNumberInput(memoryOperation)
        }
        executeCalculation={(currentOperation) =>
          executeCalculation(currentOperation)
        }
        clearOutputDisplay={() => clearOutputDisplay()}
        clearAll={() => clearAll()}
      />
    </div>
  );
};

export default CalculatorComponent;
