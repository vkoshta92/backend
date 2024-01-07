const http=require("http"); 
const app=http.createServer(function(request,response){
    // console.log('hello');
    response.end(`
    <html>
    <head>
  
    <style>
    h1{color:red}
    </style>
    </head>
    <body>
    <h1>hello yaar</h1> 
    </body>
    </html>
    `)
   

})


app.listen(4000,function(){
    console.log('server started');
})