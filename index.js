//PACKAGE IMPORTS
const express = require('express');
const path = require('path');
const connectDB = require('./connectdb');
const cookieParser = require('cookie-parser');
const {checkAuthenticationCookie} = require('./middlewares/auth');
const {getAllBlogs} = require('./controllers/blog');

//CONSTANTS
const PORT = process.env.PORT || 8000;
const app = express();

//DATABASE
connectDB('mongodb://127.0.0.1:27017/blogit');

//ROUTES
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');

//VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(checkAuthenticationCookie('token'));
app.use('/users', userRouter);
app.use('/blog', blogRouter);

//ROUTES
app.get('/', async (req, res) => {
    const blogs = await getAllBlogs();
    res.render('home', {
        user: req.user,
        blogs: blogs,
    });
}); 


//SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});