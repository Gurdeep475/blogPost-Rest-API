const express = require('express')
const router = express.Router();
const postController = require("../controllers/post");

router.post('/',postController.createPost)            // post request for posting posts

router.get('/:postId',postController.getPost);  // get single post data

router.delete('/:postId',postController.deletePost);  // get single post data


router.put('/:postId',postController.updatePost) // update post by id

module.exports = router;