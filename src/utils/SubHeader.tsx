import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTheme } from "../provider/ThemeModeProvider";

interface Props {
  enTitle?: string;
  enText?: string;
  spTitle?: string;
  spText?: string;
  subSpanish?: string;
  subEnglish?: string;
}

const SubHeader = ({
  enText,
  enTitle,
  spTitle,
  spText,
  subEnglish,
  subSpanish,
}: Props) => {
  const { englishMode } = useTheme();
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft">
      <div className="sub-header my-5">
        {englishMode ? (
          <>
            <h2>{spTitle}</h2>
            <h3>{subSpanish}</h3>
            <p>{spText}</p>
          </>
        ) : (
          <>
            <h2>{enTitle}</h2>
            <h3>{subEnglish}</h3>
            <p>{enText}</p>
          </>
        )}
      </div>
    </AnimationOnScroll>
  );
};

export default SubHeader;
