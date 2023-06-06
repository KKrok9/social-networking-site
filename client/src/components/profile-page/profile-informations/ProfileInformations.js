import React from "react";
import styles from "../../../styles/ProfileInformations.module.css";
import Avatar from "@mui/material/Avatar";
const ProfileInformations = (props) => {
  const name = props.userData.name;
  const date = new Date(props.userData.birthdayDate);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date
    .getFullYear()
    .toString()}`;

  return (
    <div className={styles["container"]}>
      <div className={styles["profile-photo-section"]}>
        <Avatar
          style={{ backgroundColor: props.userData.profilePicColor, color: "white" }}
          sx={{
            width: 120,
            height: 120,
            fontSize: 60,
          }}
        >
          {name && name.length > 0 ? name[0] : ""}
        </Avatar>
      </div>
      <div className={styles["informations-section"]}>
        <p className={styles.par}>Name : {name}</p>
        <p className={styles.par}>Surname : {props.userData.surname}</p>
        <p className={styles.par}>Email : {props.userData.email}</p>
        <p className={styles.par}>Birthday : {formattedDate}</p>
      </div>
      <div className={styles["added-photos-section"]}>
        <p>Photos</p>
        <div className={styles.photos}>
          <div className={styles.photo}>1</div>
          <div className={styles.photo}>2</div>
          <div className={styles.photo}>3</div>
          <div className={styles.photo}>4</div>
          <div className={styles.photo}>5</div>
          <div className={styles.photo}>6</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInformations;
