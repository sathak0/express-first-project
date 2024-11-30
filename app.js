const express = require('express');

const app = express();



app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.get('/home',(req,res)=>{
    res.send("home");
})

app.listen(3000);