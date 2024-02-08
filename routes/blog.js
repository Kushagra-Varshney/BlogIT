const express = require('express');
const { renderAddBlog, saveBlogToDB } = require('../controllers/blog');

const router = express.Router();

router.get('/add-new', renderAddBlog);

router.post('/add-new', saveBlogToDB);

module.exports = router;