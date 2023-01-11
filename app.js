const express = require('express');
const { createServer } = require('http');

const app = express();
app.get('/favicon.ico',(req,res)=>  res.status(204).end());

app.use((req, res, next) => {
  console.log('In the middleware!',req.url);
  
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send({ "key1": "value" })
  
});

const server = createServer(app);


server.listen(3000);