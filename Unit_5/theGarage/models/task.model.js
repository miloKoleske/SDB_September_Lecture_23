const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: String,
    date: Date,
    details: String,
    resolved: Boolean,
    vehicle_id: {
        type: mongoose.Types.ObjectId,
        ref: "Vehicle" // collection to expect data from
    }
    // connection to Vehicle
});

module.exports = mongoose.model('Task', Task);