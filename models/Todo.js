
// Getting the Mongoose library
const Mongo=require('mongoose');
// Creating the Schema for the DB
const todoSchema = new Mongo.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    checked:{
        type:String,
        default:"unchecked"
    }
});

// Creating the Model for the schema
const Todo =Mongo.model('Todo',todoSchema);
// Exporting the Todo Model for to available on Entire project 
module.exports=Todo;