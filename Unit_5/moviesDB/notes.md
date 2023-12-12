# Traditional Databases

Database:
- Types: 
  
  - Relational 
    - SQL, PostgreSql, MySQL
    - very strict table structure
    - links two tables together w/ a foreign key and a primary key
        - Mongo generates primary key
    - cannot have one without the other, can hold empty values, but still needs to be tied to users
  
  - Non-Relational
    - MongoDB, Apache Cassandra, Couchbase
    - shape values by tying to databases

- Collection of tables or documents
- Tables:
  - Primary Keys (ID)
  - Records: Data within rows of table
- Mongo
  - Database = Database
  - Collections = Tables
  - Documents = Records
    - stored as JSON
    - Mongo is the shape of a JSON
  - Is a **Document Data Store**

  # Creating new MongoDB connections
  - Create Database by clicking +
  - Database - Test
    - Add files into db
    - insert options creates an ID that is tied to all inserted files
    - can change information using entrypoint


# Creating a MERN stack
    - M: Mongo
        - database
    - E: Express
        - server
    - R: React
        - Front end/client
    - N: Node
        - Everything in between

# Express

- Need a `package.json` file
  - generate by running `npm init` or `npm init -y`

- Install Dependencies:
  - Express: `npm i express`
    - build out routes, app.listen
  - Mongoose: `npm i mongoose`
    - package that connects to MongoDB
    - helps to build out schemas (models) to work w/ mongo
  - dotenv: `npm i dotenv`
    - store sensitive/ particular data
  - **NOTE**:
    - We can install multiple dependencies at once
    - ex: `npm i express mongoose dotenv`
- Entry point within `package.json`
  - `index.js` or `app.js`
- `.gitignore`
  - ignore files/folders that shouldn't be in a repo.
- NOTE: Make files first, then initialize, so you don't have to edit names in package.json
- Dev dependencies
    - work in root, helps developers so they don't have to download other programs to make it work
    - great for in case you've switched computers too
    - informs nodemon for THIS project
# .gitignore
    - don't want node modules go to all of database
    - server for front, and server for back
    - a base folder for all dependencies (/node_modules)
# .env
    - environmental file that stores variables (constants)
    - what files are necessary for servers to work
    - where to store secretive information
    - authentication - store passcodes, port #s, deployment routes, keys
    - added to `.gitignore`
    - entry point - per programmer, can edit/change variables for ease of use
    - Should have a sample version to communicate with team.
    - reflect all variables in example file
        - `example.env`














