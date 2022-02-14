import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import styles from "../styles/App.module.scss";
import loadStyles from "../styles/LoadAnimations.module.scss";

import Navbar from "./Navbar";
import ContactButton from "./ContactButton";
import TitlePg from "../pages/TitlePg";
import ObjectivesPg from "../pages/ObjectivesPg";
import StatsPg from "../pages/StatsPg";
import PartnersPg from "../pages/PartnersPg";
import NewsPg from "../pages/NewsPg";
import FooterPg from "../pages/FooterPg";
import VisionPg from "../pages/VisionPg";

const App: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  console.log(offsetY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isTitlePgVisible, setIsTitlePgVisible] = useState(false);
  const [isVisionPgVisible, setIsVisionPgVisible] = useState(false);
  const [isObjectivesPgVisible, setIsObjectivesPgVisible] = useState(false);
  //const [isStatsPgVisible, setIsStatsPgVisible] = useState(false);
  const [isNewsPgVisible, setIsNewsPgVisible] = useState(false);
  const [isFooterPgVisible, setIsFooterPgVisible] = useState(false);

  const [showContactPg, setShowContactPg] = useState(false);
  useEffect(() => {
    if (showContactPg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showContactPg]);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const handleBackground = () => {
    var style = {};
    if (isObjectivesPgVisible && !isTitlePgVisible)
      style = { backgroundColor: "rgb(0, 140, 255)" };
    return style;
  };

  return (
    <div className={styles.mainContainer} style={handleBackground()}>
      <Navbar
        offsetY={offsetY}
        isTitlePgVisible={isTitlePgVisible}
        isObjectivesPgVisible={isObjectivesPgVisible}
        isVisionPgVisible={isVisionPgVisible}
        isNewsPgVisible={isNewsPgVisible}
        isFooterPgVisible={isFooterPgVisible}
      />
      <div className={styles.pagesContainer}>
        <TitlePg setIsVisible={setIsTitlePgVisible} />
        <VisionPg setIsVisible={setIsVisionPgVisible} />
        <ObjectivesPg setIsVisible={setIsObjectivesPgVisible} />
        {/*<PartnersPg />*/}
        <NewsPg setIsVisible={setIsNewsPgVisible} />
        <FooterPg setIsVisible={setIsFooterPgVisible} />
      </div>
    </div>
  );
};

export default App;
