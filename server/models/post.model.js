const mongoose = require("mongoose");
const Post = new mongoose.Schema(
  {
    content: { type: String, required: true },
    likedBy: { type: String, required: true },
    dateOfAddition: { type: Date, required: true },
    author: { type: String, required: true },
  },
  { collection: "posts" }
);

const model = mongoose.model("posts", Post);

module.exports = model;
