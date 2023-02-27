import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleProject from "./SingleProject";
import Particle from "./Particle";
import webapp from "../assets/img/web-app.jpg";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green-span">Works </strong>
        </h1>
        <p style={{ color: "white", fontSize: "25px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <SingleProject
              imgPath={webapp}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue elit, posuere id mollis nec, pretium sed mauris. Vivamus vulputate sagittis convallis. Sed egestas pretium orci vitae consectetur. Nam malesuada fringilla ante varius convallis. Proin accumsan convallis efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tellus a ultricies tincidunt, lorem magna dictum ligula, tempus porttitor lorem eros et mi."
              ghLink="https://github.com/youssef-ettafssaoui"
              demoLink="https://github.com/youssef-ettafssaoui"
            />
          </Col>

          <Col md={4} className="project-card">
            <SingleProject
              imgPath={webapp}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue elit, posuere id mollis nec, pretium sed mauris. Vivamus vulputate sagittis convallis. Sed egestas pretium orci vitae consectetur. Nam malesuada fringilla ante varius convallis. Proin accumsan convallis efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tellus a ultricies tincidunt, lorem magna dictum ligula, tempus porttitor lorem eros et mi."
              ghLink="https://github.com/youssef-ettafssaoui"
              demoLink="https://github.com/youssef-ettafssaoui"
            />
          </Col>

          <Col md={4} className="project-card">
            <SingleProject
              imgPath={webapp}
              isBlog={false}
              title="Booking hospital appointments"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue elit, posuere id mollis nec, pretium sed mauris. Vivamus vulputate sagittis convallis. Sed egestas pretium orci vitae consectetur. Nam malesuada fringilla ante varius convallis. Proin accumsan convallis efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tellus a ultricies tincidunt, lorem magna dictum ligula, tempus porttitor lorem eros et mi."
              ghLink="https://github.com/youssef-ettafssaoui"
              demoLink="https://github.com/youssef-ettafssaoui"
            />
          </Col>

          <Col md={4} className="project-card">
            <SingleProject
              imgPath={webapp}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue elit, posuere id mollis nec, pretium sed mauris. Vivamus vulputate sagittis convallis. Sed egestas pretium orci vitae consectetur. Nam malesuada fringilla ante varius convallis. Proin accumsan convallis efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tellus a ultricies tincidunt, lorem magna dictum ligula, tempus porttitor lorem eros et mi."
              ghLink="https://github.com/youssef-ettafssaoui"
              demoLink="https://github.com/youssef-ettafssaoui"
            />
          </Col>

          <Col md={4} className="project-card">
            <SingleProject
              imgPath={webapp}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue elit, posuere id mollis nec, pretium sed mauris. Vivamus vulputate sagittis convallis. Sed egestas pretium orci vitae consectetur. Nam malesuada fringilla ante varius convallis. Proin accumsan convallis efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tellus a ultricies tincidunt, lorem magna dictum ligula, tempus porttitor lorem eros et mi."
              ghLink="https://github.com/youssef-ettafssaoui"
            />
          </Col>

          <Col md={4} className="project-card">
            <SingleProject
              imgPath={webapp}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue elit, posuere id mollis nec, pretium sed mauris. Vivamus vulputate sagittis convallis. Sed egestas pretium orci vitae consectetur. Nam malesuada fringilla ante varius convallis. Proin accumsan convallis efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tellus a ultricies tincidunt, lorem magna dictum ligula, tempus porttitor lorem eros et mi."
              ghLink="https://github.com/youssef-ettafssaoui"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
