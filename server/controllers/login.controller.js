const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;
exports.loginUser = async (req, res) => {
  const email = req.body.emailValue;
  const password = req.body.passwordValue;

  const user = await User.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const userData = { email: email, name: user.name, surname: user.surname };
    const accessToken = generateToken(userData);
    res.json({ status: 200, accessToken: accessToken });
  } else {
    res.json({ status: 404, user: false, error: "Didn't find matching user" });
  }
};

const generateToken = (userData) => {
  return jwt.sign(userData, secretKey);
};
