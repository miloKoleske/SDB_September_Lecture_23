// * Access to Dependencies 
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); // user schema




const validateSession = async (req,res,next) => {
    // Middleware still has access to the request, response, and requires the next() function to move past it
    // * timeLog helper within the ToDo_List
    try {
    // Take token provided by request object (header.authorization)
    const token = req.headers.authorization; // front end - req comes from client
    console.log(token);

    // Check status of token (expired?)
    const decoded = await jwt.verify(token, process.env.JWT);

    //  Provide response - if valid, generate a variable that holds user info
    } catch (err) {
        res.json({message: err.message});
    }



    return next();
}

module.exports = validateSession;