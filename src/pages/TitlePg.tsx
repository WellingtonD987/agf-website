import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styles from "../styles/TitlePg.module.scss";
import headerVideo from "../video/clouds.mp4";

const TitlePg: React.FC<{
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
      {/*https://youtu.be/PYFltdGJ-Rc */}
      <video className={styles.hero} autoPlay loop muted>
        <source src={headerVideo} type="video/mp4" />
      </video>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          The Global Leader for
          <span className={styles.titleHighlight}> Green</span> FinTech
          Solutions, <br />
        </div>
        <div className={styles.copyright}>
          © 2021 AYRE GREEN FINANCE - All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default TitlePg;
