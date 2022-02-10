import React, { useEffect, useState } from "react";
import styles from "../styles/ContactButton.module.scss";

import ContactUsPg from "../pages/ContactPg";

const ContactButton: React.FC = () => {
  // https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react?page=1&tab=votes#tab-top
  const ContactBtn = () => (
    <div className={styles.container} onClick={() => swapState()}>
      <div className={styles.button}>CONTACT US</div>
    </div>
  );
  const ContactPg = () => (
    <div>
      <div className={styles.container} onClick={() => swapState()}>
        <div className={styles.button}>CLOSE</div>
      </div>
    </div>
  );

  const [showContactPg, setShowContactPg] = useState(false);
  function swapState() {
    showContactPg === false ? setShowContactPg(true) : setShowContactPg(false);
  }
  const handleBackground = () => {
    var backgroundScale = {};
    showContactPg
      ? (backgroundScale = { transform: `scale(${50})` })
      : (backgroundScale = { transform: `scale(${0})` });
    return backgroundScale;
  };
  useEffect(() => {
    if (showContactPg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showContactPg]);

  // RETURN
  return (
    <div>
      <div className={styles.backgroundContainer}>
        <div className={styles.pageBackground} style={handleBackground()}></div>
      </div>
      <ContactUsPg showContactPg={showContactPg} />
      <div className={styles.mainContainer}>
        {showContactPg ? <ContactPg /> : <ContactBtn />}
        {/*
        <div className={styles.container}>
          <div className={styles.button}>NEWS</div>
        </div>
        */}
      </div>
    </div>
  );
};

export default ContactButton;
