import React, { useEffect, useState } from "react";
import styles from "../styles/ContactButton.module.scss";

import ContactUsPg from "../pages/ContactPg";

const ContactButton: React.FC<{
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isVisible, setIsVisible }) => {
  // https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react?page=1&tab=votes#tab-top
  const ContactBtn = () => (
    <div className={styles.container} onClick={() => swapState()}>
      <div className={styles.button}>CONTACT US</div>
    </div>
  );
  const ContactPg = () => (
    <div style={{ display: "none" }}>
      <div className={styles.container} onClick={() => swapState()}>
        <div className={styles.button} style={{ backgroundColor: "grey" }}>
          CLOSE
        </div>
      </div>
    </div>
  );

  function swapState() {
    isVisible === false ? setIsVisible(true) : setIsVisible(false);
  }
  // we assume that no browser is larger than 50*SIZE_OF_BUTTON
  const handleBackground = () => {
    var backgroundScale = {};
    isVisible
      ? (backgroundScale = {
          backgroundColor: "#3d3d3d",
          transform: `scale(${50})`,
        })
      : (backgroundScale = {
          backgroundColor: "#3d3d3d",
          transform: `scale(${0})`,
        });
    return backgroundScale;
  };

  // RETURN
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.button} style={handleBackground()}></div>
        </div>
        <ContactUsPg isVisible={isVisible} setIsVisible={setIsVisible} />
        {isVisible ? <ContactPg /> : <ContactBtn />}
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
