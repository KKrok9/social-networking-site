import React, { useState } from "react";
import styles from "../../../styles/Register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  async function registerUser(event) {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        birthdayDate,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <form className={styles["form-section"]} onSubmit={registerUser}>
          <h1>REGISTER</h1>
          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>NAME</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles["register-input"]}
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>SURNAME</label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className={styles["register-input"]}
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>DATE OF BIRTH</label>
            <input
              value={birthdayDate}
              onChange={(e) => setBirthdayDate(e.target.value)}
              className={styles["register-input"]}
              type="date"
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]} type="email">
              E-MAIL
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles["register-input"]}
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>PASSWORD</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles["register-input"]}
              type="password"
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}> REPEAT PASSWORD</label>
            <input
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className={styles["register-input"]}
              type="password"
            ></input>
          </div>
          <div className={styles["register-buttons"]}>
            <button className={styles["back-btn"]}>&#8592;</button>
            <button className={styles["register-btn"]} type="submit">
              REGISTER
            </button>
          </div>
        </form>
        <div className={styles["photo-section"]}></div>
      </div>
    </div>
  );
};
export default Register;
