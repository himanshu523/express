const path= require('path');

const rootDir=require('../util/path');

exports.getContactForm =(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
    console.log('contactus');
}
