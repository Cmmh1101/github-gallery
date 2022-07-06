import React from "react";
import { useTheme } from "../../provider/ThemeModeProvider";

const ToggleLangButton = () => {
  const { handleToggleLanguage, englishMode } = useTheme();

  return (
    <button
      style={
        englishMode
          ? {
              backgroundImage: "url(../../../images/general/usaflag.png)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {
              backgroundImage: "url(../../../images/general/espFlag.png)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
      }
      className="theme-btn lang-btn"
      type="button"
      onClick={handleToggleLanguage}
    ></button>
  );
};

export default ToggleLangButton;
