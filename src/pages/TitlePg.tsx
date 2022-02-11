import React, { useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styles from "../styles/TitlePg.module.scss";

const TitlePg: React.FC<{
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsVisible }) => {
  // https://usehooks-ts.com/react-hook/use-intersection-observer
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  setIsVisible(isVisible);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.title}>
        The Global Leader for
        <span className={styles.titleHighlight}> Green</span> FinTech Solutions,{" "}
        <br />
      </div>
      <div className={styles.copyright}>
        © 2021 AYRE GREEN FINANCE - All Rights Reserved
      </div>
      <div className={styles.hero}></div>
    </div>
  );
};

export default TitlePg;
