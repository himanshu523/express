const express =require('express');
const path = require('path');

const route = express.Router();
const rootDir= require('../util/path')

route.get('/',(req,res,next)=>{
    console.log("hello");
    res.sendFile(path.join(rootDir,'views','shop.html'));
});



module.exports= route;