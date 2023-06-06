import React from "react";
import Post from "../../home-page/publications/posts/post/Post";
import styles from "../../../styles/ProfileActivity.module.css";
import { useState, useEffect } from "react";

const ProfileActivity = (props) => {
  const [posts, setPosts] = useState([]);
  const email = props.userData?.email?.toString();

  async function getPosts() {
    try {
      const response = await fetch("http://localhost:5000/get-friend-posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setPosts(data.reverse());
      console.log(data);
    } catch (error) {
      console.error("Błąd", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [email]);

  // reszta kodu w komponencie...

  // reszta kodu w komponencie...

  return (
    <div className={styles["posts-container"]}>
      {posts.length === 0 ? (
        <p className={styles.parag}>There's nothing to see</p>
      ) : (
        posts.map((element) => (
          <Post
            key={element._id}
            postId={element._id}
            authorName={element.author.name}
            authorSurname={element.author.surname}
            authorEmail={element.author.email}
            date={element.dateOfAddition}
            content={element.content}
            likedBy={element.likedBy}
            getPosts={getPosts}
          />
        ))
      )}
    </div>
  );
};
export default ProfileActivity;
