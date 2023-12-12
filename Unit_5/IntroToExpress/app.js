// entrypoint to server
const express = require('express'); // created variable to describe express dependency, being pulled from node_modules
const app = express(); // chaining methods together, when calling on app, fire express function
const PORT = 4000; //common empty port, server port within localhost. Using 'ALL CAPS' to indicate a general variable, PORT value might be tied to database

// * IMPORTS
const practiceController = require('./controllers/practice.controller'); 
const authController = require('./controllers/auth.controller');
const routeController = require('./controllers/route.controller');
const { logTime } = require('./utils');

// * MIDDLEWARE
app.use(logTime)
app.use(express.urlencoded()); // parses body from our browser so it can display response
app.use(express.json()); // Provides us access to use JSON w/in routes)
app.use(express.static(`${__dirname}/public`)); // IntroToExpress/public
console.log('pathway:', __dirname); // doesn't matter what name of folder is, helps when devs don't all have same directory name

// * CONTROLLER
app.use('/practice', practiceController); // param is pushing towards the user routes (currently empty) - says Cannot GET
// Any traffic coming in with 'practice' after localhost:4000 will route to practice.controller.js
// ex: localhost:4000/practice
app.use('/todo', authController);
app.use('/routes', routeController);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
}) // listen to what is pulled back from app/express method, provides feedback that method is running by showing the value of PORT

// nodemon - NODE MON (not NO DEMON, unfortunately) -- need to change entrypoint name, as nodemon is looking for a file named index.js.


