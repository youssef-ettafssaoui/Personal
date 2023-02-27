import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiVuedotjs, SiNextdotjs, SiDotnet, SiLaravel } from "react-icons/si";

const Techstack = () => {
  return (
    <section>
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiDotnet />
            <h4>ASP.NET</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
            <h4>Javascript</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
            <h4>NodeJs</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <h4>React</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            <h4>MongoDB</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNextdotjs />
            <h4>NextJs</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
            <h4>Github</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiLaravel />
            <h4>Laravel</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiPython />
            <h4>Python</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVuedotjs />
            <h4>Vue.js</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Techstack;
