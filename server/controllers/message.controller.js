const Message = require("../models/message.model");

//To send message
exports.sendMessage = async (req, res) => {
  try {
    await Message.create({
      author: req.body.author,
      receiver: req.body.receiver,
      header: req.body.header,
      content: req.body.content,
      date: req.body.date,
    });
    res.json({ status: 200 });
  } catch {
    res.json({ status: 404, error: "Something went wrong" });
  }
};

//To show all messages that single person has sent or received
exports.getMyMessages = async (req, res) => {
  const email = req.body.email;
  try {

    const messages = await Message.find({
      $or: [{ "author.email": email }, { receiver: email }],
    });
    res.status(200).json(messages);
  } catch (error) {
    // Obsłuż błąd, jeśli wystąpił
    console.error(error);
    res.status(500).json({ error: "Wystąpił błąd serwera" });
  }
};

//To show single message on click - message id
