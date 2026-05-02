
const Todo = require("../models/Todo");


// Append the form Data into the Data Base 

module.exports.add=function(req,res){
   // Adding the Data into the DB
   Todo.create({
      description: req.query.description,
      category:req.query.category,
      date:req.query.date
      
   }).catch((err)=>{
      // Logging the Error while Creating the Todo Item object in DB
      console.log(`Error in Creating the Todo ${err}`);
   });
   res.redirect('back');
}