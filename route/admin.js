const express = require('express');
const path = require('path');
const productControllers = require('../controllres/product')

const route = express.Router();


route.get('/add-product',productControllers.getAddproducts);
route.post('/add-product',productControllers.postAddProducts);

 module.exports= route;
  