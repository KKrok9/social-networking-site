import React from "react";
import styles from "../../../styles/InputPost.module.css";

const InputPost = (props) => {
  return (
    <textarea
      placeholder="What's up?"
      className={styles["input-posts"]}
      value={props.value}
      onChange={props.onChange}
    ></textarea>
  );
};

export default InputPost;
