const User = require("../models/user.model");

//List of users on reight side of homepage
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "name surname email");
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: "blad serwera" });
  }
};

//List of users who liked some post



