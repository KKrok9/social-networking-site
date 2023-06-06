const mongoose = require("mongoose");
const Message = new mongoose.Schema(
  {
    author: { type: Object, required: true },
    receiver: { type: String, required: true },
    header: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { collection: "messages" }
);

const model = mongoose.model("messages", Message);

module.exports = model;
