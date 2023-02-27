import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMacos,
  SiVisualstudiocode,
  SiPostman,
  SiVisualstudio,
  SiVercel,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <h4>Macos</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>Visual Studio Code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <h4>Visual Studio</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h4>Postman</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h4>Vercel</h4>
      </Col>
    </Row>
  );
};

export default Toolstack;
