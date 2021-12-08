const mongoose = require('mongoose');
const { ObjectId, Boolean, String } = mongoose.Schema.Types;

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    farm: {
        type: ObjectId,
        ref: 'Farm'
    },
    animal: {
        type: ObjectId,
        ref: 'Animal'
    },
    fed: {
        type: Boolean,
        default: false,
    }
});

const Barn = mongoose.model('Barn', schema);

module.exports = Barn;