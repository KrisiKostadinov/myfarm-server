const mongoose = require('mongoose');
const { String, Number, ObjectId } = mongoose.Schema.Types;

const schema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    farm: {
        type: ObjectId,
        ref: 'Farm',
    },
    breed: {
        type: String,
    },
    activeCount: {
        type: Number
    }
});

const Animal = mongoose.model('Animal', schema);

module.exports = Animal;