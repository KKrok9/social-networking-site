import React from "react";
import styles from "../../../styles/Login.module.css";
import { useState, useCallback, useEffect } from "react";
import { CheckEmail, CheckPasswordLength } from "../../../utils/validation";

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    emailValue: "",
    passwordValue: "",
  });

  const [loginErrs, setLoginErrs] = useState({
    emailErr: "",
    passwordErr: "",
  });
  const [isFormValid, setIsFormValid] = useState("");
  const [isFormSubmit, setIsFormSubmit] = useState("");
  const [clickCounter, setClickCounter] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmit(true);
    setClickCounter(clickCounter + 1);
  };

  return (
    <div className={styles["login-form__div"]}>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
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
            value={loginData.emailValue}
            name="emailValue"
            onChange={handleInputChange}
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
            value={loginData.passwordValue}
            name="passwordValue"
            onChange={handleInputChange}
            type="password"
          />
        </div>
        <button className={styles["login-form__btn"]}>Login</button>
      </form>
      <p>
        Don't have an account? <a>Sign up!</a>{" "}
      </p>
    </div>
  );
};
export default Login;
