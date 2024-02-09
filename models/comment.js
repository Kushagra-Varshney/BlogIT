const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    content: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;