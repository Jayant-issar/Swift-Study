//this files deals with all the database stuff
// this file deals with all the data base realted stuff

const express = require('express');
const mongoose = require('mongoose'); //adding mongoose library in the file
const { object, array } = require('zod');


//connecting to a data base
mongoose.connect("mongodb+srv://jayantissar8:jayant2323@cluster0.8rovxij.mongodb.net/swift-study-db")

//mongose schema for user tabels
const userDbSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    password: String
})

//creating the model from the schema created (userDbSchema)
const User = mongoose.model("User",userDbSchema)

//creating subject model schema
const subjectSchema = new mongoose.Schema({
    userName: String,
    subjects: {
        type: Array,
        default: []
    }
})

//creating a model from the schema created
const Subjects = mongoose.model("Subjects",subjectSchema)



module.exports = {
    User,
    Subjects
}
