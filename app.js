const express  = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

mongoose.connect(process.env.URL,
    (error)=>{
        if(error) 
        console.log(error);
        else console.log("cnnected");
});


app.listen(3000,()=>{
    console.log("Server");
});


