const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const routes = require("./routes/routing");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "secret-key", // Sekretne hasło używane do podpisywania identyfikatorów sesji
    resave: false, // Czy zawsze zapisywać sesję, nawet jeśli się nie zmieniła
    saveUninitialized: false, // Czy zapisywać sesję, nawet jeśli nie ma danych w sesji
  })
);


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
    app.listen(5000, () => {});
  })
  .catch((error) => console.log(error));
