import React, { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import styles from "../styles/ObjectivesPg.module.scss";

const ObjectivesPg: React.FC<{
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  offsetY: number;
}> = ({ offsetY, setIsVisible }) => {
  // https://usehooks-ts.com/react-hook/use-intersection-observer
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  setIsVisible(isVisible);

  // im calling defeat and letting this number exist...
  const offsetRoot = 1500;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container} ref={ref}>
        <div className={styles.title}>
          We optimize your company objectives to fit the growing demands for
          <span className={styles.titleHighlight}>
            {" "}
            ecological sensitivity.
          </span>
        </div>
        <div className={styles.text}>
          We are a Financial Technology Consultancy Firm, that focuses on
          creating green solutions that make a positive impact on the world's
          ecosystem.
          <br />
          <br /> Our focus is to provide financial solutions that leverage the
          latest modern technology to put your company at the forefront of
          ecological awareness.
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{
            transform: `translateY(${(offsetY - offsetRoot) * -0.4}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ObjectivesPg;
