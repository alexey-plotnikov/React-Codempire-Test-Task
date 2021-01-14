import React from "react";

import { KeypadButtonConstants } from "common/constants";
import "./KeypadButton.scss";

const KeypadButton = (props) => {
  const { btnLabel, btnStyle } = props;

  const getBtnStyle = () => {
    if (btnStyle === KeypadButtonConstants.ZERO_BUTTON_SIZE) {
      return KeypadButtonConstants.ZERO_BUTTON_SIZE;
    } else if (btnStyle === KeypadButtonConstants.LIGHT_GREY) {
      return KeypadButtonConstants.LIGHT_GREY;
    } else if (btnStyle === KeypadButtonConstants.ORANGE) {
      return KeypadButtonConstants.ORANGE;
    } else return KeypadButtonConstants.GREY;
  };

  return <div className={`keypad-button ${getBtnStyle()}`}>{btnLabel}</div>;
};

export default KeypadButton;
