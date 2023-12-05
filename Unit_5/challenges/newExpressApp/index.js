// * Server Entrypoint
const express = require('express'); 
const app = express();
const PORT = 4000;

// * Imports
const{logTime} = require('./utils');
const routeController = require('./routes');


// * Middleware
// ! on middleware.js file


// * Controller
app.use('/routes', routeController);
app.listen(PORT , () => {
    console.log(`Server is running on port: ${PORT}`);
})