import React, { useEffect, useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import styles from "../styles/Navbar.module.scss";

// incredible parralax explaination: https://www.youtube.com/watch?v=Q5y6pwoE3cM
//style={{ transform: `translateX(${(offsetY) * 0.5}px)` }}

// how do we pass in a state? https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript
const Navbar: React.FC<{
  offsetY: number;
  isTitlePgVisible: boolean;
  isObjectivesPgVisible: boolean;
  isVisionPgVisible: boolean;
  isNewsPgVisible: boolean;
  isFooterPgVisible: boolean;
  backgroundColor: string;
}> = ({
  offsetY,
  isTitlePgVisible,
  isObjectivesPgVisible,
  isVisionPgVisible,
  isNewsPgVisible,
  isFooterPgVisible,
  backgroundColor,
}) => {
  const handleTitlePg = () => {
    var style = {};
    if (isTitlePgVisible && !isVisionPgVisible) {
      style = { height: `50vh`, borderRadius: "500px" };
    }
    return style;
  };
  const handleVisionPg = () => {
    var style = {};
    if (isVisionPgVisible) {
      style = { height: `50vh`, borderRadius: "500px" };
    }
    return style;
  };
  const handleObjectivesPg = () => {
    var style = {};
    if (isObjectivesPgVisible && !isVisionPgVisible) {
      style = { height: `50vh`, borderRadius: "500px" };
    }
    return style;
  };
  const handleNewsPg = () => {
    var style = {};
    if (isNewsPgVisible && !isObjectivesPgVisible) {
      style = { height: `50vh`, borderRadius: "500px" };
    }
    return style;
  };
  const handleFooterPg = () => {
    var style = {};
    if (isFooterPgVisible && !isNewsPgVisible) {
      style = { height: `50vh`, borderRadius: "500px" };
    }
    return style;
  };

  /* 
  there are 3 states to this navbar: 
   - STATE 0: vertical navBar (always & when hovered)
   - STATE 1: closed vertical navBar (always when offset > 500)
   - STATE 2: horizontal navBar (always when window.width < 768)
   - STATE 3: closed horizontal navBar 
  */
  const [isOpen, setIsOpen] = useState(false);
  const navbarFactor = 50;

  // TODO: find out if you can extend {}
  const handleMainContainer = () => {
    var style = {};
    if (offsetY > navbarFactor && isOpen && window.innerWidth > 768) {
      style = {
        borderRight: "1px solid rgba(0, 0, 0, 1)",
        backgroundColor: backgroundColor,
      };
    } else if (offsetY > navbarFactor && window.innerWidth > 768) {
      style = {
        borderRight: "1px solid rgba(0, 0, 0, 1)",
        backgroundColor: backgroundColor,
        width: "20px",
      };
    } else if (offsetY > navbarFactor && isOpen) {
      style = {
        borderRight: "1px solid rgba(0, 0, 0, 1)",
      };
    } else if (offsetY > navbarFactor) {
      style = {
        borderRight: "1px solid rgba(0, 0, 0, 1)",
        width: "20px",
      };
    }
    return style;
  };
  const handleLogoBig = () => {
    var style = {};
    if (offsetY > navbarFactor && !isOpen) {
      style = {
        color: "rgba(0,0,0,0)",
      };
    }
    return style;
  };

  //const [vertButtonLoad, setVertButtonLoad] = useState(false);
  const handleVerticalButtons = () => {
    var style = {};
    if (offsetY > navbarFactor && !isOpen) {
      style = {
        transform: "translateX(-200px)",
        opacity: "0",
        /*
        animation: "",
        animationFillMode: "",
        */
      };
    }
    return style;
  };

  const handleHamburgerClick = () => {
    return isOpen && offsetY > navbarFactor
      ? setIsOpen(false)
      : setIsOpen(true);
  };
  const handleHamburger = () => {
    // disabled styling
    var style = {};
    if (offsetY < navbarFactor) style = { backgroundColor: "transparent" };
    return style;
  };
  const handleTopLine = () => {
    var style = {};
    if (offsetY < navbarFactor) {
      style = { opacity: "0" };
    } else if (isOpen) {
      style = { transform: "translateY(4px) rotate(45deg)" };
    }
    return style;
  };
  const handleMidLine = () => {
    var style = {};
    if (isOpen || offsetY < navbarFactor) {
      style = { opacity: "0" };
    }
    return style;
  };
  const handleBotLine = () => {
    var style = {};
    if (offsetY < navbarFactor) {
      style = { opacity: "0" };
    } else if (isOpen) {
      style = { transform: "translateY(-4px) rotate(-45deg)" };
    }
    return style;
  };

  return (
    <div className={styles.mainContainer} style={handleMainContainer()}>
      <div className={styles.upperContainer}>
        <div className={styles.logoBig} style={handleLogoBig()}>
          AYRE <br />
          GREEN <br />
          FINANCE <br />
        </div>
        <div className={styles.logoSmall}>
          A <br />
          G <br />
          F <br />
        </div>
        <div
          className={styles.hamburger}
          onClick={() => handleHamburgerClick()}
          style={handleHamburger()}
        >
          <div className={styles.topLine} style={handleTopLine()}></div>
          <div className={styles.midLine} style={handleMidLine()}></div>
          <div className={styles.botLine} style={handleBotLine()}></div>
        </div>
        <div className={styles.buttonContainerHorizontal}>
          <div
            className={styles.button}
            style={{ backgroundColor: backgroundColor }}
          >
            CONTACT
          </div>
          <div
            className={styles.button}
            style={{ backgroundColor: backgroundColor }}
          >
            NEWS
          </div>
          <div
            className={styles.button}
            style={{ backgroundColor: backgroundColor }}
          >
            STORY
          </div>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.progressBar}>
          <div style={handleTitlePg()}></div>
          <div style={handleVisionPg()}></div>
          <div style={handleObjectivesPg()}></div>
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
