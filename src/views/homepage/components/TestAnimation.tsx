import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface Props {}

const TestAnimation = (props: Props) => {
  return (
    <div>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <h2>Some Text</h2>
      </AnimationOnScroll>
    </div>
  );
};

export default TestAnimation;
