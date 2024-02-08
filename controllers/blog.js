const Blog = require('../models/blog');

function renderAddBlog(req, res) {
    return res.render('addBlog', {
        user: req.user
    });
}

async function saveBlogToDB(req, res) {

    const { title, body } = req.body;
    const coverImageURL = `/uploads/${req.file.filename}`;
    const createdBy = req.user.id;
    const blog = await Blog.create({ title, body, createdBy, coverImageURL });

    return res.redirect(`/blog/${blog._id}`);
}

async function getAllBlogs() {
    const blogs = await Blog.find({}).sort('createdAt').populate('createdBy');
    return blogs;
}
 
async function getBlogById(req, res) {
    const blog = await Blog.findById(req.params.id).populate('createdBy');
    return res.render('blog', {
        blog: blog,
        user: req.user
    });
}

module.exports = {
    renderAddBlog,
    saveBlogToDB,
    getAllBlogs,
    getBlogById
}