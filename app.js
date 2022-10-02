const express  = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const userRouter = require("./routes/users");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',userRouter);




mongoose.connect(process.env.URL,
    (error)=>{
        if(error) 
        console.log(error);
        else console.log("cnnected");
});


app.listen(3000,()=>{
    console.log("Server");
});


