'use strict'

var express = require('express');
var bodyParse = require('body-parser');

var app= express();

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

app.get('/pruebas',(req,res)=>{
    res.status(200).send({message:'Bienvenido al curso Mean2'});
});

module.exports =app;