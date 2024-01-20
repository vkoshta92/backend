// account ke sare function jo call honge

const SignupModel = require("../model/AccountModel");

exports.signup= async (request,response,next)=>{
try{
   const bodyData= request.body; // jo frontend bhejega.
if(!bodyData.name){
    return response.status(400).json({
        status:"failed",
        message:"Name is required"
    })
}

if(!bodyData.password){
    return response.status(400).json({
        status:"failed",
        message:"Password is required"
    })
}
   const signupData={
    name:bodyData.name,
    email:bodyData.email,
    password:bodyData.password
   }
   const dbRes= await SignupModel.create(signupData);
   if(dbRes){
    response.status(200).json({
        status:"success",
        message:"Signup Succesfully",
        data:dbRes
       })
   }
 

}
catch(err){
   response.status(401).json({
    status:"failed",
    message:"invalid Detaiils"
   })
}
}

exports.signin= (request,response)=>{
    response.json({status:"signin"})
}

exports.logout=(request,response)=>{
    response.json({dosa:"logout"})
}