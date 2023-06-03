import React from "react";
import styles from "../../../styles/Publications.module.css";
import InputPost from "./InputPost";
import Posts from "./posts/Posts";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import { decodeJWT } from "../../../utils/decode";

const ButtonStyles = {
  width: "15%",
  height: "20%",
  marginTop: "2%",
  fontSize: "large",
  backgroundColor: "var(--main-blue)",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s ease-in-out",
  color: "#4b4453",
  ":hover": {
    color: "white",
    backgroundColor: "var(--lighter-blue)",
    transform: "translateY(-1px)",
  },
};

const Publications = (props) => {
  const [postContent, setPostContent] = useState("");
  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(decodeJWT);
  }, []);
  const currentDate = new Date();

  const [posts, setPosts] = useState([]);

  async function getPosts(req, res) {
    try {
      const response = await fetch("http://localhost:5000/get-posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPosts(data.reverse());
    } catch (error) {
      console.error("something went wrong : ", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  async function addPost() {
    if (postContent.length > 0) {
      try {

        const response = await fetch(
          "http://localhost:5000/add-post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: postContent,
              likedBy: [],
              dateOfAddition: currentDate,
              author: userData,
            }),
          },
          getPosts()
        );

        const data = await response.json();
        setPostContent("");
        console.log(data);
    
        getPosts();
      } catch (err) {
        console.error("something went wrong!", err);
      }
    }
    return;
  }

  return (
    <div className={styles["publications-container"]}>
      <div className={styles["input-container"]}>
        <InputPost
          onChange={handlePostContentChange}
          value={postContent}
        ></InputPost>
        <Button
          sx={ButtonStyles}
          variant="contained"
          endIcon={<SendIcon />}
          onClick={addPost}
        >
          SEND
        </Button>
      </div>
      <div className={styles["posts-container"]}>
        <Posts posts={posts} getPosts={getPosts}></Posts>
      </div>
    </div>
  );
};

export default Publications;
