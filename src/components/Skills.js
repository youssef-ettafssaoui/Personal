import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gradient from "../assets/img/_grad.png";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h1 className="skills-heading">
                <strong className="green-span">General</strong> Skills
              </h1>
              <p>
                As Full Stack Engineer who has knowledge and experience in both
                frontend and backend development. I am responsible for
                designing, developing, and maintaining web applications from end
                to end, including user interfaces, server-side logic, and
                databases. I have a solid understanding of programming languages
                such as HTML, CSS, JavaScript, Node.js, and databases like
                MySQL, MongoDB, and PostgreSQL. I have also excellent
                problem-solving and analytical skills to identify and fix issues
                that may arise during the development process.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Frontend development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Backend development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Databases</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>APIs</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>DevOps</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Soft skills</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Version control</h5>
                </div>
              </Carousel>
              <br />
              <h1 className="skills-heading">
                Professional <strong className="green-span">Skillset </strong>
              </h1>
              <Techstack />
              <h1 className="skills-heading">
                <strong className="green-span">Tools</strong> I use
              </h1>
              <Toolstack />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-right" src={gradient} alt="Image" />
      <img className="background-image-left" src={gradient} alt="Image" />
    </section>
  );
};

export default Skills;
