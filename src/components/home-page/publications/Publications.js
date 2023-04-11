import React from "react";
import styles from "../../../styles/Publications.module.css";
import InputPost from "./InputPost";
import Posts from "./posts/Posts";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
const Publications = () => {
  return (
    <div className={styles["publications-container"]}>
      <div className={styles["input-container"]}>
        <InputPost></InputPost>
        <Button
          variant="contained"
          className={styles["send-post--btn"]}
          endIcon={<SendIcon />}
        >
          SEND
        
        </Button>
      </div>
      <div className={styles["posts-container"]}>
        <Posts></Posts>
      </div>
    </div>
  );
};

export default Publications;
