const express = require('express');

const route = express.Router();

route.get('/add-product',(req, res, next) => {
    console.log('product');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="title"><input type="number" name="size" placeholder="size"><button type="submit">Add product</button></form>');
  
});
route.post('/add-product',(req,res,next)=>{
      console.log(req.body);
      res.redirect('/');
  
});

  module.exports= route;
  