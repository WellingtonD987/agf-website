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
  isFooterPgVisible: boolean;
}> = ({
  offsetY,
  isTitlePgVisible,
  isObjectivesPgVisible,
  isStatsPgVisible,
  isNewsPgVisible,
  isFooterPgVisible,
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
    if (isNewsPgVisible && !isStatsPgVisible && !isFooterPgVisible) {
      style = { height: `50vh` };
    }
    return style;
  };
  const handleFooterPg = () => {
    var style = {};
    if (isFooterPgVisible) {
      style = { height: `50vh` };
    }
    return style;
  };

  /*
  const handleNavbar = () => {
    var factor = (-1 * offsetY) / 100 + 1;
    if (factor < 0)
      return {
        opacity: `calc(${offsetY - document.body.clientHeight} / ${
          window.innerHeight
        })`,
      };

    return { opacity: `${factor}` };
  };
  */
  const handleNavbar = () => {
    var style = {};
    if (offsetY > 50)
      style = {
        color: "rgba(0,0,0,0)",
      };
    return style;
  };

  const handleMainContainer = () => {
    var style = {};
    if (offsetY > 50)
      style = {
        borderRight: "1px solid rgba(0, 0, 0, 1)",
        width: "20px",
      };
    return style;
  };

  const handleVerticalButtons = () => {
    var style = {};
    if (offsetY > 50)
      style = {
        display: "none",
      };
    return style;
  };

  return (
    <div className={styles.mainContainer} style={handleMainContainer()}>
      <div className={styles.upperContainer}>
        <div className={styles.logoBig} style={handleNavbar()}>
          AYRE <br />
          GREEN <br />
          FINANCE <br />
        </div>
        <div className={styles.logoSmall}>
          A <br />
          G <br />
          F <br />
        </div>
        <div className={styles.buttonContainerHorizontal}>
          <div className={styles.button}>CONTACT</div>
          <div className={styles.button}>NEWS</div>
          <div className={styles.button}>STORY</div>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.progressBar}>
          <div style={handleTitlePg()}></div>
          <div style={handleObjectivesPg()}></div>
          <div style={handleStatsPg()}></div>
          <div style={handleNewsPg()}></div>
          <div style={handleFooterPg()}></div>
        </div>
        <div
          className={styles.buttonContainerVertical}
          style={handleVerticalButtons()}
        >
          <div className={styles.button}>CONTACT</div>
          <div className={styles.button}>NEWS</div>
          <div className={styles.button}>STORY</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
