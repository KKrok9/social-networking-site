import React, { useState, useEffect, useCallback } from "react";
import styles from "../../../styles/Register.module.css";
import {
  CheckEmail,
  CheckPasswordLength,
  CheckIfPasswordsAreMatching,
  CheckIfUserAdult,
  CheckIfIsntEmpty,
} from "../../../utils/validation";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthdayDate: "",
    email: "",
    password: "",
    repeatedPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameErr: "",
    surnameErr: "",
    birthdayDateErr: "",
    emailErr: "",
    passwordErr: "",
    repeatedPasswordErr: "",
  });

  const feedback = {
    password: "YOUR PASSWORD IS TOO SHORT!",
    email: "ENTER VALID E-MAIL!",
    passwordRepeat: "YOUR PASSWORDS AREN'T MATCHING!",
    date: "YOU ARE TOO YOUNG!",
  };

  const [isSubmit, setIsSubmit] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);
  const handleResetInputs = () => {
    setFormData({
      name: "",
      surname: "",
      birthdayDate: "",
      email: "",
      password: "",
      repeatedPassword: "",
    });
  };

  const ValidationCheck = useCallback(() => {
    if (clickCounter > 0) {
      setErrValue("nameErr", CheckIfIsntEmpty(formData.name) ? false : true);
      setErrValue(
        "surnameErr",
        CheckIfIsntEmpty(formData.surname) ? false : true
      );
      setErrValue(
        "birthdayDateErr",
        CheckIfUserAdult(formData.birthdayDate) ? false : true
      );
      setErrValue("emailErr", CheckEmail(formData.email) ? false : true);
      setErrValue(
        "passwordErr",
        CheckPasswordLength(formData.password) ? false : true
      );
      setErrValue(
        "repeatedPasswordErr",
        CheckIfPasswordsAreMatching(
          formData.password,
          formData.repeatedPassword
        )
          ? false
          : true
      );
    }
  }, [clickCounter]);

  const errorCheck = useCallback(() => {
    if (
      formErrors.nameErr === false &&
      formErrors.surnameErr === false &&
      formErrors.emailErr === false &&
      formErrors.birthdayDateErr === false &&
      formErrors.passwordErr === false &&
      formErrors.repeatedPasswordErr === false
    ) {
      console.log("setIsValid-true");
      setIsValid(true);
    } else {
      console.log("setIsValid - false");
      setIsValid(false);
    }
  }, [formErrors]);

  useEffect(() => {
    ValidationCheck();
  }, [ValidationCheck]);

  useEffect(() => {
    errorCheck();
  }, [errorCheck]);

  function setErrValue(fieldName, value) {
    setFormErrors((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    async function registerUser() {
      if (isValid === true && isSubmit === true) {
        console.log("valided - cool", isValid);
        console.log("submited - cool", isSubmit);
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);
        handleResetInputs();
        return;
      }
    }
    registerUser();
  }, [isValid]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    setClickCounter(clickCounter + 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <form className={styles["form-section"]} onSubmit={handleSubmit}>
          <h1>REGISTER</h1>
          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>NAME</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`${styles["register-input"]}  ${
                formErrors.nameErr ? styles.inputBlur : ""
              }`}
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label className={styles["register-label"]}>SURNAME</label>
            <input
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              className={`${styles["register-input"]}  ${
                formErrors.surnameErr ? styles.inputBlur : ""
              }`}
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label
              className={`${styles["register-label"]} ${
                formErrors.birthdayDateErr ? styles["error-label"] : ""
              }`}
            >
              {formErrors.birthdayDateErr ? feedback.date : "DATE OF BIRTH"}
            </label>
            <input
              name="birthdayDate"
              value={formData.birthdayDate}
              onChange={handleInputChange}
              className={`${styles["register-input"]}  ${
                formErrors.birthdayDateErr ? styles.inputBlur : ""
              }`}
              type="date"
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label
              className={`${styles["register-label"]} ${
                formErrors.emailErr ? styles["error-label"] : ""
              }`}
            >
              {formErrors.emailErr ? feedback.email : "E-MAIL"}
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${styles["register-input"]}  ${
                formErrors.emailErr ? styles.inputBlur : ""
              }`}
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
            <label
              className={`${styles["register-label"]} ${
                formErrors.passwordErr ? styles["error-label"] : ""
              }`}
            >
              {formErrors.passwordErr ? feedback.password : "PASSWORD"}
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`${styles["register-input"]}  ${
                formErrors.passwordErr ? styles.inputBlur : ""
              }`}
              type="password"
            ></input>
          </div>

          <div className={styles["register-input--section"]}>
          <label
              className={`${styles["register-label"]} ${
                formErrors.repeatedPasswordErr && formErrors.passwordErr ? styles["error-label"] : ""
              }`}
            >
              {formErrors.repeatedPasswordErr && formErrors.passwordErr ? feedback.password : formErrors.repeatedPasswordErr ? feedback.passwordRepeat : "REPEAT PASSWORD"}
            </label>
            <input
              name="repeatedPassword"
              value={formData.repeatedPassword}
              onChange={handleInputChange}
              className={`${styles["register-input"]}  ${
                formErrors.repeatedPasswordErr ? styles.inputBlur : ""
              }`}
              type="password"
            ></input>
          </div>
          <div className={styles["register-buttons"]}>
            <button className={styles["back-btn"]} type="button">
              <Link to="/" className={styles.link}>
                {" "}
                <span>&#8592;</span>BACK
              </Link>
            </button>
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
