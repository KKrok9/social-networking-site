const express = require("express");
const router = express.Router();

let registerController = require("../controllers/register.controller");
let loginController = require("../controllers/login.controller");


router.post("/register", registerController.addUser);
router.post("/login",loginController.loginUser);

module.exports = router;
