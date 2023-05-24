import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Sidebar from "./sidebar/Sidebar";
import Publications from "./publications/Publications";
import Friendslist from "./friends-list/FriendsList";
import jwt_decode from "jwt-decode";

const HomePage = (props) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const decodedToken = jwt_decode(accessToken);
    setUserData(decodedToken);
    console.log(userData);
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { email, name, surname } = userData;

  return (
    <div className={styles.container}>
      <div className={styles["sidebar-container"]}>
        <Sidebar toggleIsLoggedIn={props.toggleIsLoggedIn} userData={userData}></Sidebar>
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
