import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import styles from "../styles/StatsPg.module.scss";

const StatsPg: React.FC<{
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  offsetY: number;
}> = ({ offsetY, setIsVisible }) => {
  // https://usehooks-ts.com/react-hook/use-intersection-observer
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  useEffect(() => {
    setIsVisible(isVisible);
  }, [isVisible, setIsVisible]);

  // hacky way...
  const [offsetRoot, setOffsetRoot] = useState(0);
  const [firstEntry, setFirstEntry] = useState(true);
  if (isVisible && firstEntry) {
    console.log("start!");
    setOffsetRoot(offsetY);
    setFirstEntry(false);
  }

  let height = 200;
  let deltaOffset = offsetY - offsetRoot;

  const handleHeroA = () => {
    const translateSpeed = 0.6;
    var translateFactor = -height + deltaOffset * translateSpeed;
    return translateFactor;
  };
  const handleHeroB = () => {
    var translateSpeed = 0.7;
    var translateFactor = -height + deltaOffset * translateSpeed;
    return translateFactor;
  };

  return (
    <div className={styles.mainContainer} ref={ref}>
      <div className={styles.description}>
        In the 2020-21 fiscal year, AGF worked with our trusted partners to
        achieve, on average:
      </div>
      <div className={styles.container}>
        <div className={styles.heroA}>
          <div
            className={styles.text}
            style={{
              transform: `translateY(${handleHeroA()}px)`,
            }}
          >
            27% <span>increase in financial productivity</span>
          </div>
        </div>
        <div className={styles.heroB}>
          <div
            className={styles.text}
            style={{ transform: `translateY(${handleHeroB()}px)` }}
          >
            42% <span>decrease in carbon emmisions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPg;
