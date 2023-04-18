import React from "react";
import styles from "../../../styles/InputPost.module.css";
const InputPost = () => {
  return (
    <textarea
      placeholder="What's up?"
      className={styles["input-posts"]}
    ></textarea>
  );
};

export default InputPost;
