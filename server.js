//var express = require('express');
var config = require('./config/config');
var express = require('./config/express');
var moongoose = require('./config/mongoose')();

server=express();
server.listen(config.port);
console.log("port running on"+config.port)
