import React from "react";
import styles from "../../styles/Home.module.css";
import Sidebar from "./sidebar/Sidebar";
import Publications from "./publications/Publications";
import Friendslist from "./friends-list/FriendsList";

const HomePage = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles["sidebar-container"]}>
        <Sidebar toggleIsLoggedIn={props.toggleIsLoggedIn}></Sidebar>
      </div>
      <div className={styles["publications-container"]}>
        <Publications></Publications>
      </div>
      <div className={styles["friendslist-container"]}>
        <Friendslist></Friendslist>
      </div>
    </div>
  );
};
export default HomePage;
