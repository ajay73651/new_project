const path = require('path');

const express = require('express');

const loginController = require('../controllers/login');

const router = express.Router();

// => GET > user 
router.get('/user/login', loginController.getLogInUser);


module.exports = router;
