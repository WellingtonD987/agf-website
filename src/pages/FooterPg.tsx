import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styles from "../styles/FooterPg.module.scss";
import { ReactComponent as Arrow } from "../svg/upper-right-arrow-svgrepo-com.svg";

const FooterPg: React.FC<{
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
      <div className={styles.upperContainer}>
        <div className={styles.title}>ECO FINTECH</div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.title}>AYRE GREEN FINANCE</div>
        <div className={styles.copyright}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui corrupti
          et voluptas voluptatum error sed nihil nostrum unde neque
          necessitatibus vel facere, molestias, ut, nam minus illo libero
          suscipit tenetur.
        </div>
        {/* things to add: menu, socials, location, legal, contact details, sign up */}
      </div>
    </div>
  );
};

export default FooterPg;
