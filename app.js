const express = require('express');
const bodyParser= require('body-parser');
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extenteded:false}));
app.get('/favicon.ico',(req,res)=>  res.status(204).end());

const adminRoutes = require('./route/admin');
const shopRoutes =require('./route/shop');
const contactusRoutes= require('./route/contactus');
const successRoutes = require('./route/success')

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contactus',contactusRoutes);
app.use('/success',successRoutes);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','error.html'));
})








app.listen(3000);