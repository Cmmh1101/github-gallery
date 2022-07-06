import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useTheme } from "../../provider/ThemeModeProvider";
import { scrollTo } from "../../utils/ScrollTo";

const Footer = () => {
  const { englishMode } = useTheme();
  const currentYear = new Date();

  return (
    <footer className="pt-5 shadow">
      <Container>
        <Row className="footer">
          <Col xs={12} className="d-flex justify-content-center mb-5">
            <Col md={12} className="footer-logo">
              <Link to="/">
                <img src="../logobrand.png" alt="Logo Carla Montano" />
              </Link>
            </Col>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column">
            <Link
              to="/"
              className="links"
              onClick={() => {
                scrollTo("#home");
              }}
            >
              {englishMode ? "Inicio" : "Home"}
            </Link>
            <button
              onClick={() => {
                scrollTo("#projects");
              }}
              className="links"
            >
              {englishMode ? "Proyectos" : "Projects"}
            </button>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column">
            <button onClick={() => scrollTo("#about")} className="links">
              {englishMode ? "Sobre Mi" : "About"}
            </button>

            <a
              href="https://blog.carlamontano.tech"
              target="_blank"
              rel="noreferrer"
              className="links"
            >
              Blog
            </a>
          </Col>
          <Col xs={12} md={4} className="">
            <h5>{englishMode ? "Conversemos" : "Let's Connect"} </h5>
            <a
              href="https://github.com/cmmh1101"
              target="_blank"
              rel="noreferrer"
              className="footer-icons"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/carla-montano"
              target="_blank"
              rel="noreferrer"
              className="footer-icons"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a
              href="https://twitter.com/cmmh11"
              target="_blank"
              rel="noreferrer"
              className="footer-icons"
            >
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
          </Col>
          <Col xs={12} className="mt-5 mb-1 small">
            <span>{currentYear.getFullYear()} | All right reserved</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
