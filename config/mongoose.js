var config2 = require('./config');
var mongoose = require('mongoose');
module.exports=function(){
    mongoose.connect(config2.dbConnection).then(()=>{
        console.log("Database connected");
    }).catch((error) =>{
        console.log("error to connect database");
          
    })

    }
