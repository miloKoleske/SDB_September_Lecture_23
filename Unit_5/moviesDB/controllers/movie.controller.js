const router = require('express').Router();
const Movie = require('../models/movie.model');
const { errorResponse } = require('../utils');
const ObjectId = require('../models/movie.model');
const validateSession = require('../middleware/validate-session');

// TODO POST
router.post('/',async(req,res) => {
    try{
        //1. Pull data from client (body)
        const {
            title, genre, rating, length, releaseYear} = req.body;

        //2. Create new object using model (schema)
        const movie = new Movie({
            title, genre, rating, length, releaseYear
        });

        //3. Save newly created object to DB
        const newMovie = await movie.save();

        //4. Respond to client
        res.status(200).json ({
            message: `${newMovie.title} added to collection`,
            newMovie
        })

    } catch (err) {
        errorResponse(res,err)
    }
});


// GET ALL
router.get('/', validateSession, async (req, res) => {
//console.log('test');

    try {
        const allMovies = await Movie.find();

        allMovies.length > 0  ? // if all movies variable exists
        res.status(200).json( {
            results: allMovies
        }) :
        res.status(404).json({
            result: `No movies found`
        });
    } catch (err) {
        res.status(500).json ({
            error: err.message
        })
    }
});



//TODO GET One
// router.get('/getOneByID', async (req, res) => {
//     try {
//         const {
//             title, genre, rating, length, releaseYear} = req.body;

//         const objectId = new ObjectId ({

//         })
//         // create a class
//         new ObjectId  
//         /* 
/*!   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        - Test the route within Postman
        
        Hint: Consider login within user.controller.js
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
*/

router.get('/find-one/:id', async (req,res)=> {
    try {
        const { id } = req.params;
        const getMovie = await Movie.findOne({_id: id});
        if(!getMovie) throw new Error (`No movie found`);

        res.status(200).json({
            results:getMovie
        })
    } catch (err) {
        errorResponse(res,err)
    }
});
// router.get('/find-one/:id', async (req,res => {
//     try {
//         const {id} = req.params;
//         const getMovie = await Movie.findOne({_id: id});

//         if(!getMovie) throw new Error(`no movie found`);

//         res.status(200).json({
//             results: getMovie
//         })
//     } catch (err) {
//         errorResponse(res,err)
//     }} 
// ));

//*Get All by Genre
router.get('/genre/:genre', async (req, res) => {
    try {
        const {genre} = req.params;
        let buildWord;

        if(genre) {
            for (let i=0; i < genre.length; i++) 
                i === 0?
                    buildWord = genre[i].toUpperCase():
                    buildWord += genre[i].toLowerCase();
        }
        const getMovies = await Movie.find({
            genre: buildWord // look at genre key of object inside schema, injecting genre from params
            });
            getMovies.length > 0 ?
                res.status(200).json({
                    result: getMovies
                }):
                res.status(404).json({
                    result: 'try another genre'
                })
        } catch (err) {
            errorResponse(res,err)
        }});
 

//*PATCH / PUT One
// put - update complete document
// patch - update one element of complete document
router.patch('/:id', async (req, res) => {
    try {

        // Pull value from parameter - QUERY
        const {id} = req.params;

        // pull data from the body. capture object set in body - DOCUMENT
        const info = req.body;

        // use method to locate a document based off the ID and pass in new information
            //* .findOneAndUpdate(query, document, options)
        const returnOption = {new: true}; // OPTION - return updated document
        const updated = await Movie.findOneAndUpdate({_id:id}, info, returnOption)

        // respond to client
        res.status(200).json({
            result: updated
        })

    } catch (err) {
        errorResponse(res,err)
    }
});


// * DELETE One 
router.delete('/:id', async (req,res) => {
    try {
        // Capture data
        const {id} = req.params;

        // use delete method to locate and remove
        const deleteMovie = await Movie.deleteOne({_id: id});
        console.log(deleteMovie);

        // response to client
        deleteMovie.deletedCount ? 
        res.status(200).json ({
            result: 'movie removed'
        }):
        res.status(404).json({
            result: 'no movie in collection'
        })
    } catch (err) {
        errorResponse(res,err)
    }
})



















module.exports = router;
