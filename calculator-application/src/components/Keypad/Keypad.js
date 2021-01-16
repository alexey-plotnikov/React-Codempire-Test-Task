import React from "react";

import KeypadButton from "components/KeypadButton/KeypadButton";
import { KeypadButtonConstants } from "common/constants";
import "./Keypad.scss";

const KeypadComponent = (props) => {
  const { inputDigit, clearOutputDisplay, executeCalculation} = props;

  return (
    <div className="keypad-container">
      <div className="keypad-container__keypad-row">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.ALL_CLEAR_SIGN}
            btnColor={KeypadButtonConstants.LIGHT_GREY_COLOR}
            onClick={() => clearOutputDisplay()}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.PLUS_MINUS_SIGN}
            btnStyle={KeypadButtonConstants.SIGN_STYLE}
            btnColor={KeypadButtonConstants.LIGHT_GREY_COLOR}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.PERCENTAGE_SIGN}
            btnColor={KeypadButtonConstants.LIGHT_GREY_COLOR}
            btnStyle={KeypadButtonConstants.SIGN_STYLE}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.DIVISION_SIGN}
            btnColor={KeypadButtonConstants.ORANGE_COLOR}
            btnStyle={KeypadButtonConstants.SIGN_STYLE}
            onClick={() => executeCalculation(KeypadButtonConstants.DIVISION_SIGN)}
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_CLEAR_SIGN}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            btnStyle={KeypadButtonConstants.MEMORY_NUMBER_STYLE}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_RECALL_SIGN}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            btnStyle={KeypadButtonConstants.MEMORY_NUMBER_STYLE}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_MINUS_SIGN}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            btnStyle={KeypadButtonConstants.MEMORY_NUMBER_STYLE}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_PLUS_SIGN}
            btnColor={KeypadButtonConstants.ORANGE_COLOR}
            btnStyle={KeypadButtonConstants.MEMORY_NUMBER_STYLE}
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_SEVEN}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_SEVEN)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_EIGHT}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_EIGHT)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_NINE}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_NINE)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.TIMES_SIGN}
            btnColor={KeypadButtonConstants.ORANGE_COLOR}
            btnStyle={KeypadButtonConstants.SIGN_STYLE}
            onClick={() => executeCalculation(KeypadButtonConstants.TIMES_SIGN)}
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_FOUR}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_FOUR)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_FIVE}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_FIVE)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_SIX}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_SIX)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.MINUS_SIGN}
            btnColor={KeypadButtonConstants.ORANGE_COLOR}
            btnStyle={KeypadButtonConstants.SIGN_STYLE}
            onClick={() => executeCalculation(KeypadButtonConstants.MINUS_SIGN)}
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_ONE}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_ONE)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_TWO}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_TWO)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_THREE}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_THREE)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.PLUS_SIGN}
            btnColor={KeypadButtonConstants.ORANGE_COLOR}
            btnStyle={KeypadButtonConstants.SIGN_STYLE}
            onClick={() => executeCalculation(KeypadButtonConstants.PLUS_SIGN)}
          />
        </div>
      </div>

      <div className="keypad-container__keypad-row no-gutters">
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_ZERO}
            btnColor={KeypadButtonConstants.GREY_COLOR}
            btnStyle={KeypadButtonConstants.ZERO_STYLE}
            onClick={() => inputDigit(KeypadButtonConstants.NUMBER_ZERO)}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.FLOATING_POINT_SIGN}
            btnColor={KeypadButtonConstants.GREY_COLOR}
          />
        </div>
        <div className="keypad-container__keypad-row__keypad-column">
          <KeypadButton
            btnLabel={KeypadButtonConstants.EQUALS_SIGN}
            btnColor={KeypadButtonConstants.ORANGE_COLOR}
            btnStyle={KeypadButtonConstants.SIGN_STYLE}
          />
        </div>
      </div>
    </div>
  );
};

export default KeypadComponent;
