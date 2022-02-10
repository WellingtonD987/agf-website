import React from "react";
import styles from "../styles/FooterPg.module.scss";

const FooterPg: React.FC<{ offsetY: number }> = ({ offsetY }) => {
  const handleBackground = () => {
    //return { transform: `translateX(${(offsetY - 4800) * 0.5}px)` };
    return {};
  };
  return (
    <div>
      <div className={styles.background} style={handleBackground()}></div>
      <div className={styles.contentContainer}>
        <div className={styles.action}>
          Find Out More<div className={styles.arrow}></div>
        </div>
        <div className={styles.title}>
          SUSTAINABLE SOLUTIONS
          <div className={styles.copyright}>
            © 2021 AYRE GREEN FINANCE - All Rights Reserved | Created by
            Wellington Q. Dulay
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPg;
