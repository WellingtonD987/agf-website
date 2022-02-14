import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import styles from "../styles/VisionPg.module.scss";
import image from "../images/space.jpg";

const VisionPg: React.FC<{
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
      <div className={styles.leftContainer}></div>
      <div className={styles.rightContainer}></div>
    </div>
  );
};

export default VisionPg;
