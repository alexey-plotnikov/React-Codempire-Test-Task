import React from "react";

import "./KeypadButton.scss";

const KeypadButton = (props) => {
  const { btnLabel, btnStyle, btnColor, onClick } = props;

  return (
    <div className={`keypad-button ${btnColor} ${btnStyle}`} onClick={onClick}>
      {btnLabel}
    </div>
  );
};

export default KeypadButton;
