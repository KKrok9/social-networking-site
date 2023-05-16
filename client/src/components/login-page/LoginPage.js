import React from "react";
import Login from "./form/Login";
import Header from "./header/Header";
import styles from "../../styles/Login-page.module.css";
const LoginPage = (props) => {
  
  return (
    <div className={styles.container}>
      <Login toggleIsLoggedIn={props.toggleIsLoggedIn}></Login>
      <Header></Header>
    </div>
  );
};

export default LoginPage;
