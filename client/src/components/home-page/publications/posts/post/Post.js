import React from "react";
import styles from "../../../../../styles/Post.module.css";

const Post = () => {
  return (
    <div className={styles["post-container"]}>
      <div className={styles["column-1"]}>
        <div className={styles["column-1--photo"]}>
          <img alt="profile-pic" />
        </div>
      </div>

      <div className={styles["column-2"]}>
        <div className={styles["column-2--userData"]}>
          <p className={styles["column-2--textContent"]}>Imie Nazwisko</p>
        </div>
        <div className={styles["column-2--postContent"]}>
          <p className={styles["column-2--textContent"]}>Tresc posta</p>
        </div>
        <div className={styles["column-2--date"]}>
          <p className={styles["column-2--textContent"]}>Data</p>
        </div>
      </div>
      <div className={styles["column-3"]}>
        <div className={styles["column-3--likes"]}>
          <label className={styles["column-3--item"]}>200</label>
          <button className={styles["column-3--item"]}>POLUB</button>
        </div>
      </div>
    </div>
  );
};
export default Post;
