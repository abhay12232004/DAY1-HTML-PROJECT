const express = require('express');
const path = require('path');
const fs = require("fs");
const { body, validationResult } = require("express-validator");
const app = express();
let port = 3000;

// enable reading for form 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.hmtl'));
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, 'about.hmtl'));
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, 'contact.hmtl'));
})

app.post(
    '/submit', 
    [
    body("name").notEmpty().withMessage("Name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be 6+ chars")
  ],

  (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json(errors.array());
    }
    res.send("Succesfully submitted! ");
  }
    
)


app.listen(port , ()=>{
    console.log("Server is running over 3000! ");
})