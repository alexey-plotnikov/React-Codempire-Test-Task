import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import KeypadButton from "components/KeypadButton/KeypadButton";
import { KeypadButtonConstants } from "common/constants";
import "./Keypad.scss";

const KeypadComponent = (props) => {
  const {} = props;

  return (
    <Container className="keypad-container">
      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.ALL_CLEAR_SIGN}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.PLUS_MINUS_SIGN}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.PERCENTAGE_SIGN}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.DIVISION_SIGN}
            btnStyle=""
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_CLEAR_SIGN}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_RECALL_SIGN}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_MINUS_SIGN}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_PLUS_SIGN}
            btnStyle=""
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_SEVEN}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_EIGHT}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_NINE}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.TIMES_SIGN}
            btnStyle=""
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_FOUR}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_FIVE}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_SIX}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MINUS_SIGN}
            btnStyle=""
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_ONE}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_TWO}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_THREE}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.PLUS_SIGN}
            btnStyle=""
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_ZERO}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.FLOATING_POINT_SIGN}
            btnStyle=""
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.EQUALS_SIGN}
            btnStyle=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default KeypadComponent;
