const express= require('express');
const port=8000;
const app=express();

const db=require('./config/mongoose');

// creating and importing the DB Schema
const Todo=require('./models/Todo');

app.use(express.static('./assets'));

// Handiling Routes
app.use('/',require('./routes/index.js'));



// Setting the View engine 
app.set('view engine','ejs');
app.set('views','./views');

// MiddleWare 
app.use(express.urlencoded({extended:true}));


// Getting the Express Server and running

app.listen(port,function(err){
    if(err){console.log(`Error in creating a Server : ${err}`); return;}
    console.log(` Express Server is running on port: ${port}`);
})