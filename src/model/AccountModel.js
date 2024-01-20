// scema
// https://mongoosejs.com/docs/guide.html
const mongoose= require('mongoose');
const Collection=require('../config/Collection');
const { passwordEncoded } = require('../utils/Utils');
require('../config/db')
const SignupSchema= new mongoose.Schema({
    name:{type:String,required:[true,"name is Required"]},
    email:{type:String,unique:true},
    password:{type:String,required:[true,"Password is required"]}
},{
    timestamps:true // kb data create hua tb update hua.
})

//middleware
SignupSchema.pre('save',function(){ // ye middle ware data dalne se phle call hoga tki mera password  encrypteed ho jae.
this.password=passwordEncoded(Collection.userinfo,SignupSchema)
})
const SignupModel= mongoose.model(Collection.userinfo,SignupSchema);
module.exports=SignupModel