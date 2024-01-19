const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    rating: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    }, 
    releaseYear: {
        type: Number
    },
    owner_id: String // store string inside to reference 
});

module.exports = mongoose.model('Movie', MovieSchema);

// MovieSchema is in the shape of a movie, is a class
