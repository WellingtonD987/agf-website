import React from "react";
import styles from "../styles/NewsPg.module.scss";

const NewsPg = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>Latest News</div>
      <div className={styles.description}>
        We are always exploring the latest innovations. Hear what our experts
        have to say
      </div>
      <div className={styles.newsContainer}></div>
      <div className={styles.newsButtons}></div>
    </div>
  );
};

export default NewsPg;
