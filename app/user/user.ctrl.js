var config = require ("../../config/config");
var userSchema = require("./user.regmodel");
var user={}
//var userSchema = require('mongoose').model('userDetails');

user.register = (req,res) =>{
    console.log(req.body)

console.log("Hello")
    var userObj = new userSchema(req.body)
    userObj.save(function(err,results){
        if(!err)
        {
            console.log(results)
            res.json(results)
        }
        else{
            res.json(err)
        }
    })
}
module.exports=user