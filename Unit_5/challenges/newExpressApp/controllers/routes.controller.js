const router = require('express').Router();
const db = require('../data.json');

// * Get All
router.get('/', (req,res) =>{
    try {
        res.status(200).json({
            results: db
        })

    } catch (error) {
        res.status(500).json ({
            error: err.message
        })
    }
})

// * Get ONE by ID
router.get('/find-1/:id', (req,res) => {
    console.log(req.params)

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

// * Get ONE by Title using query

router.get('/getOneByTitle/', (req,res) => {
    console.log('hit');
    try {
        if (title && author) {
            res.status(200).json ( {
                results: {
                    title: title,
                    author: author
                }
            })
        } else {
            throw new Error('Error message to send')
        }
    } catch (err) {
        res.status(500).send(
        )
    }
});


const {title, author} = req.query;
router.post('/titleAuthor', (req, res) => {

    try {
        if (title && author) {
            res.status(200).json ( {
                results: {
                    title: title,
                    author: author
                }
            })
        } else {
            throw new Error('Error message to send')
        }
    } catch (err) {
        res.status(500).send(
        )
    }
});

module.exports = router;
router.post('/newBook', (req, res) => {

})