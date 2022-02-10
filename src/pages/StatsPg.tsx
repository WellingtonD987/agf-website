import React from "react";
import styles from "../styles/StatsPg.module.scss";

const StatsPg: React.FC<{ offsetY: number }> = ({ offsetY }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.description}>
        In the 2020-21 fiscal year, AGF worked with our trusted partners to
        achieve, on average:
      </div>
      <div className={styles.container}>
        <div className={styles.heroA}>
          <div
            className={styles.text}
            style={{
              transform: `translateY(${50 + (offsetY - 2200) * 0.7}px)`,
            }}
          >
            27% <span>increase in financial productivity</span>
          </div>
        </div>
        <div className={styles.heroB}>
          <div
            className={styles.text}
            style={{
              transform: `translateY(${150 + (offsetY - 2200) * 0.55}px)`,
            }}
          >
            42% <span>decrease in carbon emmisions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPg;
