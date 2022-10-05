const express  = require("express");
const mongoose = require("mongoose");
const winston = require("winston");
const app = express();
require('dotenv').config();
const userRouter = require("./routes/users");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',userRouter);


const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console({
        format:winston.format.combine(
            winston.format.colorize({all:true})
        )
      }),
      new winston.transports.File({ filename: 'error.log',level: 'error' })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
      ]
  });

mongoose.connect(process.env.URL,{useNewUrlParser:true})
    .then(()=>{
        logger.log("info","cnnted");
    })
    .catch((error)=>{
        logger.log("error",error);
    });



app.listen(3000,()=>{
    console.log("Server");
});


