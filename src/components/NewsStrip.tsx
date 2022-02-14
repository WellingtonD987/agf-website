import React from "react";
import styles from "../styles/NewsStrip.module.scss";

const NewsStrip: React.FC<{
  title: string;
  genre: string;
  description: string;
  link: string;
  isLeft: boolean;
}> = ({ title, genre, description, link, isLeft }) => {
  const handleFlip = () => {
    var style = {};
    if (!isLeft) style = { flexDirection: "row-reverse" };
    return style;
  };

  return (
    <div className={styles.mainContainer} style={handleFlip()}>
      <div className={styles.articles}></div>
      <div className={styles.titleContainer}>
        <div className={styles.title}></div>
        <div className={styles.description}></div>
        <div className={styles.link}></div>
      </div>
    </div>
  );
};

export default NewsStrip;
