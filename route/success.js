const express =require('express');
const route =express.Router();
const path = require('path');

const rootDir = require('../util/path');

route.post('/',(req,res,nexr)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
    console.log('success');
    //res.redirect('/contactus');
})

module.exports = route;

