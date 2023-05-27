import React from "react";
import styles from "../../../../../styles/Post.module.css";

const Post = (props) => {
  const dateString = props.date;
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${hours}:${minutes}, ${day}/${month}/${year}`;
  return (
    <div className={styles["post-container"]}>
      <div className={styles["column-1"]}>
        <div className={styles["column-1--photo"]}>
          <img alt="profile-pic" />
        </div>
      </div>

      <div className={styles["column-2"]}>
        <div className={styles["column-2--userData"]}>
          <p className={styles["column-2--textContent"]}>
            {props.authorName} {props.authorSurname}
          </p>
        </div>
        <div className={styles["column-2--postContent"]}>
          <p className={styles["column-2--textContent"]}>{props.content}</p>
        </div>
        <div className={styles["column-2--date"]}>
          <p className={styles["column-2--textContent"]}>{formattedDate}</p>
        </div>
      </div>
      <div className={styles["column-3"]}>
        <div className={styles["column-3--likes"]}>
          <label className={styles["column-3--item"]}>{props.likedBy.length}</label>
          <button className={styles["column-3--item"]}>POLUB</button>
        </div>
      </div>
    </div>
  );
};
export default Post;
