import React from "react";
import styles from "../styles/NewsCard.module.scss";

const NewsCard: React.FC<{
  title: string;
  image: string;
  description: string;
  link: string;
  isCardA: boolean;
}> = ({ title, image, description, link, isCardA }) => {
  return (
    <div className={isCardA ? styles.mainContainerA : styles.mainContainerB}>
      <div className={styles.image}></div>
      <div className={styles.descriptionBox}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default NewsCard;
