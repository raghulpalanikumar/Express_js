const http = require('http');
const express = require('express');
const app = express();

app.use((req,res,next)=>{
  console.log('First Middleware');
  next();  
})
app.use((req,res)=>{
    console.log('Second Middleware');
    res.send('<h1> hello form express!</h1>');
})
app.listen(3000);