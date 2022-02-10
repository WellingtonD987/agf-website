import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar.module.scss";

// incredible parralax explaination: https://www.youtube.com/watch?v=Q5y6pwoE3cM

// how do we pass in a state? https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript
const Navbar: React.FC<{ offsetY: number }> = ({ offsetY }) => {
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.logoBig}
        //style={{ transform: `translateX(${(offsetY) * 0.5}px)` }}
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
        <div className={styles.progressDot}></div>
        <div className={styles.progressLine}></div>
        <div className={styles.progressDot}></div>
        <div className={styles.progressDot}></div>
        <div className={styles.progressDot}></div>
        <div className={styles.progressDot}></div>
      </div>
    </div>
  );
};

export default Navbar;
