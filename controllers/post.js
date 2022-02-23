const Post = require("../models/post");
const ObjectId = require("mongoose").ObjectId;

exports.createPost = async (req, res, next) => {            // create new Post
  const title = req.body.title;
  const description = req.body.description;

  try {
    const post = await new Post({
      title: title,
      description: description,
    }).save();

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

exports.getPost = async (req, res, next) => {           // get single post by id
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      const error = new Error("Internal Server Error");
      error.statusCode = 500;
      throw error;
    }
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {            // delete post by id
  const postId = req.params.postId;
  
  try{
      const result = await Post.findByIdAndDelete(postId);
      res.status(200).json(result);
  } catch(err) {
      next(err);
  }
};

exports.updatePost = async  (req,res,next) => {             // update post by id
    const postId = req.params.postId;
    const title = req.body.title;
    const description = req.body.description;

    try{
        const result = await Post.findByIdAndUpdate(postId,{$set: {title: title, description: description}})
        res.status(200).json(result);
    } catch(err) {
        next(err);
    }
}