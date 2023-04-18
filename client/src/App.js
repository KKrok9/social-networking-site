import "./App.css";
import LoginPage from "./components/login-page/LoginPage";
import RegisterPage from "./components/register-page/RegisterPage";
import HomePage from "./components/home-page/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage></LoginPage>} />
          <Route exact path="/register" element={<RegisterPage></RegisterPage>} />
          <Route exact path="/home" element={<HomePage></HomePage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
