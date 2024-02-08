
function renderAddBlog(req, res) {
    return res.render('addBlog', {
        user: req.user
    });
}

async function saveBlogToDB(req, res) {
    console.log(req.body);
    res.redirect('/');
}

module.exports = {
    renderAddBlog,
    saveBlogToDB
}