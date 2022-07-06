import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Col, Container, Row } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import SubHeader from "../../../utils/SubHeader";

const About = () => {
  const { englishMode } = useTheme();

  const aboutEn = [
    "I'm a passionate self-taught Web Developer and Designer. My proactive approach has resulted in numerous important wins in my professional development in tech, teaching, and sports.",
    "Being able to plan, implement, supervise, evaluate, communicate, receive feedback, and correct are skills that combined with my Tech knowledge and Hispanic background give me a great base to help you grow and reach your goals.",
    "Since my Web Developer journey started I found out that with tech I can do the things that I enjoy the most, be creative, solve problems, overcome challenges, create solutions, and the most important to help others achieve their goals.",
  ];

  const aboutEsp = [
    `Soy una Ingeniera de Software apasionada y preparada independientemente. My proactive approach has resulted in numerous important wins in my professional development in tech, teaching, and sports.`,
    `Being able to plan, implement, supervise, evaluate, communicate, receive feedback, and correct are skills that combined with my Tech knowledge and Hispanic background give me a great base to help you grow and reach your goals.`,
    `Since my Web Developer journey started I found out that with tech I can do the things that I enjoy the most, be creative, solve problems, overcome challenges, create solutions, and the most important to help others achieve their goals.`,
  ];

  return (
    <>
      <Container id="about">
        <Row>
          <Col xs={12} className="my-5 projects-section">
            <SubHeader enTitle="About Me" spTitle="Sobre Mi" />

            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center flex-wrap"
            >
              <Col xs={12} lg={6}>
                <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s pr-5">
                  {englishMode
                    ? aboutEsp.map((parragraph, i) => {
                        return <p key={i}>{parragraph}</p>;
                      })
                    : aboutEn.map((parragraph, i) => {
                        return <p key={i}>{parragraph}</p>;
                      })}
                </AnimationOnScroll>
              </Col>

              <Col xs={12} lg={6} className="px-5 my-5 my-lg-0">
                <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
                  <img
                    className="w-100 shadow"
                    src="../images/general/computer.jpg"
                    alt="logo"
                  />
                </AnimationOnScroll>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
