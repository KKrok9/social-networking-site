const Post = require("../models/post.model");

//To add post controller
exports.addPost = async (req, res) => {
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

exports.likePost = async (req, res) => {
  try {
    const postId = req.body.postId;
    const userEmail = req.body.email;
    const post = await Post.findOne({ _id: postId, likedBy: userEmail });

    if (post) {
      await Post.updateOne(
        {
          _id: req.body.postId,
        },
        {
          $pull: { likedBy: userEmail },
        }
      );
      return res.status(201).json({ message: "Usunieto polubienie" });
    }

    await Post.updateOne(
      {
        _id: req.body.postId,
      },
      {
        $push: { likedBy: userEmail },
      }
    );
    return res.status(200).json({ message: "Polubiono" });
  } catch {
    res
      .status(500)
      .json({ error: "Nie udało się dodać osoby do listy polubień posta" });
  }
};

//To show all posts of some user controller (finding by email)
exports.getPostsOfSingleUser = async (req,res)=>{
  try{
    const userEmail = req.body.email;
    const posts = await Post.find({'author.email':userEmail});
    res.status(200).json(posts);
  }
  catch(error){
    res.status(500).json({error:"blad"});
  }
}