const mongoose = require ("mongoose")
const userSchema =new mongoose.Schema({
    full_name:{type:String,required:true},
    mail:{type:String,required:true},
    password:{type:String,required:true},
    job:{type:String},
    review:{type:String},
    hour_price:{type:String},
    hour_day:{type:String},
    bio:{type:String},
    adress:{type:String},
    desponibilite:{type:Boolean,default:true},
    num_tel:{type:String},
    activity:{type:String}
})
module.exports.userSchema=userSchema;