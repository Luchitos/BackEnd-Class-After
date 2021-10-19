require('dotenv').config();
let express = require("express");

let { config } = require("./config");
//Initializations
let app = express();

//Settings
//---> View Engine

//Middlewares

//Global Variables
const PORT = process.env.PORT;

//Routes
serverRoutes(app);

//Start the server
app.listen(PORT, ()=>{
    console.log("Server ON! escuchando dotenv", PORT, process.env.EMAIL_SUPPORT);

})