import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="green-span">Code</strong>
      </h1>
      <GitHubCalendar
        username="youssef-ettafssaoui"
        blockSize={15}
        blockMargin={5}
        color="#c6fff2"
        fontSize={20}
      />
    </Row>
  );
};

export default Github;
