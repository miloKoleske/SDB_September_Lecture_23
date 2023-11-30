# How to make an API
Don't fuck with node_modules
.gitignore - will host node_modules
# Getting Started
    - Create a `package.json`
        - In the terminal: `npm init -y` || `npm init`
            - initializes our project
        - An index of the project 
            - denote required dependencies to run the project
    - Install our dependencies 
        - express: `npm i express`
    - Create a `.gitignore` file
        - always load `/node_modules` within .gitignore
        - tells our local repository to ignore the `node_modules` folder when backing up to GitHub
            - node_modules folder
                - Provides us access to any 'behind the scenes' code that helps run express and any dependency installed
                    - consider this like a boilerplate like bootstrap
                - When install/reinstallation of node_modules is needed, type into terminal `npm install`
- package-lock.json
    - locks project into required dependencies
    - helps with versioning 

# Localhost:4000
- what we are running off of nodemon
- express method pushes from dir name and into public, from there pushes into the data of the index.html
- Good for website under construction

## CRUD
- Create: POST
- Read: GET
- Update: PUT / PATCH
- Delete: DELETE

## Postman
- Set Methods
    - GET | POST | PUT | DELETE
    depending on route
    - Body
        - raw
        - JSON
        - Make a JSON object

### Preparing our server to handle JSON objects 
In our `app.js` we need to have this line of code in our **middleware**:
```js
app.use(express.json());
```
- ^ How you write markdown in .md
- Provides us access to JSON files thru-out routes

## MVC - Model View Controller
- What users interact with 
- Architectural pattern that helps Separation of Concerns
- View:
    - Browser, Postman, mobile phone, etc.
        - Applications that interface with the server
- Controller:
    - Part of the server application which handles logic. 
- Model: 
    - Database schematic

## Middleware
- A function that accesses the request and response
- Has call stack (request, response, next) - options of actions to take


File folder structure -- always make sure to comb over this

ENDPOINTS MATTER!

# Creating a controller
- create file w/ in controller folder
- import into app.js (make a const variable)
- in app.js, create the endpoint name and connect to the variable