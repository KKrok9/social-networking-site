import React from "react";
import styles from "../../../../../styles/Post.module.css";
const Post = () => {
  return (
    <div className={styles["post-container"]}>
      <div className={styles["column-1"]}>
        <p>ZDJECIE</p>
        <p>ILOSC LIKE</p>
      </div>

      <div className={styles["column-2"]}>
        <p>TRESC</p>
      </div>
      <div className={styles["column-3"]}>
        <p>POLUB</p>
      </div>
    </div>
  );
};
export default Post;
