import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styles from "../styles/NewsPg.module.scss";

const NewsPg: React.FC<{
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsVisible }) => {
  // https://usehooks-ts.com/react-hook/use-intersection-observer
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  useEffect(() => {
    setIsVisible(isVisible);
  }, [isVisible, setIsVisible]);

  return (
    <div className={styles.container} ref={ref}>
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
