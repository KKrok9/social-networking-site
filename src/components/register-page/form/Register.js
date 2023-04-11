import React from "react";
import styles from "../../../styles/Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <div className={styles["form-section"]}>
          <h1>REGISTER</h1>
          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>NAME</label>
            <input className={styles["register-input"]}></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>SURNAME</label>
            <input className={styles["register-input"]}></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>DATE OF BIRTH</label>
            <input className={styles["register-input"]} type="date"></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]} type="email">
              E-MAIL
            </label>
            <input className={styles["register-input"]}></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>PASSWORD</label>
            <input className={styles["register-input"]} type="password"></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}> REPEAT PASSWORD</label>
            <input className={styles["register-input"]} type="password"></input>
          </div>
          <div className={styles["register-buttons"]}>
            <button className={styles["back-btn"]}>&#8592;</button>
            <button className={styles["register-btn"]}>REGISTER</button>
          </div>
        </div>
        <div className={styles["photo-section"]}></div>
      </div>
    </div>
  );
};
export default Register;
