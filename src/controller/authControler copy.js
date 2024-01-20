// account ke sare function jo call honge

exports.signup= (request,response,next)=>{
    try{
        // response.json({status:"signup successs"})
        const bodyData=request.body;
        if(bodyData.name.length>5){
            response.status(200).json({
                status:"success",
                token:"bdj6kfloevk693b",
                name:"vihsnsu",
                email:"vishnu@gmail.com",
                message:"signup successfull"
            })
        }
        else{
            response.status(200).json({ // parameter shi ho data galt ho jse  5se km to ye print hoga.
                status:"failed",
                
                message:"your name name should be greater than 5 "
            })
        }
       
    }
    catch(err){
        // console.log('error');
        response.status(401).json({ // yha se exit ho jega koi aur iske bd dunction hoga cll nhi krega
            status:"failed",
            message:"invalid details "
        })
    }
    }
    
    exports.signin= (request,response)=>{
        response.json({status:"signin"})
    }
    
    exports.logout=(request,response)=>{
        response.json({dosa:"logout"})
    }