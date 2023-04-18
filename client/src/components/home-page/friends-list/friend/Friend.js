import React from "react";
import styles from "../../../../styles/Friend.module.css";
const Friend = () => {
  return (
    <div className={styles["friend-container"]}>
      <p className={styles["photo-column"]}>PHOTO</p>
      <p className={styles["data-column"]}>Natan Ake</p>
      <p className={styles["activity-column"]}>●</p>
    </div>
  );
};

export default Friend;
