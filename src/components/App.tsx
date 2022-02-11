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

const App: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isTitlePgVisible, setIsTitlePgVisible] = useState(false);
  const [isObjectivesPgVisible, setIsObjectivesPgVisible] = useState(false);
  const [isStatsPgVisible, setIsStatsPgVisible] = useState(false);
  const [isNewsPgVisible, setIsNewsPgVisible] = useState(false);

  return (
    <div>
      <Navbar
        offsetY={offsetY}
        isTitlePgVisible={isTitlePgVisible}
        isObjectivesPgVisible={isObjectivesPgVisible}
        isStatsPgVisible={isStatsPgVisible}
        isNewsPgVisible={isNewsPgVisible}
      />
      {/*
      <ContactButton />
      */}
      <TitlePg setIsVisible={setIsTitlePgVisible} />
      <ObjectivesPg offsetY={offsetY} setIsVisible={setIsObjectivesPgVisible} />
      <StatsPg offsetY={offsetY} setIsVisible={setIsStatsPgVisible} />
      <PartnersPg />
      <NewsPg setIsVisible={setIsNewsPgVisible} />
      {/*
      <FooterPg offsetY={offsetY} />
      */}
    </div>
  );
};

export default App;
