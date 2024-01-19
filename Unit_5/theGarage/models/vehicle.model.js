const mongoose = require('mongoose');

const Vehicle = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    tasks: [Object] // store object inside array
    //tasks to be added
});

module.exports = mongoose.model('Vehicle', Vehicle);

/* 
    Array is noted by []
        - Data type within the brackets indicate what is expected to be stored
        - Empty brackets will default to mixed data types
*/