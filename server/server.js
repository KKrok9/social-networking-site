const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routing");

app.use(cors());
app.use(express.json());
app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://test:test@cluster0.sh7nlgj.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("server started ad 5000");
    });
  })
  .catch((error) => console.log(error));
