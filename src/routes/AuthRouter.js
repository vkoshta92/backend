const express= require('express');
const AuthController = require('../controller/authControler'); // ye object dega  jisme signup h
const authRouter=express.Router();



authRouter.post("/signup",AuthController.signup)
authRouter.post ("/signin",AuthController.signin)
authRouter.post("/logout",AuthController.logout)

module.exports=authRouter;