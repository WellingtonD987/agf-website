import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import styles from "../styles/ObjectivesPg.module.scss";
import image from "../images/space.jpg";

const ObjectivesPg: React.FC<{
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
      <div className={styles.rightContainer}>
        <div className={styles.title}>How do we use Eco-FinTech?</div>
        <div className={styles.text}>
          Our company is built on many multi-disiciplinary sectors each that
          culminate towards creating solutions that make a difference.
        </div>
        <div className={styles.textPersist}>
          AGF works with leading reasearchers and scientists to develop
          solutions that are tested, prototyped and algorithmically designed for
          success.
        </div>
        <div className={styles.text}>
          We always aim to be at the absolute forefront of Eco-FinTech, and our
          research department ensures this.
        </div>
        <div className={styles.button}>NEWS</div>
      </div>
    </div>
  );
};

export default ObjectivesPg;
