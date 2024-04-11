const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/AGS');
        console.log('Database connected');
    } catch (error) {
        console.log('Connect database failed');
    }
}

module.exports = { connect }