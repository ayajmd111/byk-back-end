var config = require ("../../config/config");
var loginSchema = require("./user.regmodel");
var login={}
login.register= (req,res) =>{
    console.log(req.body)

    //var userObj = new loginSchema(req.body);
    loginSchema.findOne({userName:req.body.userName,pass:req.body.pass},function(err,results){
        if(!err)
        {
            if(results==null){
                console.log("user doesn't exist")
                res.json(400);
            }
              else{
                  res.json(results);
                  console.log("user exists");
              }
           
            
        }
        else{
            console.log(results)
            res.json(400);
        }
    })
}

function webToken(data) {
    var token = jwt.sign(data, config.key);
    return token;
}

module.exports=login;