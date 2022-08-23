const Cart = require("../model/Cart");

const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

router.post("/",verifyTokenAndAuthorization,async(req,res)=>{

    try {

        const newCart= new Cart(req.body);
        const savedCart=await newCart.save();
        res.status(200).json(savedCart);

    } catch (error) {
        res.status(400).json(error);
    }

})







// //UPDATE CART
// //http://localhost:8001/carts/:id

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {


    try {
        const updatedCart= await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedCart);

    } catch (err) {
        res.status(401).json(err);
    }

})

// DELETE CART
// http://localhost:8001/carts/:id
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);


        res.status(200).json("Cart has been deleted!");


    } catch (err) {
        res.status(401).json(err);
    }

})


// GET CART
// http://localhost:8001/carts/:id
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const cart = await Cart.findOne({userId:req.params.userId})
        res.status(200).json(cart);


    } catch (err) {
        res.status(500).json("Something went wrong");
    }

})


// GET ALL CARTS
// http://localhost:8001/carts
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {

       const carts=await Cart.find();
        res.status(200).json(carts);


    } catch (err) {
        res.status(500).json("Something went wrong");
    }

})





module.exports = router;


//Testing the router created
//Append the below paths to the url - http://localhost:8001/users

//http://localhost:8001/users/usersRouterTest
// usersRouter.get("/usersRouterTest",(req,res)=>{
//     res.status(200).send("Users Router test successful!");
// })