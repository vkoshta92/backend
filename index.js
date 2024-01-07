const server= require("./app")

const PORT_NO=8080;
const HOST="localhost"

server.listen(8080,HOST,()=>{
    console.log(`server startted at http://${HOST}:${PORT_NO}`);
})