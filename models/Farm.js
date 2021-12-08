const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    food: {
        type: Number,
        default: 0
    }
});

const Farm = mongoose.model('Farm', schema);

module.exports = Farm;