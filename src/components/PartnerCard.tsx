import React, { useEffect, useRef, useState } from "react";
import { card } from "../data/partnersData";
import styles from "../styles/PartnersPg.module.scss";

interface cardProps extends card {
  groupA: boolean;
}

const PartnerCard: React.FC<cardProps> = ({ color, groupA }) => {
  return (
    <div>
      {/*
      <div className={styles.card} style={{ backgroundColor: color }}>
        {color}
      </div>
      */}
      <div className={styles.card} style={{ backgroundColor: "white" }}></div>
    </div>
  );
};

export default PartnerCard;
