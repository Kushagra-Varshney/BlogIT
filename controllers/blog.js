const Blog = require('../models/blog');

function renderAddBlog(req, res) {
    return res.render('addBlog', {
        user: req.user
    });
}

async function saveBlogToDB(req, res) {
    console.log(req.body);
    console.log(req.file);
    const { title, body } = req.body;
    const coverImageURL = `/uploads/${req.file.filename}`;
    const createdBy = req.user._id;
    const blog = await Blog.create({ title, body, createdBy, coverImageURL });
    
    console.log(blog);

    return res.redirect(`/blog/${blog._id}`);
}

async function getAllBlogs() {
    const blogs = await Blog.find({}).sort('createdAt');
    return blogs;
}

module.exports = {
    renderAddBlog,
    saveBlogToDB,
    getAllBlogs
}