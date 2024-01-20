// scema
// https://mongoosejs.com/docs/guide.html
const mongoose= require('mongoose');
const Collection=require('../config/Collection');
require('../config/db')
const SignupSchema= new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
},{
    timestamps:true // kb data create hua tb update hua.
})

const SignupModel= mongoose.model(Collection.userinfo,SignupSchema)
module.exports=SignupModel