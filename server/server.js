const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://test:test@cluster0.sh7nlgj.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/api/register", async (req, res) => {
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
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  // have to add JWT and bcrypt

  if (user) {
    res.json({ status: 200, user: true });
  }

  if (!user) {
    res.json({ status: 404, user: false, error: "Didn't find matching user" });
  }
});

app.listen(5000, () => {
  console.log("server started at port 5000!");
});
