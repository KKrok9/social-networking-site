const express = require("express");
const router = express.Router();

let registerController = require("../controllers/register.controller");
let loginController = require("../controllers/login.controller");
let postController = require("../controllers/post.controller");
let usersController = require("../controllers/users.controller");

router.post("/register", registerController.addUser);
router.post("/login", loginController.loginUser);
router.post("/add-post", postController.addPost);
router.post("/get-profile-color", usersController.getProfilePicColorAndName);
router.get("/get-users", usersController.getAllUsers);
router.get("/get-posts", postController.getAllPosts);
router.post("/like-post", postController.likePost);

module.exports = router;
