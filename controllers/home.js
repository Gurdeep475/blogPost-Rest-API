const post = require("../models/post");
const Post = require("../models/post");

module.exports.getAllPosts = async (req,res,next) => {
    try{
        const postList = await Post.find();
        res.status(200).json(postList);
    } catch(err) {
        next(err);  // pass it to special express error middleware
    }
};