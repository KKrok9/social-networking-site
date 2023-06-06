import "./App.css";
import LoginPage from "./components/login-page/LoginPage";
import RegisterPage from "./components/register-page/RegisterPage";
import HomePage from "./components/home-page/HomePage";
import ProfilePage from "./components/profile-page/ProfilePage";
import Messages from "./components/messages-page/Messages";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { decodeJWT } from "./utils/decode";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn")
  );
  const toggleIsLoggedIn = (value) => {
    setIsLoggedIn(value);
    sessionStorage.setItem("isLoggedIn", value);
  };
  const [profileData, setProfileData] = useState({});
  const [friendProfileData, setFriendProfileData] = useState({});

  useEffect(() => {
    if (Boolean(isLoggedIn) === true) {
      setProfileData(decodeJWT());
    }
  }, [isLoggedIn]);

  const handleChangeFriendProfileData = (value) => {
    setFriendProfileData({ email: value });
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
                <HomePage
                  toggleIsLoggedIn={toggleIsLoggedIn}
                  handleChangeFriendProfileData={handleChangeFriendProfileData}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            exact
            path="/your-profile"
            element={
              Boolean(isLoggedIn) ? (
                <ProfilePage profileData={profileData} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/messages"
            element={Boolean(isLoggedIn) ? <Messages /> : <Navigate to="/" />}
          ></Route>
          <Route
            exact
            path="/friend-profile"
            element={
              Boolean(isLoggedIn) ? (
                <ProfilePage profileData={friendProfileData} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
