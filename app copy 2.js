const  express= require('express');
const app=express();
const cors= require('cors');
app.use(cors());

app.get("/data",function(request,response){
   
    response.json({
        status:"get data"
    })
})

app.get("/jodo",function(req,res){
    const data= req.query; // jase name and email dlne ke liye url me api me use krte h 
    console.log('data',data);
    res.json({
        message:"jodo na",
        yourData:data.name+" "+data.email+" Hello"
    })
})


module.exports=app;