import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Row, Col, Container } from "reactstrap";
import SubHeader from "../../../utils/SubHeader";

const Contact = () => {
  return (
    <Container
      id="contact"
      className="contact"
      style={{ height: "auto", minHeight: "100vh" }}
    >
      <Row xs={12} className="pb-5">
        <Col xs={12} className="connect">
          <SubHeader spTitle="Conversemos" enTitle="Get in touch" />
          <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
            <Col xs={12} className="connect-image-col">
              <div className="connect-img">
                <img
                  src="../../../images/general/contactImg.png"
                  alt="Cell phone showing social media apps to connect"
                />
              </div>
            </Col>
            <Col xs={12} className="mb-5 connect-icons">
              <a
                href="https://github.com/cmmh1101"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/carla-montano"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://twitter.com/cmmh11"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Col>
          </AnimationOnScroll>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
