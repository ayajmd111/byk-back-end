var config = require ("../../config/config");
var carSchema = require("./byk.model");
var byk={}
//var carSchema = require('mongoose').model('carDetails');

byk.register = (req,res) =>{
    console.log(req.body)

    var carObj = new carSchema(req.body)
    carObj.save(function(err,results){
        if(!err)
        {
            console.log(results)
            res.json(results)
        }
        else{
            console.log(results)
        }
    })
}

byk.getdetails = (req, res) => {
    carSchema.find({}, function (err, doc) {
           if (!err) {
               res.json(doc)
           }
           else {
               res.json(err)
   
           }
   
       })
   }


module.exports = byk;