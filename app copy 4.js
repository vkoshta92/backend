const  express= require('express');
const app=express();
const cors= require('cors');
const multer=require('multer');
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
app.use(express.json());// middleware raw json ke liye request bhejne pr data ko json ko object me krta h
app.use(express.urlencoded({extended:true}));// form ke  urlencoded data ko bhejne ke liye
// app.use(multer().none());file and text ke liye pr none se file nhi jega pr hmne ise direct niche use kiya h nhi to sbme le lega to app rash ho jegi.
//application level middleware
// builtin middleware
//agar  multime me chiye to signup hta dnege sbme km krega
// routebase , custom , error middleware.
app.post("/signup",(request,response)=>{
const rData=request.body; // bheja json me h object chiye h isliye {} aa rha tha , ab hm log middle ware use kkarenffea, ak middle ware jitne che utni request par chl jega bs sbse uper call hone chiye
response.json({data:rData})

// const k={
//     name:"kumar"
// }
// response.json({data:k})
})

// dynmic data 
app.post("/signup/:id/:myid",(request,response)=>{
    const x=request.params;  // object ke form me data dega tbhi neche .id likha h
    //const x=request.params.id; // bheja json me h object chiye h isliye {} aa rha tha , ab hm log middle ware use kkarenffea, ak middle ware jitne che utni request par chl jega bs sbse uper call hone chiye
    response.json({data:x})
    
    // const k={
    //     name:"kumar"
    // }
    // response.json({data:k})
    })


    //for encoded data
app.post("/urlencode",function(request,response){
    const myData= request.body;
    response.json({data:myData})
})


// file or textbhejne ke liye jse audio video photo
// file type data middleware insall
//npm i multer
 app.post ("/formdata",multer().none(),function(request,response){ // routes,middleware,controler
    const formData=request.body;
    response.json({data:formData})
 })


module.exports=app;
