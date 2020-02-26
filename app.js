/**
 * All The Base Imports
 */
const app = require('express')();
const body_parser = require('body-parser');
const morgan = require('morgan');


/**
 * Some Important Variables
 */

 const PORT = 8080;

/**
 * Configuring Middlewares 
 */
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));


/**
 * Configuring Base Routes
 */
app.get("/",(req,res)=>{
    res.send("Server Working Like A Charm");
});


/**
 * Starting Server
 */

 app.listen(PORT, ()=>{
    console.log("Server Working On localhost:"+PORT);~
 });