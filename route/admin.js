const express = require('express');
const path = require('path');

const route = express.Router();
const rootDir= require('../util/path');

route.get('/add-product',(req, res, next) => {
    console.log('product');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
  
});
route.post('/add-product',(req,res,next)=>{
      console.log(req.body);
      res.redirect('/admin/add-product');
  
});

 module.exports= route;
  