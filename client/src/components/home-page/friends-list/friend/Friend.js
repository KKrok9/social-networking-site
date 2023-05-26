import React from "react";
import styles from "../../../../styles/Friend.module.css";
import Avatar from "@mui/material/Avatar";

const Friend = (props) => {
  const letter = props.name[0].toUpperCase();
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const randomColor = getRandomColor();

  return (
    <div className={styles["friend-container"]}>
      <div className="photo-column">
        <Avatar style={{ backgroundColor: randomColor, color: "white" }}>
          {letter}
        </Avatar>
      </div>

      <p className={styles["data-column"]}>
        {props.name} {props.surname}
      </p>
      <p className={styles["activity-column"]}>●</p>
    </div>
  );
};

export default Friend;
