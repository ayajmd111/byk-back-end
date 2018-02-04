var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

var userSchema = new mongoose.Schema({

    firstName :{type:String},
    lastName:{type:String},
    userName:{type:String},
    pass :{type:String},
    email:{type:String},
    mnumber:{type:Number},
    create_Date:{type:Date,default:Date.now},

});
userSchema.pre('save',function(next)
{
    var user= this;
    

    if(!user.isModified('pass'))return next();
    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt)
{
    if(err) return next(err);

    bcrypt.hash(user.pass,salt, function(err,hash)
{
    if(err) return next(err);
    user.pass=hash;
    next();
})
})
})




module.exports = mongoose.model('userDetails',userSchema);