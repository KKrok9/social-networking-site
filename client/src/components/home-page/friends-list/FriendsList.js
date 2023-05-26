import React from "react";
import Friend from "./friend/Friend";
import styles from "../../../styles/FriendsList.module.css";
import { useState, useEffect } from "react";
const Friendslist = () => {
  const [users, setUsers] = useState([]);

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
        console.log(data);
        setUsers(data);
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
            key={element.id}
            name={element.name}
            surname={element.surname}
          ></Friend>
        );
      })}
    </div>
  );
};
export default Friendslist;
