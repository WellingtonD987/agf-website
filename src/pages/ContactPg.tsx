import React, { useEffect, useState } from "react";
import styles from "../styles/ContactPg.module.scss";
import buttonStyles from "../styles/ContactButton.module.scss";

const ContactUsPg: React.FC<{
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isVisible, setIsVisible }) => {
  function swapState() {
    isVisible === false ? setIsVisible(true) : setIsVisible(false);
  }

  const [isHidden, setIsHidden] = useState(true);
  const handleAnimationEnd = () => {
    var styleTag = {};
    if (isHidden) styleTag = { display: "none" };
    return styleTag;
  };
  useEffect(() => {
    if (isVisible) setIsHidden(false);
  }, [isVisible]);

  return (
    <div
      className={isVisible ? styles.showPg : styles.hiddenPg}
      onAnimationEnd={() => {
        if (!isVisible) setIsHidden(true);
      }}
      style={handleAnimationEnd()}
    >
      <div className={styles.upper}>
        <div className={styles.title}>
          <div>AYRE GREEN FINANCE</div>
          <div className={styles.copyright}>
            © 2021 AYRE GREEN FINANCE - All Rights Reserved <br />
            Created by Wellington Q. Dulay
          </div>
        </div>
        <div className={buttonStyles.container} onClick={() => swapState()}>
          <div
            className={buttonStyles.button}
            style={{ backgroundColor: "grey" }}
          >
            CLOSE
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}></div>
          <div className={styles.textContainer}>
            <div className={styles.description}>
              Lets create sustainable solutions, together. Schedule an
              appointment with our experts at AGF to find out how we can upgrade
              your business with the latest Eco-FinTech.
            </div>
            <div className={styles.location}>
              <div className={styles.locationTitle}>LOCATION</div>
              <div className={styles.locationAddress}></div>
              25 Denison Road <br />
              TANKERTON, Victoria(VIC), <br />
              3921 (03) 5301 7655
            </div>
            <div className={styles.btnContainer}>
              <div className={styles.emailBtn}>EMAIL US</div>
              <div className={styles.callBtn}>CALL US</div>
            </div>
            <div className={styles.signUpContainer}></div>
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.instagram}></div>
          <div className={styles.facebook}></div>
          <div className={styles.twitter}></div>
          <div className={styles.linkedIn}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPg;
