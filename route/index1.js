const express = require('express');
const app = express();
// const db=require('../../db');

var route = express.Router();

route.use('user',require('./user'));
route.use('product',require('./product'));

module.exports ={

    route
}



route