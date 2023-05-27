const mongoose = require("mongoose");
const Post = new mongoose.Schema(
  {
    content: { type: String, required: true },
    likedBy: { type: Array, required: false },
    dateOfAddition: { type: Date, required: true },
    author: { type: Object, required: true },
  },
  { collection: "posts" }
);

const model = mongoose.model("posts", Post);

module.exports = model;
