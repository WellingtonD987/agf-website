import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styles from "../styles/NewsPg.module.scss";

import NewsStrip from "../components/NewsStrip";

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
    <div className={styles.mainContainer} ref={ref}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Latest News</div>
        <div className={styles.description}>Hear from our experts</div>
      </div>
      <div>
        <NewsStrip
          title="Tech"
          genre="Tech"
          description=""
          link=""
          isLeft={true}
        />
        <NewsStrip
          title="Culture"
          genre="Culture"
          description=""
          link=""
          isLeft={false}
        />
      </div>
    </div>
  );
};

export default NewsPg;
