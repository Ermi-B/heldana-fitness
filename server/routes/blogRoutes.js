// blogRoutes.js

const express = require('express');
const router = express.Router();

// Import controllers or handler functions
const BlogController = require('../controllers/blogController');

// Define routes
router.get('/posts', BlogController.getAllPosts);
router.get('/posts/:id', BlogController.getPostById);
router.post('/posts', BlogController.createPost);
router.put('/posts/:id', BlogController.updatePost);
router.delete('/posts/:id', BlogController.deletePost);

module.exports = router;
