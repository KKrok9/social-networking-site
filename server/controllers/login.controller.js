const User = require("../models/user.model");

exports.loginUser = async (req, res) => {
  const user = await User.findOne({
    email: req.body.emailValue,
    password: req.body.passwordValue,
  });

  if (user) {
    res.json({ status: 200, user: true });
  } else {
    res.json({ status: 404, user: false, error: "Didn't find matching user" });
  }
};
