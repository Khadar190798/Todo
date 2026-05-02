// Importing the Todo schema
const Todo = require("../models/Todo");


module.exports.deleteAll=function(req,res){
    // Find is used to get all Todo Item Objects and checking for the Checked Items using For loop 
    Todo.find({}).then((value)=>{
        // console.log(value);
        for(i of value){
            if(i.checked=='checked'){
                // If an item with checked state is found , then we will delete Those Items
                Todo.findByIdAndRemove(i.id).catch((err)=>{
                    console.log(`Error: ${err}`);
                });
            }
        }
    })

    // Once loop over Items finish, it will be redirected to the Home page 
    res.redirect('Todo');
}