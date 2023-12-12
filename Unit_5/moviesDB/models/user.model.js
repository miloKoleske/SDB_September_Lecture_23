const mongoose = require('mongoose'); // given access to schema method to create a new object

const UserSchema = new mongoose.Schema({
    // columns for our document - generating structure of database docs
    // generating the shape of what object should look like (not necessarily obj itself)
    firstName: {
        type: String, // what datatype to expect

    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true, // when user signs up, email MUST be given, or default is false
        unique: true // duplicate emails will throw error response
    },
    password: {
        type: String,
        required: true
    } // note: each variable has its own shape
});

// NOTE: err message is provided by MONGO, but catch is not, will need to write catch function

module.exports = mongoose.model('User', UserSchema); // allows us various methods thru mongoose to communicate to each other 
// UserSchema = shape of the object
// .model gives access to all of mongoose's models (first, lastName, etc)
