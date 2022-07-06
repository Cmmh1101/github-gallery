import React from "react";
import { Button } from "reactstrap";
import { useTheme } from "../provider/ThemeModeProvider";
import { scrollTo } from "./ScrollTo";
import { animated } from "react-spring";

interface Props {
  enTitle: string;
  enText: string;
  spTitle: string;
  spText: string;
  enButton: string;
  esButton: string;
}

const HeroHeader = ({
  enText,
  enTitle,
  spTitle,
  spText,
  enButton,
  esButton,
}: Props) => {
  const { englishMode, styles, darkMode } = useTheme();
  return (
    <div
      className="hero-text"
      style={darkMode ? { color: "white" } : { color: "black" }}
    >
      <animated.div style={styles}>
        <h1>{englishMode ? spTitle : enTitle}</h1>
        <p>{englishMode ? spText : enText}</p>
        <Button
          onClick={() => scrollTo("#projects")}
          style={
            darkMode
              ? { color: "white" }
              : { color: "black", borderColor: "black" }
          }
          outline
          type="button"
        >
          {englishMode ? esButton : enButton}
        </Button>
      </animated.div>
    </div>
  );
};

export default HeroHeader;
