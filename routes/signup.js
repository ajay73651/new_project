const path = require('path');

const express = require('express');

const signUpController = require('../controllers/signup');

const router = express.Router();

// => POST > user 
router.get('"/user/sigup"', signUpController.getAddProduct);


module.exports = router;
