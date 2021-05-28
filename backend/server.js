const express = require("express")
const dotenv = require("dotenv").config();
const app = express();
const mongoose = require("mongoose")
const bodyparser = require("body-parser");


// connection


mongoose.connect("mongodb://localhost:27017/Food_ordering", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("connection success")).catch((error) => console.log(error))

//Middle ware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
//Routing
//static foders

app.use(express.static("uplodes"))

app.use("/Restorent",require("./src/routers/Restorent"));
app.use("/fooditem",require("./src/routers/Fooditem"));


//get routers
app.use("/fetch",require("./src/routers/getreq"))

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`your server is running port nomber ${process.env.PORT} `)
});




