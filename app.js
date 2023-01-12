const express = require('express');
const bodyParser= require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extenteded:false}));
app.get('/favicon.ico',(req,res)=>  res.status(204).end());

const adminRoutes = require('./route/admin');
const shopRoutes =require('./route/shop');

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
  res.status(404).send('<h1>page not found</h1>');
})








app.listen(3000);