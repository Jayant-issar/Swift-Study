// this file consists of the main backend things (this is the main file which will be executed)
const express = require("express");
const app = express()
const rootRouter = require('./routes/index')
const cors = require('cors'); //calling cors

app.use(cors()) // calling the cors middle ware
app.use(express.json()) //enabling the json middleware to make sure we are able to parse through the json data without fail

// routing all the incoming requests t0 root router
app.use('/',rootRouter)

const port = 2323

app.listen(port,()=>{
    console.log('the backend is listning on the port: '+port);
})