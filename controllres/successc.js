const path= require('path');

const rootDir = require('../util/path');

exports.getsuccess =(req,res,nexr)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
    console.log('success');
    //res.redirect('/contactus');
}