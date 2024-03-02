//this is the main file of the backend routes it sends all the routes coming from the main index file to respected handler

const express = require('express');
const userRouter = require('./user') // importing userrouter from user.js
const router = express.Router();  // creating a router



router.use('/user',userRouter) //sending all the requests to userRouter from the source "/user"









//exporting the router
module.exports = router