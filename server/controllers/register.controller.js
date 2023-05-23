const User = require("../models/user.model");

exports.addUser = async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      surname: req.body.surname,
      birthdayDate: req.body.birthdayDate,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: 200 });
  } catch (err) {
    res.json({ status: 409, error: "Email is already taken!" });
  }
};
