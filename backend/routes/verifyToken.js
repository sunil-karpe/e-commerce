const JsonWebToken=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{

    const authHeader=req.headers.token;
    if(authHeader){
        const token=authHeader.split(" ")[1];
        JsonWebToken.verify(token,process.env.JWTPASS,(err,user)=>{
            if(err) res.status(400).json("Token is not valid!");
            req.user=user;
            next();
            
        })

    }else{
        res.status(400).json("You are not Authorized!");
    }

}

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id|| req.user.isAdmin){
            next();

        }else{
            res.status(401).json("You are not allowed to do!");
        }
    })
}

//Only admin can add the product or order
const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();

        }else{
            res.status(401).json("You are not allowed to do!");
        }
    })
}


module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin};