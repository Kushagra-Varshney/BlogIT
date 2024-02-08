//hashing imports
const {createHmac} = require('crypto');

//Importing user model
const User = require('../models/user');

function renderSignup(req, res) {
    res.render('signup');
}

function renderSignin(req, res) {
    res.render('signin');
}

async function createUser(req, res) {
    const { fullName, email, password } = req.body;
    await User.create({ fullName, email, password })
        .then(() => {
            console.log('User created');
        })
        .catch((err) => {
            console.log(err)
        });

    res.redirect('/');
}

async function signinUser(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.redirect('/users/signup');
    }

    //user exists now we verify credentials
    const hashedPassword = user.password;
    const salt = user.salt;
    const enteredPassword = password;
    const hashedEnteredPassword = createHmac('sha256', salt).update(enteredPassword).digest('hex');

    if(hashedEnteredPassword === hashedPassword){
        res.redirect('/');
    }
    else{
        console.log('Invalid credentials');
        res.redirect('/users/signin');
    }
}

module.exports = {
    renderSignup,
    renderSignin,
    createUser,
    signinUser
};