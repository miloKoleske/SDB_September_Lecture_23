
- set variables to connect express method
    - set PORT number

  ```js
  const express = require('express');
  const app = express();
  const PORT = 4000;
  ```

    - set application to use JSON

  ```js
    app.use(express.json());
  ```

- Create a middleware function (in own file)
    - capture current logTime (to show something is being hit)

```js
//middleware.js
function getTimestamp(req,res,next) {
    console.log('GET TIME STAMP')

    next();
}
```

- Fire off function to invoke
    - wrap inside object (maybe have more function further on)

```js 
module.exports = {
    getTimestamp: getTimestamp
}
```
- tell app to listen

```js
    app.listen(PORT, () => console.log(`Running: ${PORT}`));
```

```js
// index.js
    const{ getTimeStamp} = require('./utils/middleware');
    app.use(getTimestamp);
```

- Create a request through postman to test
    - GET
        - Postman:
            - set endpoint: localhost:4000/
            - save
            - send 
            - should read in terminal


- Hit timestamp 
    - Store inside of request object (every route will evaluate request given, upon sending response can store return timestamp as well)

    ```js
    //middleware (inside getTimestamp function)
    req.timeStamp = 'HH:MM'
    console.log(req.timeStamp);
    ```

    - generate timestamp that captures exact current time
        - new Date (object)
        - locale string - create into two objects in an array
        - limit to HH, MM to convert to a string "2-digit"
        ``` js
        //middleware
        const date = new Date();
        req.timeStamp = date.toLocaleString([], [hour: "2-digit", minute: "2-digit"]);
        ```

    - toLocaleString
        - method, accepts parameters, references date
        - inside array, establish time zone 

    - ANOTHER WAY:
        - still using new DATE object 
        - create imperatively by setting variables for hour & minute, then
        - string time together
            - NOTE: is in military time

        ```js
        //middleware
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const time = `${hour}:${minute}`
        ```

- Create Routes:
    - GET ALL
        - create router variable and database with require
        - create database variable to link back to content in data.json file
        - import and fire off function (create a variable)

        ``` js
        //index
        app.use('/routes', controller);
        ```

        ```js
        //routes.controller
        const router = require('express').Router();
        const db = require('../data.json')
        ```

        - create a router.get w/ an empty endpoint
        - along with results, store timestamp on each router
        - set status of res if successful 

        ```js
        //routes.controller
        router.get('/', (req,res) => {
            try {
                res.status(200).json({
                results: db,
                timeStamp: req.timeStamp
                })
            } catch (error) {
                res.status(500).json ({
                error: err.message
        })
        }});
        ```

    - GET ONE BY ID
        - pulling by id key of what object is inside of params
        - { id } is an established key w/in params
            - is based off the endpoint /find-id/:id
            is faster than writing req.params each time
            - generate keys w/in try:
                - results
                - timestamp
    ```js
    // routes.controller
    router.get('find-id/:id', (req,res) => {
        try { id } = req.params;
            let results = db.filter(i => i.id == id);
            if (results.length !== 0){
            res.status(200).json({
                results: results[0],
                timestamp: req.timeStamp
            } else {
                throw new Error('no book')
            }) 
            }});
    ```

    - POSTMAN
        - duplicate previous GET
        - change endpoint


    - GET ONE BY TITLE using query
        - catch is what is sent back (shows there is an error)
        - else identifies what the error response is
        - title.toLowerCase allows a lowercase version to still be identified
            ```js
            // routes.controller
            router.get('/query/', (req,res) => {
                try {
                    const {title} = req.query;

                    let results = db.filter(i => i.title.toLowerCase() == title.toLowerCase())
                        if (results.length > 0) {
                            res.status(200).json({
                                //results: {title: `${title}`}
                                results: results[0],
                                timestamp: req.timeStamp
                            })}
                        else {
                            throw new Error('Title not found')
                        }
                } catch {
                    catch (err) {
                        res.status(500).send(
                    )
                }
            }})
            ```

        - POSTMAN:
            - localhost:4000/routes/query?title=Animal Farm
            - in postman body, "Animal Farm" is just what upper variable is (title=Animal Farm)
            - NOTE: endpoint URL is CASE SENSITIVE
            - works because object exists in array, is less than zero 

    - POST TITLE AND AUTHOR
        - accept JSON that includes title and author
            ```js
            // routers.controller
                router.post('/titleAuthor', (req,res) => {
                    try {
                        const { title, author} = req.body;

                        res.status(200).json({
                            title: title,
                            author: author,
                            timestamp: req.timeStamp
                        })
                    } catch (err) {
                        res.status(500).json({
                            error: err.message
                        })
                    }
                })
            ```

        - POSTMAN
            - Body - raw - JSON
            - enter title and author

            ```js
            // inside Body of POSTMAN
            {
                "title": "1984",
                "author": "George Orwell"
            }
            ```


