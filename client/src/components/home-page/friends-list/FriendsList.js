import React from "react";
import Friend from "./friend/Friend";
import styles from "../../../styles/FriendsList.module.css";
import { useState, useEffect } from "react";
import { decodeJWT } from "../../../utils/decode";

const Friendslist = () => {
  const [users, setUsers] = useState([]);
  const loggedUserData = decodeJWT();

  useEffect(() => {
    async function fetchUsers(req, res) {
      try {
        const response = await fetch("http://localhost:5000/get-users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        const filteredData = data.filter((element) => {
          return element.email !== loggedUserData.email;
        });
        setUsers(filteredData);
      } catch (error) {
        console.error("Blad ", error);
      }
      return;
    }
    fetchUsers();
  }, []);
  
  return (
    <div className={styles["friendslist-container"]}>
      {users.map((element) => {
        return (
          <Friend
            key={element.email}
            name={element.name}
            surname={element.surname}
            color={element.profilePicColor}
          ></Friend>
        );
      })}
    </div>
  );
};
export default Friendslist;
