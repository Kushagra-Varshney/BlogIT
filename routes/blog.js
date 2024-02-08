const express = require('express');
const { renderAddBlog, saveBlogToDB, getBlogById } = require('../controllers/blog');
const upload = require('../middlewares/multer');

const router = express.Router();

router.get('/add-new', renderAddBlog);

router.post('/add-new', upload.single('coverImage'), saveBlogToDB);

router.get('/:id', getBlogById);

module.exports = router;