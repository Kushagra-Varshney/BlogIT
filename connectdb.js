const mongoose = require('mongoose');

async function connectDB(url) {
    return await mongoose.connect(url).then(() => {
        console.log('Connected to the database');
    }).catch((err) => {
        console.log('Failed to connect to the database', err);
    });
}

module.exports = connectDB;