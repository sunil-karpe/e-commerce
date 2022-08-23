const router=require("express").Router();

const STRIPE_KEY=process.env.STRIPE_KEY || "your stripe secrete key";
const stripe=require("stripe")(STRIPE_KEY);


router.post("/payment",(req,res)=>{
    stripe.charges.create(
        {
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:"usd",
            description:"THis is testing transcation"
        },
        (stripeErr,stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else{
                res.status(200).json(stripeRes)
            }
        }
    )
})

router.get("/payment",(req,res)=>{
    res.status(200).json("payment received!");
})



module.exports=router;