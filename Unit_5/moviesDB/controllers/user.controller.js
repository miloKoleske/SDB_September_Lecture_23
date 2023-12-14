const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// ! const SECRET = require('jsonwebtoken');


const testingBcrypt = string => {
    let encrypt = bcrypt.hashSync(string,10); // taking already made string, '10' is # of salting times, salting changes #s 10 times
    console.log('ENCRYPT: ', encrypt);
}

router.post('/signup', async(req,res) => {

    // testingBcrypt('password');
    // testingBcrypt('password');
    // testingBcrypt('NEWpassword');
    // can also write password checks - caseSensitivity, # of characters, if x is not fulfilled, not even able to enter server
    try {

        // create a new object based off the Model Schema
        const user = new User({
            // firstName : comes from our schema
            //! set as a if else ternary firstName: req.body.first ? req.body.first : 'Please update first Name' // req = request, what we collect from client-side
            firstName: req.body.first ? req.body.first : 'please update first name',
            // req = request, what we collect from client-side and generate a value for firstName based off of that
            lastName: req.body.last ? req.body.last : 'please update last name', // body == look at body of request
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 13)
        })

        const newUser = await user.save(); // saves new user to mongoose, don't move forward until is created, because we have to "WAIT" to see if user exists -- .save == user schema

        // ! after evaluation/ creation of new users, create jsonwebtoken
        const token = jwt.sign({id: newUser._id}, 'secret message', {expiresIn: "1 day"})// doesn't need to be saved to db (not permanent, just for session we are working in) 

        res.status(200).json({
            user: newUser,
            message: 'Success! User Created!',
            token
        });
    } catch (err) {
        res.status(500).json ({
            error: err.message
        })
    } 
    })

    // ! CREATE A LOGIN ROUTE
    router.post('/login', async(req,res) => {
        try {
            
            // * 1. Capture data provided by user (req.body)
            // ! const login = new login ({email: req.body.email}) -
            const {email, password } = req.body; // destructuring object in body, call on keys like they were variables 

            // * 2. Check database to see if email supplied exists
            const user = await User.findOne({email: email});// now referencing db, detail schema again, can look for 1 key in schema (like email), do you have same email as the user we are looking at has?
            // A MongoDB method that accepts a query (check email) as an argument (against email). Returns an instance of a document that matches
            console.log(user);
            if(!user) throw new Error('Email or password does not match');// no user w/ that email exists
            
            // * 3. If email exists, consider if the password matches, if not, throw error
            const passwordMatch = await bcrypt.compare(password, user.password) // true / false value
            // compares(string, hashed value)
            if(!passwordMatch) throw new Error('Email or password does not match');

            // * 4. After verified (email + password == true), provide a jwt
            const token = jwt.sign({id: user._id}, SECRET, {expiresIn: 60*60*24});

            // * 5. Response status returned            
            res.status(200).json({
                message: "Successful",
                user, token
            })

        } catch (err) {
            res.status(500).json ({
                error: err.message
            }) 
        }
    })

    module.exports = router;