import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Sidebar from "./sidebar/Sidebar";
import Publications from "./publications/Publications";
import Friendslist from "./friends-list/FriendsList";
import { decodeJWT } from "../../utils/decode";

const HomePage = (props) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(decodeJWT);
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles["sidebar-container"]}>
        <Sidebar
          toggleIsLoggedIn={props.toggleIsLoggedIn}
          userData={userData}
        ></Sidebar>
      </div>
      <div className={styles["publications-container"]}>
        <Publications></Publications>
      </div>
      <div className={styles["friendslist-container"]}>
        <Friendslist handleChangeFriendProfileData={props.handleChangeFriendProfileData} ></Friendslist>
      </div>
    </div>
  );
};

export default HomePage;
