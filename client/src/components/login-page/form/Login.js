import React from "react";
import styles from "../../../styles/Login.module.css";
import { useState, useCallback, useEffect } from "react";
import { CheckEmail, CheckPasswordLength } from "../../../utils/validation";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    emailValue: "",
    passwordValue: "",
  });

  const [loginErrs, setLoginErrs] = useState({
    emailErr: "",
    passwordErr: "",
  });

  function setErrValue(fieldName, value) {
    setLoginErrs((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  }

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

  const ValidationCheck = useCallback(() => {
    if (clickCounter > 0) {
      setErrValue("emailErr", CheckEmail(loginData.emailValue) ? false : true);
      setErrValue(
        "passwordErr",
        CheckPasswordLength(loginData.passwordValue) ? false : true
      );
    }
  }, [clickCounter]);

  useEffect(() => {
    ValidationCheck();
  }, [ValidationCheck]);

  const errorCheck = useCallback(() => {
    if (loginErrs.emailErr === false && loginErrs.passwordErr === false) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [loginErrs]);

  useEffect(() => {
    errorCheck();
  }, [errorCheck]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmit(true);
    setClickCounter(clickCounter + 1);
  };

  useEffect(() => {
    async function loginUser() {
      if (isFormSubmit && isFormValid) {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        const data = await response.json();
        if (data.status === 404) {
        }
        if (data.status === 200) {
          props.toggleIsLoggedIn(true);
          sessionStorage.setItem("accessToken", data.accessToken);
          sessionStorage.setItem("isLoggedIn",true);
        }
      } else {
      }
    }
    loginUser();
  }, [isFormValid, clickCounter]);

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
            className={`${styles["login-form__element-input"]}
            ${loginErrs.emailErr ? styles.inputBlur : ""}`}
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
            className={`${styles["login-form__element-input"]}
            ${loginErrs.passwordErr ? styles.inputBlur : ""}
            `}
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
        Don't have an account?{" "}
        <Link to="/register" className={styles["sign-up--link"]}>
          Sign up!
        </Link>{" "}
      </p>
    </div>
  );
};
export default Login;
