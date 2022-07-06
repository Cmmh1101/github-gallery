import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container } from "reactstrap";
import HeroHeader from "../../../utils/HeroHeader";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { animated } from "react-spring";
import { useTheme } from "../../../provider/ThemeModeProvider";

const Hero = () => {
  const { styles, darkMode } = useTheme();
  return (
    <Container
      id="home"
      tag="header"
      fluid
      className="hero-container"
      style={
        darkMode
          ? {
              backgroundImage: "url('../images/general/dark-hero-1.svg')",
            }
          : { backgroundImage: "url('../images/general/light-hero-1.svg')" }
      }
    >
      <animated.div style={styles} className="row">
        <Col
          xs={2}
          className="justify-content-center d-flex flex-column align-items-end follow-icons"
        >
          <a
            href="https://www.linkedin.com/in/carla-montano"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon mb-3"
              style={
                darkMode
                  ? { backgroundColor: "white", color: "black" }
                  : { backgroundColor: "black", color: "white" }
              }
            />
          </a>
          <a
            href="https://github.com/cmmh1101"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="icon mt-3"
              style={
                darkMode
                  ? { backgroundColor: "white", color: "black" }
                  : { backgroundColor: "black", color: "white" }
              }
            />
          </a>
        </Col>
        <Col xs={10}>
          <HeroHeader
            spTitle="Ingeniera de Sistemas"
            spText="Resolviendo problemas de los negocios con desarrollo de
              aplicationes web"
            enTitle="Software Engineer"
            enText="Solving Problems with full stack web development Solutions"
            enButton="Recent Projects"
            esButton="Proyectos Recientes"
          />
        </Col>
      </animated.div>
    </Container>
  );
};

export default Hero;
