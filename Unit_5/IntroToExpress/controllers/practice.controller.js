// STEPS:
// TODO: houses all router from express
// TODO: all logic - different tasks for what we want to do
// TODO: return result to user

const router = require('express').Router(); // creating variable --> importing Router Engine, gives us access to CRUD methods (+ others)

/* all possible routes for user */
// action      endpoint        return params
router.get('/hello-world', (req,res) => {
    /* 
        - pathways noted as a string
        - callback function to handle request and response
            -req,res
    */

    res.send("Hello World"); // Browsers always do a GET request by default
    // res has its own methods - like .send
})

router.post('/greeting', (req, res) => {
    //res.send("good afternoon!");
    res.status(200).send('good afternoon!')
});

// Create Post route w/ endpoint json
router.post('/json', (req,res) => {
    console.log(req.body);

    const {name} = req.body;

    res.status(200).send(`Hello, ${name}`);
})


//  Catch types of requests where endpoints don't exist 
router.get('*', (req,res) => {
    /* 
    '*' is a wildcard, allows for a "clean" response
    */
   res.status(404).send(`<img src="https://http.cat/404" alt="status code 404"/>`)
})

module.exports = router;

// server asks what client is asking for --> server retrieves it --> server returns it to client 