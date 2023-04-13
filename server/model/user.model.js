const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    birthdayDate: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "accounts" }
);

const model = mongoose.model("accounts", User);

module.exports = model;
