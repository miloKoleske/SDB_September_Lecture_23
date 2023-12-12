// TODO: store in the req a timestamp key that hold a value of HH:MM
// save 

let time = new Date();
let logTime = () => {
  return `[${time.getUTCHours()}:${time.getUTCMinutes()}}]`
};
console.log(logTime2)
app.use(logTime) 
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(`${__dirname}`)); 
console.log('pathway:', __dirname);

/* app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })

app.use('/findTitle/:title', (req, res) => {
}) */