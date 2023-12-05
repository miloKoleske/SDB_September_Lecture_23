
app.use(logTime)
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(`${__dirname}`)); 
console.log('pathway:', __dirname);

app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })

app.use('/findtitle/:title', (req, res) => {
    
})