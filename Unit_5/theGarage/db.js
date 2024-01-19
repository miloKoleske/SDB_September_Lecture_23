/* 
    What is needed:
        - mongoose for connecting everything together
        - connection string and collection name

    - Logic built to connect to DB
    - Export functionality so that it is accessible to the rest of server (index.js)
*/

// pull in mongoose connection (aka dependency)

const mongoose = require('mongoose');
const connection = process.env.DBURL;
const collection = process.env.COLL;

const db = async () => {
try {
    await mongoose.connect(`${connection}/${collection}`, // creating variables of connect + collect make them flexible and describe where they are pulling from
    {
        // mongoose dependency warnings to remove
        useNewUrlParser: true,
        useUnifiedTopology: true
    }); 
    console.log(`Database connected to: ${connection}/${collection}`)

} catch (err) {
    throw new Error(`Error: ${err.message}`);
}

}
module.exports = {db, mongoose}