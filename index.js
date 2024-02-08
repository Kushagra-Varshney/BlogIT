//PACKAGE IMPORTS
const express = require('express');
const path = require('path');
const connectDB = require('./connectdb');

//CONSTANTS
const PORT = process.env.PORT || 8000;
const app = express();

//DATABASE
connectDB('mongodb://127.0.0.1:27017/blogit');

//ROUTES
const userRouter = require('./routes/user');

//VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use('/users', userRouter);

//ROUTES
app.get('/', (req, res) => {
    res.render('home');
}); 


//SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});