import React from "react";
import Post from "./post/Post";
import styles from "../../../../styles/Posts.module.css";
const Posts = () => {
  return (
    <div className={styles["posts-container"]}>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
      <Post className={styles["single-post"]}></Post>
    </div>
  );
};

export default Posts;
