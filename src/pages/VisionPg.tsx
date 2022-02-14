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
      <div className={styles.leftContainer}>
        <div className={styles.title}>Our Vision</div>
        <div className={styles.text}>
          Established in 2015, Ayre Green Finace was developed to create
          solutions that leveraged the latest technology to create finanical
          solutions that are ecologocially sensitive.
        </div>
        <div className={styles.textPersist}>
          Our vision is to capture bussiness' finanical goals and optimise
          existing systems with the latest research and science on Eco-FinTech.
        </div>
        <div className={styles.textBold}>
          We believe that Financial Systems can be both effective and
          ecoFriendly.
        </div>
        <div className={styles.button}>OUR STORY</div>
      </div>
      <div className={styles.rightContainer}></div>
    </div>
  );
};

export default VisionPg;
