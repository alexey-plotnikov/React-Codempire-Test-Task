import React from "react";

import "./KeypadButton.scss";

const KeypadButton = (props) => {
  const {btnLabel} = props;

  return <div className="keypad-button">{btnLabel}</div>;
};

export default KeypadButton;
