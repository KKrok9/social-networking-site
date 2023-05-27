import React from "react";
import Post from "./post/Post";
import styles from "../../../../styles/Posts.module.css";
const Posts = (props) => {
  const posts = props.posts;
  return (
    <div className={styles["posts-container"]}>
      {posts.map((element) => {
        return (
          <Post
            key={element._id}
            authorName={element.author.name}
            authorSurname={element.author.surname}
            date={element.dateOfAddition}
            content={element.content}
            likedBy={element.likedBy}
          ></Post>
        );
      })}
    </div>
  );
};

export default Posts;
