import React from "react";
import styles from "../../../styles/Login.module.css";

const Login = (props) => {
  return (
    <div className={styles["login-form__div"]}>
      <form className={styles["login-form"]}>
        <h2 className={styles.header2}>Welcome back!</h2>
        <div className={styles["input-label-div"]}>
          <label
            className={styles["login-form__element-label"]}
            htmlFor="email-input"
          >
            E-mail
          </label>
          <input
            className={styles["login-form__element-input"]}
            id="email-input"
          />
        </div>
        <div className={styles["input-label-div"]}>
          <label
            className={styles["login-form__element-label"]}
            htmlFor="password-input"
          >
            Password
          </label>
          <input
            className={styles["login-form__element-input"]}
            htmlFor="password-input"
          />
        </div>
        <button className={styles["login-form__btn"]}>Login</button>
      </form>
      <p>Don't have an account? Sign Up! </p>
    </div>
  );
};
export default Login;
