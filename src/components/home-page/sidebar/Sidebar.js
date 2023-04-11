import React from "react";
import styles from "../../../styles/Sidebar.module.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
const Sidebar = () => {
  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-head--section"]}>
        <p className={styles["sidebar-header"]}>SeeYaSoon</p>
        <p className={styles["sidebar-profile--info"]}>Kacper Krok</p>
        <p className={styles["sidebar-date"]}>04/04/2023</p>
      </div>
      <div className={styles["sidebar-btns--section"]}>
        <Button variant="contained" className={styles["sidebar-btn"]} endIcon={<AccountBoxIcon/>}>
          YOUR PROFILE
        </Button>
        <Button variant="contained" className={styles["sidebar-btn"]} endIcon={<NotificationsIcon/>}>
          MESSAGES
        </Button>
        <Button variant="contained" className={styles["sidebar-btn"]} endIcon={<ForumIcon/>}>
          NOTIFICATIONS
        </Button>
        <Button variant="contained" className={styles["sidebar-btn"]} endIcon={<LogoutIcon/>}>
          LOGOUT
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
