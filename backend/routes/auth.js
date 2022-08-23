const authRouter=require('express').Router();
const User=require('../model/User');
const CryptoJs=require('crypto-js');
const JsonWebToken=require('jsonwebtoken');

const PASS=process.env.PASS || "dummy";
const JWTPASS=process.env.JWTPASS || "dummy"

//Post to http://localhost:8001/auth/register
//Add the content like username,email and password to the body area of postman.
authRouter.post("/register",async(req,res)=>{

    try{
        const newUser={
            username:req.body.username,
            email:req.body.email,
            password:CryptoJs.AES.encrypt(req.body.password,PASS).toString(),
            isAdmin:req.body.isAdmin
        }
        const data= await new User(newUser).save();

        res.status(200).json(data);

    }catch(e){
        res.status(400).json(e);
    }

})


//Router for handling login
authRouter.post("/login",async(req,res)=>{

    try{
      
        const user=await User.findOne({username:req.body.username});
        if(!user){
            throw {error:"No user found!"}
        }
        const hashedPassword=CryptoJs.AES.decrypt(user.password,PASS);

        let userpassword=hashedPassword.toString(CryptoJs.enc.Utf8);

        if(userpassword !== req.body.password){
            throw {error:"Wrong crendentials"}
        }

        const accessToken=JsonWebToken.sign(
            {
            id:user._id,
            isAdmin:user.isAdmin,
            },
            JWTPASS,
            {expiresIn:"3d"}
        )

        const {password,...otherUserData}=user._doc;
        res.status(200).json({...otherUserData,accessToken});


    }catch(e){
       return res.status(404).json(e);
    }

})



module.exports=authRouter;

//Testing the authentication router
// authRouter.get("/register",async(req,res)=>{

//     try{
       
//         res.status(200).json("testing register router-Success");

//     }catch(e){
//         res.status(404).json(e);
//     }

// })