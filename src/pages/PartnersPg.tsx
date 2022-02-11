import React from "react";
import styles from "../styles/PartnersPg.module.scss";

import partnerData from "../data/partnersData";
import PartnerCard from "../components/PartnerCard";

const PartnersPg = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <div className={styles.title}>AGF PARTNERS</div>
      </div>
      <div className={styles.container}>
        <div className={styles.cardContainerA}>
          {partnerData.map((partnerData) => (
            <PartnerCard
              {...partnerData}
              key={partnerData.color}
              groupA={true}
            />
          ))}
        </div>
        <div className={styles.cardContainerB}>
          {partnerData.map((partnerData) => (
            <PartnerCard
              {...partnerData}
              key={partnerData.color}
              groupA={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPg;
