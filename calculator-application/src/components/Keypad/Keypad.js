import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import KeypadButton from "components/KeypadButton/KeypadButton";
import "./Keypad.scss";

const KeypadComponent = (props) => {
  const {} = props;

  return (
    <Container className="keypad-container">
      <Row className="keypad-container__keypad-row no-gutters">
        <Col>
          <KeypadButton btnLabel="privet" btnStyle=""/>
        </Col>
        <Col>
          <KeypadButton btnLabel="+"/>
        </Col>
        <Col>
          <KeypadButton />
        </Col>
        <Col>
          <KeypadButton />
        </Col>
      </Row>
    </Container>
  );
};

export default KeypadComponent;
