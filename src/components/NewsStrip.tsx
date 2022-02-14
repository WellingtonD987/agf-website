import React from "react";
import styles from "../styles/NewsStrip.module.scss";
import NewsCard from "./NewsCard";

const NewsStrip: React.FC<{
  title: string;
  genre: string;
  description: string;
  link: string;
  isLeft: boolean;
}> = ({ title, genre, description, link, isLeft }) => {
  /*
  PROCESS:
   - Fetch data from API with key: genre,
   - Sort data in chronological order, 
   - Take ONLY the first two data points,
   - spread data across NewsCard's A & B
  */

  return (
    <div className={isLeft ? styles.mainContainerA : styles.mainContainerB}>
      <div className={styles.articles}>
        <NewsCard
          title="Test"
          image=""
          description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ..."
          link=""
          isCardA={true}
        />
        <NewsCard
          title="Test"
          image=""
          description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ..."
          link=""
          isCardA={false}
        />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}></div>
        <div className={styles.link}>SEE MORE</div>
      </div>
    </div>
  );
};

export default NewsStrip;
