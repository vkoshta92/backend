const http=require("http"); // import bhi kar skta hai.
const fs= require("fs"); // pure filesystem ko read krta h delee krta hai.
const lis= http.createServer(function(request,response){
  
    fs.readFile("t1.txt","utf8",function(err,data){
        console.log(data);
        response.end(JSON.stringify({fileData:data}))
    })
    console.log("call karo")
    // fs.unlink("t.txt", (e)=>{
    //     console.log(e);
    // })
    // response.end("hello world"); // server se response ke liye
    // response.setHeader('Content-type','text/plain')
    // response.end(JSON.stringify({name:"vishnu"}))
})



lis.listen(8080,()=>{
console.log('server started');
 })