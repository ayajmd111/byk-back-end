var express = require('express')
bodyParser = require('body-parser');
var route =require('../app/routes')


    module.exports = function () {
       var app = express();
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
      route(app);
    
        app.get('/abc',function(req,res){

            var abc={
                username:"ayaj"
            }
            res.json(abc)
        })


        return app;

    }