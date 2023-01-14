const express =require('express');
const path = require('path');

const route = express.Router();
const productControllers = require('../controllres/product')


route.get('/',productControllers.getshop);



module.exports= route;