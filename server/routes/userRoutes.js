const express = require('express');
const router = express.Router();
// Import controllers or handler functions
const UserController = require('../controllers/userController');

//Define Routes
router.get('/profile', UserController.getProfile)
// router.post('/register', UserController.register);
// router.post('/login', UserController.login);

module.exports = router;