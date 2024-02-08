const express = require('express');
const User = require('../models/user');

//CONTROLLERS
const {renderSignin, renderSignup, createUser, signinUser} = require('../controllers/user');

const router = express.Router();

router.get('/signin', renderSignin);

router.get('/signup', renderSignup);

router.post('/signup', createUser);

router.post('/signin', signinUser);
 
module.exports = router;
