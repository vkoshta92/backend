const  express= require('express');
const app=express();
const cors= require('cors');
app.use(cors());

app.get("/data",function(request,response){
   
    response.json({
        status:"get data"
    })
})

// app.get("/jodo",function(req,res){
//     const data= req.query; // jase name and email dlne ke liye url me api me use krte h 
//     console.log('data',data);
//     res.json({
//         message:"jodo na",
//         yourData:data.name+" "+data.email+" Hello"
//     })
// })
// app.use("/signup",express.json());
app.use(express.json());// middleware  request bhejne pr data ko json ko object me krta h
//application level middleware
// builtin middleware
//agar  multime me chiye to signup hta dnege sbme km krega
// routebase , custom , error middleware.
app.post("/signup",(request,response)=>{
const rData=request.body; // bheja json me h object chiye h isliye {} aa rha tha , ab hm log middle ware use kkarenffea, ak middle ware jitne che utni request par chl jega bs sbse uper call hone chiye
response.json({data:rData})
})


module.exports=app;