'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port= process.env.PORT || 3977;

mongoose.connect('mongodb://172.17.0.2:27017/spotybizz',(err,res)=>{
    if(err){
        throw err;
    }
    else{
        console.log('la base de datos esta corriendo correctamente');
        
        app.listen(3977,function(){
            console.log('Servidor de api rest de musica escuchando el http://localhost:'+port);
        })
    }
});