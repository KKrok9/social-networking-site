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
            postId = {element._id}
            authorName={element.author.name}
            authorSurname={element.author.surname}
            authorEmail={element.author.email}
            date={element.dateOfAddition}
            content={element.content}
            likedBy={element.likedBy}
            getPosts={props.getPosts}
          ></Post>
        );
      })}
    </div>
  );
};

export default Posts;
