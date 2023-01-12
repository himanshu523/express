const express = require('express');
const bodyParser= require('body-parser');

const app = express();
app.get('/favicon.ico',(req,res)=>  res.status(204).end());
app.use(bodyParser.urlencoded({extenteded:false}));


app.use('/app-product',(req, res, next) => {
  console.log('product');
  res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="title"><input type="number" name="size" placeholder="size"><button type="submit">Add product</button></form>');

});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')

});

app.use('/',(req, res, next) => {
    console.log('default');
  res.send('<html><h2>hello</h2></html>');
  
});



app.listen(3000);