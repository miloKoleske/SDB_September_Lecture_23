const router = require('express').Router();
const User = require('../models/user.model')
module.exports = router;

router.post('/signup', async(req,res) => {
    try {

        // create a new object based off the Model Schema
        const user = new User({
            // firstName : comes from our schema
            //! set as a if else ternary firstName: req.body.first ? req.body.first : 'Please update first Name' // req = request, what we collect from client-side
            firstName: req.body.first,// req = request, what we collect from client-side and generate a value for firstName based off of that 
            lastName: req.body.last, // body == look at body of request
            email: req.body.email,
            password: req.body.password
        })

        const newUser = await user.save(); // saves new user to mongoose, don't move forward until is created, because we have to "WAIT" to see if user exists

        res.status(200).json({
            user: newUser,
            message: 'Success! User Created!'
        });
    } catch (err) {
        res.status(500).json ({
            error: err.message
        })
    } 
    })
