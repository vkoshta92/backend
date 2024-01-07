const http=require("http"); 
const app=http.createServer(function(request,response){
    // console.log('hello');
    const obj= {
        name:"Amit",
        lastname:"kumar"
     }
        
    const ur= request.url;
    console.log(ur);
    if(ur==="/signup" && request.method==="POST"){
        response.end(JSON.stringify(obj))
    }

    
    else{
        response.end("nahi mila url")
    }

   
})

// response deta dene ke liye request data lene ke liye


app.listen(4000,function(){
    console.log('server started');
})