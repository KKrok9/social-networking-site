const User = require("../models/user.model");

//List of users on reight side of homepage
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "name surname email profilePicColor");
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: "blad serwera" });
  }
};

//endpoint for getting name, surname and profilePicColor.
exports.getProfilePicColorAndName = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "Użytkownik nieznaleziony" });
    }
    res.json({
      profilePicColor: user.profilePicColor,
      userName: user.name,
      userSurname: user.surname,
    });
  } catch (error) {
    res.status(500).json({ error: "Wystąpił błąd" });
  }
};

//User with specific email - to show his profile
exports.getUserData = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "Użytkownik nieznaleziony" });
    }
    res.json({
      email: user.email,
      name: user.name,
      surname: user.surname,
      profilePicColor: user.profilePicColor,
      birthdayDate: user.birthdayDate,
    });
  } catch (error) {
    res.status(500).json({ error: "Wystąpił błąd" });
  }
};
