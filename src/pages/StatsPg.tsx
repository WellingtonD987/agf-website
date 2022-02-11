import React, { useRef, useState } from "react";
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
  setIsVisible(isVisible);

  // hacky way...
  const [offsetRoot, setOffsetRoot] = useState(0);
  const [firstEntry, setFirstEntry] = useState(true);
  if (isVisible && firstEntry) {
    console.log("Please Reload Page if Resizing Window to adjust OffsetFactor");
    setOffsetRoot(offsetY);
    setFirstEntry(false);
  }
  //console.log(offsetY - offsetRoot, offsetY - 2200, offsetY, offsetRoot);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.description}>
        In the 2020-21 fiscal year, AGF worked with our trusted partners to
        achieve, on average:
      </div>
      <div className={styles.container} ref={ref}>
        <div className={styles.heroA}>
          <div
            className={styles.text}
            style={{
              transform: `translateY(${(offsetY - offsetRoot) * 0.6}px)`,
            }}
          >
            27% <span>increase in financial productivity</span>
          </div>
        </div>
        <div className={styles.heroB}>
          <div
            className={styles.text}
            style={{
              transform: `translateY(${(offsetY - offsetRoot) * 0.5}px)`,
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
