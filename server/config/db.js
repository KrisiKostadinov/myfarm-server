const mongoose = require('mongoose');
const config = require('../config/configuration');

mongoose.connect(config.db, () => {
    console.log('Database is ready!');
});