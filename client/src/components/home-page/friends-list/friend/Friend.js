import React from "react";
import styles from "../../../../styles/Friend.module.css";
import Avatar from "@mui/material/Avatar";

const Friend = (props) => {
  const letter = props.name[0].toUpperCase();
  const color = props.color
  return (
    <div className={styles["friend-container"]}>
      <div className="photo-column">
        <Avatar style={{ backgroundColor: color, color: "white" }}>
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
