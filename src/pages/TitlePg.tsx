import React from "react";
import styles from "../styles/TitlePg.module.scss";

const TitlePg = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        The Global Leader for
        <span className={styles.titleHighlight}> Green</span> FinTech Solutions,{" "}
        <br />
      </div>
      <div className={styles.hero}></div>
    </div>
  );
};

export default TitlePg;
