var mongoose = require('mongoose');
var carSchema = new mongoose.Schema({
  cname:{type:String,unique:true},
  model:{type:String},
  cc:{type:Number},
  year:{type:String},
  color:{type:String},
  chasis:{type:String},
  number:{type:String},
  number:{type:String},
  place:{type:String},
  insur:{type:String},
  iedate:{type:String},
  fuel:{type:String},
  







    create_Date:{type:Date,default:Date.now}

});
module.exports = mongoose.model('carDetails',carSchema);