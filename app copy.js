const  express= require('express');
const app=express();

app.get("/data",function(request,response){
    response.json({
        status:"get data"
    })
})
app.post("/data",function(request,response){
    response.json({
        status:"post data "
    })
})


app.put("/data",function(request,response){
    response.json({
        status:"put data "
    })
})
app.delete("/data",function(request,response){
    response.json({
        status:"delete data "
    })
})


module.exports=app;