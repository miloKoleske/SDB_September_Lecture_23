// import .env, "require" dependencies
require('dotenv').config(); 
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // used from node_modules
const PORT = process.env.PORT; // port depends on .env file, go look for PORT variable on the .env and make that = PORT 
const MONGO = process.env.MONGODB; // mongo depends on .env file, goes and looks for MONGODB variable on .env and makes that = MONGO
const userController = require('./controllers/user.controller');

mongoose.connect(`${MONGO}/movies`) // generate to a specific collection that is being targeted. This is MIDDLEWARE step. Sometimes, MONGO variable (MONGODB in .env) may need to be adjusted away from localhost

const db = mongoose.connection;
 // event listener to check if connected
db.once("open", () => console.log(`Connected: ${MONGO}/movies`)); // event listener once database is opened, prints
app.use(express.json()); 

app.use('/user', userController);

app.listen(PORT, () => console.log(`Movies: ${PORT}`)); // PORT 1 is pointing to line 5

// PORT, here is two different variables, and is based off of global variables