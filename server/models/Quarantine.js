const mongoose = require('mongoose');
const { Date, ObjectId } = mongoose.Schema.Types;

const schema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    animal: {
        type: ObjectId,
        ref: 'Animal',
        required: true,
    },
    animalCount: {
        type: Number,
        required: true,
    },
    farm: {
        type: ObjectId,
        ref: 'Farm',
    }
});

const Quarantine = mongoose.model('Quarantine', schema);

module.exports = Quarantine;