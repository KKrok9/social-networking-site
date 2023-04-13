const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/user.model");
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
    console.log("sended");
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "didnt send" });
  }
});

app.listen(5000, () => {
  console.log("server started at port 5000!");
});
