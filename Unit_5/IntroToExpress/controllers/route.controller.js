const router = require('express').Router();
const db = require('../utils/db.json');
//  TODO GET All

// Frame a GET route
router.get('/', (req,res) => {
    try {
        res.status(200).json({
            results: db // key - references db variable
        })

    } catch (error) {
        res.status(500).json ({
            error: error.message
        })
    }
})
 // (200) is the status message that's being appended json object


//  TODO GET One

/* 
    Syntax: 
        - URL - /:id
            - denote a parameter value
            - endpoint is expecting a reference value

        example URL w/ a parameter:
            http://localhost:4000/routes/1

        - "1" would reference a parameter or flexible string
            - this could be a name of something/anything we want
*/

router.get('/find-1/:id', (req,res) => {
    console.log(req.params);

    /* 
        - used to help us locate one item in our database
        - ID typically has a unique value to help us find that ONE item
        - Can help us search several times
    */

    try {
        let {id} = req.params; //deconstruction
        let results = db.filter( i => i.id == id);
        console.log(results);
        res.status(200).json({
            results: results[0]
        })
    } catch (error) {
        res.status(500).json ({
        error: err.message
        })
    }
})






// * QUERIES

const {firstName, lastName} = req.query;

router.get('/query/', (req, res) => {
    console.log('hit');
    try {
        /* 
            - Anything after the endpoint can be extracted.
            ex:
            localhost:4000/routes/query/?firstname="John"
        */

        if (firstName && lastName) {
            console.log(firstName, lastName)  
            res.status(200).json( {
            results: {
                first: firstName,
                last: lastName,
                fullName: `${firstName} ${lastName}`
            }
        })
        } else {
            throw new Error('Need to supply First and Last name.')
        }

    } catch (err) {
        res.status(500).json ({
            error: err.message
        })
    }
});

router.get('*', (req,res) => {
    try {
        res.status(500).json( {
            results: 'wild card'
        })
    } catch (err) {
        res.status(500).json ({
            error: err.message
        })
    }
})




module.exports = router;

