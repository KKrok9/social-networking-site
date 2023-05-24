const Post = require("../models/post.model");

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
