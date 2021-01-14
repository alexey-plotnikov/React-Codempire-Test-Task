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
        <Col className="test">
          <KeypadButton
            btnLabel={KeypadButtonConstants.ALL_CLEAR_SIGN}
            btnStyle={KeypadButtonConstants.LIGHT_GREY}
          />
        </Col>
        <Col className="test">
          <KeypadButton
            btnLabel={KeypadButtonConstants.PLUS_MINUS_SIGN}
            btnStyle={KeypadButtonConstants.LIGHT_GREY}
          />
        </Col>
        <Col className="test">
          <KeypadButton
            btnLabel={KeypadButtonConstants.PERCENTAGE_SIGN}
            btnStyle={KeypadButtonConstants.LIGHT_GREY}
          />
        </Col>
        <Col className="test">
          <KeypadButton
            btnLabel={KeypadButtonConstants.DIVISION_SIGN}
            btnStyle={KeypadButtonConstants.ORANGE}
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_CLEAR_SIGN}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_RECALL_SIGN}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_MINUS_SIGN}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MEMORY_NUMBER_PLUS_SIGN}
            btnStyle={KeypadButtonConstants.ORANGE}
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_SEVEN}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_EIGHT}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_NINE}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.TIMES_SIGN}
            btnStyle={KeypadButtonConstants.ORANGE}
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_FOUR}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_FIVE}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_SIX}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.MINUS_SIGN}
            btnStyle={KeypadButtonConstants.ORANGE}
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_ONE}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_TWO}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_THREE}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.PLUS_SIGN}
            btnStyle={KeypadButtonConstants.ORANGE}
          />
        </Col>
      </Row>

      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.NUMBER_ZERO}
            btnStyle={KeypadButtonConstants.ZERO_BUTTON_SIZE}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.FLOATING_POINT_SIGN}
            btnStyle={KeypadButtonConstants.GREY}
          />
        </Col>
        <Col>
          <KeypadButton
            btnLabel={KeypadButtonConstants.EQUALS_SIGN}
            btnStyle={KeypadButtonConstants.ORANGE}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default KeypadComponent;
