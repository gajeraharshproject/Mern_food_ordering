const express = require("express")
const dotenv = require("dotenv").config();
const app = express();
const validator = require("validator")


app.listen(process.env.PORT,(err) => {
    if(err) throw err;
    console.log(`your server is running port nomber ${process.env.PORT} `) 
});





