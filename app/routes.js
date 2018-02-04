var byk = require('../app/byk/byk.ctrl')
var user =require('../app/user/user.ctrl')
var login = require('../app/user/login.ctrl')
module.exports=function(app){
    app.post('/api/bykregister',byk.register);
    app.post('/api/bykdetails',byk.getdetails);
    app.post('/api/userdetails',user.register);
    app.post('/api/logindetails',login.register);
    app.post('/upload',upload.any(),function(req,res)
{
    console.log(req.body)
    console.log(req.files)
    res.json(req.files)
})
}

//file upload

var multer = require('multer');
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'/upload/')
    },
    filename:function(req,file,cb){
        var datetimestamp = Date.now();
        cb(null,datetimestamp +','+file.orginalname.split(',')[file.orginalname.split(',').length -1])
    }
});
var upload = multer({
    storage:storage
})
