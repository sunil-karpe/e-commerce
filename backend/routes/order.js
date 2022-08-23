const Order = require("../model/Order");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

router.post("/",verifyTokenAndAuthorization,async(req,res)=>{

    try {

        const newOrder= new Order(req.body);
        const savedOrder=await newOrder.save();
        res.status(200).json(savedOrder);

    } catch (error) {
        res.status(400).json(error);
    }

})







// //UPDATE ORDER
// //http://localhost:8001/orders/:id

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {


    try {
        const updatedOrder= await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedOrder);

    } catch (err) {
        res.status(401).json(err);
    }

})

// DELETE ORDER
// http://localhost:8001/orders/:id
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const order = await Order.findByIdAndDelete(req.params.id);


        res.status(200).json("Order has been deleted!");


    } catch (err) {
        res.status(401).json(err);
    }

})


// GET ORDER
// http://localhost:8001/orders/:id
router.get("/find/:userId", verifyTokenAndAdmin, async (req, res) => {

    try {
        const orders = await Order.find({userId:req.params.userId})
        res.status(200).json(orders);


    } catch (err) {
        res.status(500).json("Something went wrong");
    }

})


// GET ALL ORDERS
// http://localhost:8001/orders
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {

       const orders=await Order.find();
        res.status(200).json(orders);


    } catch (err) {
        res.status(500).json("Something went wrong");
    }

})





module.exports = router;


//Testing the router created
//Append the below paths to the url - http://localhost:8001/users

//http://localhost:8001/users/usersRouterTest
router.get("/test",(req,res)=>{
    res.status(200).send("Users Router test successful!");
})