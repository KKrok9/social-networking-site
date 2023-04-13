import React from "react";
import styles from "../../../styles/Publications.module.css";
import InputPost from "./InputPost";
import Posts from "./posts/Posts";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

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

const Publications = () => {
  return (
    <div className={styles["publications-container"]}>
      <div className={styles["input-container"]}>
        <InputPost></InputPost>
        <Button sx={ButtonStyles} variant="contained" endIcon={<SendIcon />}>
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
