import React from "react";
import styles from "../styles/Navbar.module.scss";

// incredible parralax explaination: https://www.youtube.com/watch?v=Q5y6pwoE3cM
//style={{ transform: `translateX(${(offsetY) * 0.5}px)` }}

// how do we pass in a state? https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript
const Navbar: React.FC<{
  offsetY: number;
  isTitlePgVisible: boolean;
  isObjectivesPgVisible: boolean;
  isStatsPgVisible: boolean;
  isNewsPgVisible: boolean;
}> = ({
  offsetY,
  isTitlePgVisible,
  isObjectivesPgVisible,
  isStatsPgVisible,
  isNewsPgVisible,
}) => {
  const handleTitlePg = () => {
    var style = {};
    if (isTitlePgVisible && !isObjectivesPgVisible) {
      style = { height: `50vh` };
    }
    return style;
  };
  const handleObjectivesPg = () => {
    var style = {};
    if (isObjectivesPgVisible) {
      style = { height: `50vh` };
    }
    return style;
  };
  const handleStatsPg = () => {
    var style = {};
    if (isStatsPgVisible && !isObjectivesPgVisible) {
      style = { height: `50vh` };
    }
    return style;
  };
  const handleNewsPg = () => {
    var style = {};
    if (isNewsPgVisible && !isStatsPgVisible) {
      style = { height: `50vh` };
    }
    return style;
  };

  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.logoBig}
        style={{ opacity: `${(-1 * offsetY) / 100 + 1}` }}
      >
        AYRE <br />
        GREEN <br />
        FINANCE <br />
      </div>
      <div className={styles.logoSmall}>
        A <br />
        G <br />
        F <br />
      </div>
      <div className={styles.progressBar}>
        <div style={handleTitlePg()}></div>
        <div style={handleObjectivesPg()}></div>
        <div style={handleStatsPg()}></div>
        <div style={handleNewsPg()}></div>
      </div>
    </div>
  );
};

export default Navbar;
