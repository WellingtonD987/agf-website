import React from "react";
import styles from "../styles/ObjectivesPg.module.scss";

const ObjectivesPg: React.FC<{ offsetY: number }> = ({ offsetY }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.title}>
          We optimize your company objectives to fit the growing demands for
          ecological sensitivity.
        </div>
        <div className={styles.text}>
          We are a Financial Technology Consultancy Firm, that focuses on
          creating green solutions that make a positive impact on the world's
          ecosystem.
          <br />
          <br /> Our focus is to provide financial solutions that leverage the
          latest modern technology to put your company at the forefront of
          ecological awareness.
        </div>
      </div>
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{ transform: `translateY(${(offsetY - 1400) * -0.5}px)` }}
        ></div>
      </div>
    </div>
  );
};

export default ObjectivesPg;
