const express = require('express');

// Predefined Router function for Every possible Routes
const router = express.Router();


// storing the Controller into a variable-Shaik_khadar for using the Function
const home_Controller=require('../controllers/home_Controller');
const add_Controller= require('../controllers/add_Controller');
const delete_Controller=require('../controllers/delete_Controller');
const check_state=require('../controllers/check_state_controller');
const delete_All_Controller=require('../controllers/delete_All_Controller');




// Routes for the Adding , Deleting & Updating the Database and Home page
router.get('/Todo',home_Controller.home);
router.get('/add',add_Controller.add);
router.get('/delete',delete_Controller.delete);
router.get('/check-state',check_state.check);
router.get('/delete-All',delete_All_Controller.deleteAll);

// Exporting the Router 
module.exports=router;



