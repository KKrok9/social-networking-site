import "./App.css";
import LoginPage from "./components/login-page/LoginPage";
import RegisterPage from "./components/register-page/RegisterPage";
import HomePage from "./components/home-page/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn")
  );
  const toggleIsLoggedIn = (value) => {
    setIsLoggedIn(value);
    sessionStorage.setItem("isLoggedIn", value);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              Boolean(isLoggedIn) ? (
                <Navigate to="/home" />
              ) : (
                <LoginPage toggleIsLoggedIn={toggleIsLoggedIn} />
              )
            }
          />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route
            exact
            path="/home"
            element={
              Boolean(isLoggedIn) ? (
                <HomePage toggleIsLoggedIn={toggleIsLoggedIn} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
