/**
 * All The Base Imports
 */
const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');


/**
 * App Object Declaration
 */

 const app = express();

/**
 * Some Important Variables
 */
 const PORT = process.env.PORT || 8080;

/**
 * Configuring Middlewares 
 */
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(body_parser());


/**
 * Express To Serve Static Files
 */
 app.use(express.static('public'));


 /**
  * Set Render Engine
  */

  
  app.set('view engine','ejs');
  // Now we can use res.render to render ejs pages

/**
 * Configuring Base Routes
 */
app.get("/",(req,res)=>{
    res.render('index',{
        pageName : 'ColLancer'
    });
});


/**
 * Starting Server
 */

 app.listen(PORT, ()=>{
    console.log("Server Working On localhost:"+PORT);
 });