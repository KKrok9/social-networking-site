import React from "react";
import styles from "../../../../styles/Friend.module.css";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const Friend = (props) => {
  const letter = props.name[0].toUpperCase();
  const color = props.color;
  const email = props.email;
  const showProfile = () => {
    props.handleChangeFriendProfileData(email);
    console.log("clicked");
  };
  return (
    <div className={styles["friend-container"]}>
      <div className="photo-column">
        <Link to="/friend-profile">
          <Avatar
            style={{ backgroundColor: color, color: "white" }}
            onClick={showProfile}
            href="/friend-profile"
          >
            {letter}
          </Avatar>
        </Link>
      </div>

      <p className={styles["data-column"]}>
        {props.name} {props.surname}
      </p>
      <p className={styles["activity-column"]}>●</p>
    </div>
  );
};

export default Friend;
