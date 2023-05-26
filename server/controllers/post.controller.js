const Post = require("../models/post.model");

//To add post controller
exports.addPost = async (req, res) => {
  console.log(req.body);
  try {
    await Post.create({
      content: req.body.content,
      likedBy: req.body.likedBy,
      dateOfAddition: req.body.dateOfAddition,
      author: req.body.author,
    });
    res.json({ status: 200 });
  } catch {
    res.json({ status: 404, error: "Something went wrong" });
  }
};

//To show all posts controller (get all)
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch {
    res.status(500).json({ error: "blad serwera" });
  }
};

//To show all posts of some user controller (finding by email)
