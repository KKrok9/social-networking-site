import React from "react";
import styles from "../../../../../styles/Post.module.css";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { decodeJWT } from "../../../../../utils/decode"
const Post = (props) => {
  const dateString = props.date;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };
  const [colorAndName, setColorAndName] = useState({});
  const [name, setName] = useState("");
  const [isLikedByMe, setIsLikedByMe]=useState();

  useEffect(() => {
    setName(colorAndName.userName);
  }, [colorAndName]);

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(decodeJWT);
  }, []);

  useEffect(()=>{
    if(userData && props.likedBy.includes(userData.email)){
      setIsLikedByMe(true);
    }
  },[userData])

  useEffect(() => {
    async function fetchColorAndName(req, res) {
      const email = props.authorEmail;

      try {
        const response = await fetch(
          "http://localhost:5000/get-profile-color",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        const data = await response.json();
        setColorAndName(data);
      } catch (error) {
        console.error("Blad ", error);
      }
      return;
    }
    fetchColorAndName();
  }, []);

  const formattedDate = `${formatNumber(hours)}:${formatNumber(
    minutes
  )}, ${day}/${month}/${year}`;

  async function likePost(req, res) {
    const postId = props.postId;
    const email = userData.email;
    const likerData = {
      postId,
      email
    }
    try {
      const response = await fetch("http://localhost:5000/like-post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(likerData),
        });
        if(response.status===201){
          setIsLikedByMe(false)
        }
        if(response.status===200){
          setIsLikedByMe(true);
        }
    } catch {
        console.error(res.status.error);
    }
    props.getPosts();
    return;
  }

  return (
    <div className={styles["post-container"]}>
      <div className={styles["column-1"]}>
        <div className={styles["column-1--photo"]}>
          <Avatar
            style={{
              backgroundColor: colorAndName.profilePicColor,
              color: "white",
            }}
          >
            {name && name.length > 0 ? name[0] : ""}
          </Avatar>
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
          <label className={styles["column-3--item"]}>
            {props.likedBy.length}
          </label>
          <div className={styles["column-3--item"]}>
            <IconButton aria-label="Like" onClick={likePost} style={{ color: isLikedByMe ? 'red' : 'gray' }}>
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
