const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

let registerController = require("../controllers/register.controller");
let loginController = require("../controllers/login.controller");
let postController = require("../controllers/post.controller");
let usersController = require("../controllers/users.controller");

router.post("/register", registerController.addUser);
router.post("/login", loginController.loginUser);
router.post("/add-post", postController.addPost);
router.get("/get-users", usersController.getAllUsers);
router.get("/get-posts", postController.getAllPosts);

module.exports = router;
