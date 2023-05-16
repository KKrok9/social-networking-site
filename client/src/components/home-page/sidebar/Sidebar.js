import React from "react";
import styles from "../../../styles/Sidebar.module.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";

const buttonStyles = {
  width: "80%",
  height: "8%",
  margin: "auto",
  color: "#4b4453",
  backgroundColor: "var(--main-blue)",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.25s ease-out",
  ":hover": {
    color: "white",
    backgroundColor: "var(--lighter-blue)",
    transform: "translateY(-2px)",
  },
};

const Sidebar = (props) => {
  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-head--section"]}>
        <p className={styles["sidebar-header"]}>SeeYaSoon</p>
        <p className={styles["sidebar-profile--info"]}>Kacper Krok</p>
        <p className={styles["sidebar-date"]}>04/04/2023</p>
      </div>
      <div className={styles["sidebar-btns--section"]}>
        <Button
          variant="contained"
          endIcon={<AccountBoxIcon />}
          sx={buttonStyles}
        >
          YOUR PROFILE
        </Button>
        <Button variant="contained" sx={buttonStyles} endIcon={<ForumIcon />}>
          MESSAGES
        </Button>
        <Button
          variant="contained"
          sx={buttonStyles}
          endIcon={<NotificationsIcon />}
        >
          NOTIFICATIONS
        </Button>
        <Button
          variant="contained"
          sx={buttonStyles}
          endIcon={<LogoutIcon />}
          onClick={() => props.toggleIsLoggedIn(false)}
        >
          LOGOUT
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
