const express = require('express');
const User = require('../models/user');

//CONTROLLERS
const {renderSignin, renderSignup, createUser, signinUser, signoutUser} = require('../controllers/user');

const router = express.Router();

router.get('/signin', renderSignin);

router.get('/signup', renderSignup);

router.get('/signout', signoutUser);

router.post('/signup', createUser);

router.post('/signin', signinUser);


 
module.exports = router;
