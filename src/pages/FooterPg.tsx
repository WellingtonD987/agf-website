import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styles from "../styles/FooterPg.module.scss";
import buttonStyles from "../styles/ContactButton.module.scss";

const FooterPg: React.FC<{
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  offsetY: number;
}> = ({ setIsVisible, offsetY }) => {
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

  //let height = 200;
  let deltaOffset = offsetY - offsetRoot;
  const handleBackground = () => {
    return { transform: `translateX(calc(-100vw + (${deltaOffset} * 0.5))` };
  };

  return (
    <div>
      <div
        className={styles.background}
        style={handleBackground()}
        ref={ref}
      ></div>
      <div className={styles.contentContainer}>
        <div className={styles.action} style={{ display: "none" }}>
          Contact us to Find Out More<div className={styles.arrow}></div>
          <div className={styles.buttonSpaceContainer}>
            <div className={styles.buttonSpace}></div>
          </div>
        </div>
        <div className={styles.title}>
          SUSTAINABLE SOLUTIONS
          <div className={styles.copyright}>
            © 2021 AYRE GREEN FINANCE - All Rights Reserved | Created by
            Wellington Q. Dulay
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPg;
