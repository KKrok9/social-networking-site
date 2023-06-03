const User = require("../models/user.model");

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

exports.addUser = async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      surname: req.body.surname,
      birthdayDate: req.body.birthdayDate,
      email: req.body.email,
      password: req.body.password,
      profilePicColor : getRandomColor(),
    });
    res.json({ status: 200 });
  } catch (err) {
    res.json({ status: 409, error: "Email is already taken!" });
  }
};
