import React from "react";
import ProfileActivity from "./profile-activity/ProfileActivity";
import ProfileInformations from "./profile-informations/ProfileInformations";
import styles from "../../styles/ProfilePage.module.css";
import { useState, useEffect } from "react";

const ProfilePage = (props) => {
  const [userData, setUserData] = useState({});
  const profileEmailProps = props.profileData;
  
  useEffect(() => {
    async function getYourProfileData() {
      if (profileEmailProps && profileEmailProps.email) {
        const email = profileEmailProps.email.toString();
        try {
          const response = await fetch("http://localhost:5000/get-user-data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Blad ", error);
        }
        return;
      }
    }
    getYourProfileData();
  },[profileEmailProps]);

  return (
    <div className={styles.container}>
      <div className={styles["informations-section-container"]}>
        <ProfileInformations userData={userData} />
      </div>
      <div className={styles["activity-section-container"]}>
        <ProfileActivity />
      </div>
    </div>
  );
};
export default ProfilePage;
