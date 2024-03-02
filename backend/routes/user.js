//this api handles all the requests related to the user
const express = require('express')
const userRouter = express.Router();
const zod = require('zod');
const jwt = require('jsonwebtoken') 
const JWT_SECRET = "pixel_prodgies_team"
const {User,Subjects} = require("../db"); //calling db from the api db.js
const { authMiddleware } = require('../middleware')



//creating schema for input validation
const signUpschema = zod.object({
	userName: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

// creating the post request to handle the signup request ["not tested"]
userRouter.post('/signup', async (req, res)=>{
    const body = req.body;

    const { success } = signUpschema.safeParse(req.body) //checking if the input from req.body is correct or not
    
    //seding back error message if the inputs are wrong
    if(!success){
        res.json({
            message: "there is a issue in giving the body to signup route"
        })
        return

    }
    
    //checking if the email id is already taken
    const existingUser = await User.findOne({
        userName: req.body.userName
    })
    
    //returning an error is the emailID is already taken
    if(existingUser){
        res.json({
            message:"the emailId is already used"
        })
        return

    }
    //adding in subject db
    const subjects = await Subjects.create({
        userName: req.body.userName,
        subjects:[]
    })


    // now the input is correct and the email is unique so adding the new user in the db
    const user = await User.create({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    })

    const userId = user._id //storing the unique db id of the user created in the variable userId
    
    //creating a token for sending the jwt token  back to the user for further ease in signin
    const token = jwt.sign({userId},JWT_SECRET);
    
    //sending the sucess message and the token back to the user after creating the user account in the db
    res.json({
        message: "user created sucessfully",
        token: token
    })
})


//creating the signin schema for sign in iput validation
const signInSchema = zod.object({
	userName: zod.string().email(),
	password: zod.string()
})

// creating the post request to handle the signin request ['']
userRouter.post('/signin', async (req,res)=>{

    //doing the input validation
    const { success } = signInSchema.safeParse(req.body);
    if(!success){
        res.status(401).json({
            message: "there is a issue in the input of the signin body please check it"
        })
        return
    }
    //checking if the user exists or not
    const existingUser = await User.findOne({
        userName: req.body.userName,
        password: req.body.password
    });
    //doing thigns after knowing that the user exists or not
    if(existingUser){
        // creating the token and sending it back to the user along with the sucess message
        const token = jwt.sign({
        userId: existingUser._id
        },JWT_SECRET)
        
        res.json({
            token: token,
            message: 'the user has sucessfully logedin'
        })
        return
    }else{
        //sending back ans error message if the user has input wrong username or password
        res.status(411).json({
            message: "username or the password is wrong"
        })
        return
    }

})

// route to get all the users from the databae
userRouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.userName,
            firstName: 
            user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

//update subjects
userRouter.put('/update', async (req, res) => {
    const userName = req.headers.email; // Access the userName from the request headers
    const subjects = req.body.subjects; // Get the updated subjects array from the request body
  
    await Subjects.updateOne({ userName: userName }, { subjects: subjects });
  
    res.status(200).json({
      message: "subjects updated successfully"
    });
});



userRouter.get('/getSubs', async(req,res)=>{
    const username = req.headers.email;
    const user = await Subjects.findOne({userName:username})
    res.send(user.subjects)

})
  
  
  


module.exports = userRouter