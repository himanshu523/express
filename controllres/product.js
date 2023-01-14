const path = require('path');
const rootDir= require('../util/path');

exports.getAddproducts =(req, res, next) => {
    console.log('product');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
  
}

exports.postAddProducts =(req,res,next)=>{
    console.log(req.body);
    res.redirect('/admin/add-product');

}

exports.getshop =(req,res,next)=>{
    console.log("hello");
    res.sendFile(path.join(rootDir,'views','shop.html'));
};