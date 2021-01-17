import React from "react";

import KeypadButton from "components/KeypadButton/KeypadButton";
import { KeypadConstants } from "common/constants";
import "./Keypad.scss";

const KeypadComponent = (props) => {
  const {
    displayedValue,
    handleDigitInput,
    clearOutputDisplay,
    clearAll,
    executeCalculation,
    handleSignChange,
    handleNumberPercentage,
    handleFloatingPointInput,
    handleMemoryNumberInput,
  } = props;

  return (
    <div className="keypad-container">
      <div className="keypad-container__keypad-row">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={
              displayedValue !== KeypadConstants.NUMBER_ZERO
                ? KeypadConstants.CLEAR_SIGN
                : KeypadConstants.ALL_CLEAR_SIGN
            }
            btnColor={KeypadConstants.LIGHT_GREY_COLOR}
            onClick={() =>
              displayedValue !== KeypadConstants.NUMBER_ZERO
                ? clearOutputDisplay()
                : clearAll()
            }
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.PLUS_MINUS_SIGN}
            btnStyle={KeypadConstants.SIGN_STYLE}
            btnColor={KeypadConstants.LIGHT_GREY_COLOR}
            onClick={() => handleSignChange(KeypadConstants.PLUS_MINUS_SIGN)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.PERCENTAGE_SIGN}
            btnColor={KeypadConstants.LIGHT_GREY_COLOR}
            btnStyle={KeypadConstants.SIGN_STYLE}
            onClick={() =>
              handleNumberPercentage(KeypadConstants.PERCENTAGE_SIGN)
            }
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.DIVISION_SIGN}
            btnColor={KeypadConstants.ORANGE_COLOR}
            btnStyle={KeypadConstants.SIGN_STYLE}
            onClick={() => executeCalculation(KeypadConstants.DIVISION_SIGN)}
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.MEMORY_NUMBER_CLEAR_SIGN}
            btnColor={KeypadConstants.GREY_COLOR}
            btnStyle={KeypadConstants.MEMORY_NUMBER_STYLE}
            onClick={() =>
              handleMemoryNumberInput(KeypadConstants.MEMORY_NUMBER_CLEAR_SIGN)
            }
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.MEMORY_NUMBER_RECALL_SIGN}
            btnColor={KeypadConstants.GREY_COLOR}
            btnStyle={KeypadConstants.MEMORY_NUMBER_STYLE}
            onClick={() =>
              handleMemoryNumberInput(KeypadConstants.MEMORY_NUMBER_RECALL_SIGN)
            }
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.MEMORY_NUMBER_MINUS_SIGN}
            btnColor={KeypadConstants.GREY_COLOR}
            btnStyle={KeypadConstants.MEMORY_NUMBER_STYLE}
            onClick={() =>
              handleMemoryNumberInput(KeypadConstants.MEMORY_NUMBER_MINUS_SIGN)
            }
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.MEMORY_NUMBER_PLUS_SIGN}
            btnColor={KeypadConstants.ORANGE_COLOR}
            btnStyle={KeypadConstants.MEMORY_NUMBER_STYLE}
            onClick={() =>
              handleMemoryNumberInput(KeypadConstants.MEMORY_NUMBER_PLUS_SIGN)
            }
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_SEVEN}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_SEVEN)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_EIGHT}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_EIGHT)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_NINE}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_NINE)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.TIMES_SIGN}
            btnColor={KeypadConstants.ORANGE_COLOR}
            btnStyle={KeypadConstants.SIGN_STYLE}
            onClick={() => executeCalculation(KeypadConstants.TIMES_SIGN)}
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_FOUR}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_FOUR)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_FIVE}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_FIVE)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_SIX}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_SIX)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.MINUS_SIGN}
            btnColor={KeypadConstants.ORANGE_COLOR}
            btnStyle={KeypadConstants.SIGN_STYLE}
            onClick={() => executeCalculation(KeypadConstants.MINUS_SIGN)}
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_ONE}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_ONE)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_TWO}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_TWO)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_THREE}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_THREE)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.PLUS_SIGN}
            btnColor={KeypadConstants.ORANGE_COLOR}
            btnStyle={KeypadConstants.SIGN_STYLE}
            onClick={() => executeCalculation(KeypadConstants.PLUS_SIGN)}
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.NUMBER_ZERO}
            btnColor={KeypadConstants.GREY_COLOR}
            btnStyle={KeypadConstants.ZERO_STYLE}
            onClick={() => handleDigitInput(KeypadConstants.NUMBER_ZERO)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.FLOATING_POINT_SIGN}
            btnColor={KeypadConstants.GREY_COLOR}
            onClick={() =>
              handleFloatingPointInput(KeypadConstants.FLOATING_POINT_SIGN)
            }
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadConstants.EQUALS_SIGN}
            btnColor={KeypadConstants.ORANGE_COLOR}
            btnStyle={KeypadConstants.SIGN_STYLE}
            onClick={() => executeCalculation(KeypadConstants.EQUALS_SIGN)}
          />
        </div>
      </div>
    </div>
  );
};

export default KeypadComponent;
