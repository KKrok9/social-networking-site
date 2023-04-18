import React from "react";
import styles from "../../../styles/Header.module.css";
import Background from "../background/Background";
const Header = (props) => {
  return (
    <div className={styles["header-outer_div"]}>
      <Background className={styles["background-login"]}></Background>
      <div className={styles["header-text__section"]}>
        <h1 className={styles.header1}>Stay close to your friends</h1>
        <h2 className={styles.header2}>
          <span className={styles.highlight}>Even if they are far away</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
