import React, { useState } from "react";
import styles from "../styles/LoadScreen.module.scss";

const LoadScreen: React.FC = () => {
  const [showScreen, setShowScreen] = useState(true);
  return (
    <div
      className={showScreen ? styles.screen : styles.hidden}
      onAnimationEnd={() => setShowScreen(false)}
    >
      LOADING
    </div>
  );
};

export default LoadScreen;
