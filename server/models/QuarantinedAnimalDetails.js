const mongoose = require('mongoose');
const { Date, ObjectId, String, Number } = mongoose.Schema.Types;

const schema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    animal: {
        type: ObjectId,
        ref: 'Animal'
    },
    farm: {
        type: ObjectId,
        ref: 'Farm'
    },
    description: {
        type: String
    },
    amount: {
        type: Number
    }
});

const QuarantinedAnimalDetails = mongoose.model('QuarantinedAnimalDetails', schema);

module.exports = QuarantinedAnimalDetails;