import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styles from "../styles/FooterPg.module.scss";
import { ReactComponent as Arrow } from "../svg/upper-right-arrow-svgrepo-com.svg";

const FooterPg: React.FC<{
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundColor: string;
}> = ({ setIsVisible, backgroundColor }) => {
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
        <div className={styles.logo}>
          <div className={styles.title}>AYRE GREEN FINANCE</div>
          <div className={styles.copyright}>
            © 2021 AYRE GREEN FINANCE - All Rights Reserved
          </div>
          <div className={styles.socials}>
            Connect with us on <span>Instagram,</span> <br />{" "}
            <span>Twitter,</span> and <span>LinkedIn.</span>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuTitle}>Menu</div>
          <div className={styles.menuItem}>Contact</div>
          <div className={styles.menuItem}>News</div>
          <div className={styles.menuItem}>Story</div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactsTitle}>Contacts</div>
          <div className={styles.email}>
            <strong>Email</strong> contact.us@AGF.com
          </div>
          <div className={styles.phone}>
            <strong>Phone</strong> +61 3 5550 9302
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.locationTitle}>Location</div>
          <div className={styles.phone}>
            25 Denison Road <br />
            TANKERTON, Victoria(VIC), <br />
            3921 (03) 5301 7655
          </div>
        </div>
        {/* things to add: menu, socials, location, legal, contact details, sign up */}
      </div>
    </div>
  );
};

export default FooterPg;
